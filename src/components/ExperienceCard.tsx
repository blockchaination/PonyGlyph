import React, { useState } from 'react';
import { Star, MapPin, Heart } from 'lucide-react';
import { Experience } from '../types/experience';
import { BookingModal } from './BookingModal';
import { useAuthStore } from '../stores/authStore';
import { useCurrencyStore } from '../stores/currencyStore';

interface ExperienceCardProps {
  experience: Experience;
  onAuthRequired: () => void;
}

export function ExperienceCard({ experience, onAuthRequired }: ExperienceCardProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuthStore();
  const { currency, convertPrice } = useCurrencyStore();

  const handleBookClick = () => {
    if (!user) {
      onAuthRequired();
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleLikeClick = () => {
    if (!user) {
      onAuthRequired();
    } else {
      setIsLiked(!isLiked);
    }
  };

  const displayPrice = convertPrice(experience.price, 'EUR', currency);
  const currencySymbol = currency === 'EUR' ? '€' : 
                        currency === 'USD' ? '$' : 
                        currency === 'GBP' ? '£' : 
                        'د.م.';

  return (
    <>
      <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={experience.imageurl} 
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80';
            }}
          />
          <button
            onClick={handleLikeClick}
            className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform"
          >
            <Heart
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium text-gray-900 truncate">{experience.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{experience.rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{experience.location}</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {experience.categories.slice(0, 3).map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-semibold text-gray-900">
                {currencySymbol}{displayPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500"> / person</span>
            </div>
            <button
              onClick={handleBookClick}
              className="bg-orange-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-orange-600 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingModal
        experience={experience}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}