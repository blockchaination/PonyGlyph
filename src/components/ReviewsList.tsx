import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { format } from 'date-fns';

interface Review {
  id: string;
  rating: number;
  comment: string;
  tags: string[];
  created_at: string;
  user: {
    first_name: string;
    last_name: string;
  };
}

interface ReviewsListProps {
  reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium">
                  {review.user.first_name[0]}{review.user.last_name[0]}
                </span>
              </div>
              <div>
                <div className="font-medium">
                  {review.user.first_name} {review.user.last_name}
                </div>
                <div className="text-sm text-gray-500">
                  {format(new Date(review.created_at), 'PP')}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-700 mb-4">{review.comment}</p>

          {review.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {review.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}