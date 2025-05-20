import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExperienceCard } from '../../components/ExperienceCard';
import { AuthModal } from '../../components/AuthModal';
import { SearchBar } from '../../components/SearchBar';
import { useExperienceStore } from '../../stores/experienceStore';
import { EXPERIENCE_CATEGORIES, MOROCCAN_REGIONS } from '../../types/experience';
import { Compass, Mountain, Umbrella, Book, Camera, Palette, Bike, Heart, Leaf, Footprints } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  adventure: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
  mountains: <Mountain className="w-5 h-5 md:w-6 md:h-6" />,
  beach: <Umbrella className="w-5 h-5 md:w-6 md:h-6" />,
  history: <Book className="w-5 h-5 md:w-6 md:h-6" />,
  photography: <Camera className="w-5 h-5 md:w-6 md:h-6" />,
  crafts: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
  sports: <Bike className="w-5 h-5 md:w-6 md:h-6" />,
  wellness: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
  nature: <Leaf className="w-5 h-5 md:w-6 md:h-6" />,
  hiking: <Footprints className="w-5 h-5 md:w-6 md:h-6" />,
};

export function CategoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || '';
  const { experiences, loading, error, fetchExperiences } = useExperienceStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || exp.categories.includes(selectedCategory);
    const matchesRegion = !selectedRegion || exp.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <div className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white w-full px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Discover Moroccan Experiences</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Explore unique activities with local experts</p>
            <div className="max-w-4xl mx-auto">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onRegionChange={setSelectedRegion}
                onCategoryChange={(category) => setSearchParams({ category })}
                regions={MOROCCAN_REGIONS}
                categories={EXPERIENCE_CATEGORIES}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-4 max-w-5xl">
            {EXPERIENCE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSearchParams({ category })}
                className={`flex flex-col items-center justify-center p-2 md:p-4 rounded-xl transition ${
                  selectedCategory === category
                    ? 'bg-orange-100 text-orange-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  {categoryIcons[category] || <Compass className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
                <span className="text-[10px] md:text-xs capitalize text-center">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading experiences...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : filteredExperiences.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No experiences found {selectedCategory && `in ${selectedCategory} category`}
              {selectedRegion && ` in ${selectedRegion}`}
              {searchTerm && ` matching "${searchTerm}"`}.
            </p>
          </div>
        ) : (
          <>
            {selectedCategory && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 capitalize">
                {selectedCategory} Experiences
              </h2>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onAuthRequired={() => setIsAuthModalOpen(true)}
                />
              ))}
            </div>
          </>
        )}

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </div>
  );
}