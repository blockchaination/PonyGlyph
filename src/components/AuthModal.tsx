import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserProfile {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
  });
  const { signIn, signUp, loading, error: authError } = useAuthStore();
  const [validationErrors, setValidationErrors] = useState<Partial<UserProfile>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const errors: Partial<UserProfile> = {};
    
    if (isSignUp) {
      if (!profile.firstName.trim()) errors.firstName = 'First name is required';
      if (!profile.lastName.trim()) errors.lastName = 'Last name is required';
      if (!profile.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
      
      const birthDate = new Date(profile.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) errors.dateOfBirth = 'Must be at least 18 years old';
      
      if (profile.phoneNumber && !/^\+?[\d\s-]{10,}$/.test(profile.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number format';
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(profile.password)) {
      errors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);
    
    if (!validateForm()) return;

    try {
      if (isSignUp) {
        const message = await signUp(profile.email, profile.password, {
          firstName: profile.firstName,
          lastName: profile.lastName,
          phoneNumber: profile.phoneNumber,
          dateOfBirth: profile.dateOfBirth,
        });
        setSuccessMessage(message);
      } else {
        await signIn(profile.email, profile.password);
        onClose();
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Authentication failed');
      console.error('Authentication error:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof UserProfile]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
    setSuccessMessage(null);
  };

  const handleClose = () => {
    if (location.state?.from) {
      navigate(-1);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h2>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  {validationErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  {validationErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profile.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
                {validationErrors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.dateOfBirth}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1234567890"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                {validationErrors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.phoneNumber}</p>
                )}
              </div>
            </>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
            {validationErrors.email && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
            {validationErrors.password && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.password}</p>
            )}
          </div>

          {(submitError || authError) && (
            <div className="text-red-500 text-sm">{submitError || authError}</div>
          )}

          <button
            type="submit"
            disabled={loading || !!successMessage}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {!successMessage && (
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setValidationErrors({});
                setSubmitError(null);
                setSuccessMessage(null);
                setProfile({
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                  dateOfBirth: '',
                });
              }}
              className="text-orange-500 hover:text-orange-600"
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}