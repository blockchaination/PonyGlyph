import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { MOROCCAN_REGIONS, EXPERIENCE_CATEGORIES, DIFFICULTY_LEVELS } from '../../types/experience';
import { supabase } from '../../lib/supabase';

export function CreateExperiencePage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    region: MOROCCAN_REGIONS[0],
    price: '',
    duration: '',
    capacity: '',
    categories: [] as string[],
    languages: ['English'],
    difficulty_level: 'moderate',
    included: [''],
    excluded: [''],
    meeting_point: {
      address: '',
      latitude: '',
      longitude: '',
    },
    cancellation_policy: 'Flexible - Full refund up to 24 hours before the experience',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const { data, error: uploadError } = await supabase
        .from('experiences')
        .insert([
          {
            ...formData,
            price: parseFloat(formData.price),
            capacity: parseInt(formData.capacity),
            guideid: user.id,
            guidename: user.email?.split('@')[0] || 'Guide',
            rating: 0,
            included: formData.included.filter(item => item.trim() !== ''),
            excluded: formData.excluded.filter(item => item.trim() !== ''),
            meeting_point: {
              ...formData.meeting_point,
              latitude: parseFloat(formData.meeting_point.latitude),
              longitude: parseFloat(formData.meeting_point.longitude),
            },
          },
        ])
        .select()
        .single();

      if (uploadError) throw uploadError;

      navigate('/hosting-dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create experience');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="pt-20 px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to host experiences</h1>
          <p className="text-gray-600">You need to be signed in to create and manage experiences.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create a New Experience</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border rounded-lg"
                rows={4}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  {MOROCCAN_REGIONS.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Experience Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (EUR)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  min="0"
                  step="0.01"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 2 hours, 3 days"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Capacity
                </label>
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  min="1"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Difficulty Level
                </label>
                <select
                  value={formData.difficulty_level}
                  onChange={(e) => setFormData({ ...formData, difficulty_level: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  {DIFFICULTY_LEVELS.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categories
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {EXPERIENCE_CATEGORIES.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category)}
                      onChange={(e) => {
                        const newCategories = e.target.checked
                          ? [...formData.categories, category]
                          : formData.categories.filter(c => c !== category);
                        setFormData({ ...formData, categories: newCategories });
                      }}
                      className="rounded text-orange-500"
                    />
                    <span className="text-sm capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What's Included & Excluded</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Included Items
              </label>
              {formData.included.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newIncluded = [...formData.included];
                      newIncluded[index] = e.target.value;
                      setFormData({ ...formData, included: newIncluded });
                    }}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="e.g., Equipment, Guide, Refreshments"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newIncluded = formData.included.filter((_, i) => i !== index);
                      setFormData({ ...formData, included: newIncluded });
                    }}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, included: [...formData.included, ''] })}
                className="text-orange-500 hover:text-orange-600 text-sm"
              >
                + Add Included Item
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Excluded Items
              </label>
              {formData.excluded.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newExcluded = [...formData.excluded];
                      newExcluded[index] = e.target.value;
                      setFormData({ ...formData, excluded: newExcluded });
                    }}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="e.g., Transportation, Personal expenses"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newExcluded = formData.excluded.filter((_, i) => i !== index);
                      setFormData({ ...formData, excluded: newExcluded });
                    }}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, excluded: [...formData.excluded, ''] })}
                className="text-orange-500 hover:text-orange-600 text-sm"
              >
                + Add Excluded Item
              </button>
            </div>
          </section>

          {/* Meeting Point */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Meeting Point</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={formData.meeting_point.address}
                onChange={(e) => setFormData({
                  ...formData,
                  meeting_point: { ...formData.meeting_point, address: e.target.value }
                })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latitude
                </label>
                <input
                  type="number"
                  value={formData.meeting_point.latitude}
                  onChange={(e) => setFormData({
                    ...formData,
                    meeting_point: { ...formData.meeting_point, latitude: e.target.value }
                  })}
                  step="any"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Longitude
                </label>
                <input
                  type="number"
                  value={formData.meeting_point.longitude}
                  onChange={(e) => setFormData({
                    ...formData,
                    meeting_point: { ...formData.meeting_point, longitude: e.target.value }
                  })}
                  step="any"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>
          </section>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? 'Creating Experience...' : 'Create Experience'}
          </button>
        </form>
      </div>
    </div>
  );
}