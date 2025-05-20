import React from 'react';
import { Search, MapPin, Tag } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onRegionChange: (region: string) => void;
  onCategoryChange: (category: string) => void;
  regions: readonly string[];
  categories: readonly string[];
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  onRegionChange,
  onCategoryChange,
  regions,
  categories,
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 mx-4 md:mx-0">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:divide-x divide-gray-200">
        <div className="flex-1 px-2">
          <div className="flex items-center">
            <Search className="text-gray-400 h-5 w-5 flex-shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search experiences..."
              className="w-full ml-3 focus:outline-none text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="px-2 md:pl-4">
          <div className="flex items-center">
            <MapPin className="text-gray-400 h-5 w-5 flex-shrink-0" />
            <select
              onChange={(e) => onRegionChange(e.target.value)}
              className="w-full ml-3 focus:outline-none bg-transparent text-gray-900 appearance-none pr-8"
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="px-2 md:pl-4">
          <div className="flex items-center">
            <Tag className="text-gray-400 h-5 w-5 flex-shrink-0" />
            <select
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full ml-3 focus:outline-none bg-transparent text-gray-900 appearance-none pr-8"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}