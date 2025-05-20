import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useState } from 'react';
import { Menu, X, Compass, User } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { CurrencySelector } from './CurrencySelector';

export function Header() {
  const { user, signOut } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Compass className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold tracking-wider text-gray-900">PONYGLYPH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/regions" className="text-gray-600 hover:text-gray-900">Regions</Link>
            <Link to="/hosting-experience" className="text-gray-600 hover:text-gray-900">Host an Experience</Link>
            <CurrencySelector />
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <User className="h-5 w-5" />
                  <span>{user.email?.split('@')[0]}</span>
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/bookings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Bookings</Link>
                  <Link to="/admin/experiences" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Experiences</Link>
                  <button 
                    onClick={() => signOut()} 
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <Link to="/regions" className="text-gray-600 hover:text-gray-900">Regions</Link>
              <Link to="/hosting-experience" className="text-gray-600 hover:text-gray-900">Host an Experience</Link>
              {user ? (
                <>
                  <Link to="/bookings" className="text-gray-600 hover:text-gray-900">My Bookings</Link>
                  <Link to="/admin/experiences" className="text-gray-600 hover:text-gray-900">My Experiences</Link>
                  <button 
                    onClick={() => signOut()} 
                    className="text-left text-gray-600 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Sign In
                </button>
              )}
              <div className="pt-2">
                <CurrencySelector />
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}