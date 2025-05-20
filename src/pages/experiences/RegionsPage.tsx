import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExperienceCard } from '../../components/ExperienceCard';
import { AuthModal } from '../../components/AuthModal';
import { useExperienceStore } from '../../stores/experienceStore';
import { MOROCCAN_REGIONS } from '../../types/experience';
import { MapPin } from 'lucide-react';

export function RegionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || '';
  const { experiences } = useExperienceStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const filteredExperiences = selectedRegion
    ? experiences.filter(exp => exp.region === selectedRegion)
    : experiences;

  const handleRegionClick = (region: string) => {
    setSearchParams({ region });
  };

  return (
    <div className="pt-20 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Explore by Region</h1>
        
        {/* Region Selection */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {MOROCCAN_REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionClick(region)}
              className={`p-4 rounded-lg flex items-center gap-2 transition ${
                selectedRegion === region
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span>{region}</span>
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        {selectedRegion && (
          <h2 className="text-2xl font-semibold mb-6">
            Experiences in {selectedRegion}
          </h2>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onAuthRequired={() => setIsAuthModalOpen(true)}
            />
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No experiences found {selectedRegion && `in ${selectedRegion}`}.
            </p>
          </div>
        )}

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </div>
  );
}