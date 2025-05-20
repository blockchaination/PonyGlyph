import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useExperienceStore } from '../../stores/experienceStore';
import { useAuthStore } from '../../stores/authStore';
import { Experience } from '../../types/experience';

export function AdminDashboard() {
  const { user } = useAuthStore();
  const { experiences, loading, error, fetchExperiences, deleteExperience } = useExperienceStore();
  const navigate = useNavigate();
  const [userExperiences, setUserExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  useEffect(() => {
    if (user && experiences) {
      setUserExperiences(experiences.filter(exp => exp.guideid === user.id));
    }
  }, [user, experiences]);

  const handleEdit = (experienceId: string) => {
    navigate(`/edit-experience/${experienceId}`);
  };

  const handleDelete = async (experienceId: string) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      try {
        await deleteExperience(experienceId);
      } catch (error) {
        console.error('Failed to delete experience:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Loading experiences...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Experiences</h1>
          <button
            onClick={() => navigate('/create-experience')}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            <Plus className="h-5 w-5" />
            Create New Experience
          </button>
        </div>

        {userExperiences.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">You haven't created any experiences yet.</p>
            <button
              onClick={() => navigate('/create-experience')}
              className="text-orange-500 hover:text-orange-600"
            >
              Create your first experience
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userExperiences.map((experience) => (
                  <tr key={experience.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={experience.imageurl}
                            alt={experience.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {experience.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {experience.categories.join(', ')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{experience.location}</div>
                      <div className="text-sm text-gray-500">{experience.region}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">€{experience.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(experience.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(experience.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}