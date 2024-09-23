'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Bookmark } from 'lucide-react'
import Image from 'next/image'

export default function MovieDetailsPageComponent() {
  const [userRating, setUserRating] = useState(0)
  const [userNote, setUserNote] = useState('')
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Mock movie data
  const movie = {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    director: 'Frank Darabont',
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster: '/images/joker.jpeg',
    rating: 9.3,
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  }

  const handleRating = (rating: number) => {
    setUserRating(rating)
    // In a real app, this would send the rating to the server
  }

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserNote(e.target.value)
    // In a real app, this would save the note to the server
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // In a real app, this would update the bookmark status on the server
  }

  return (
      <Card className="bg-[#2A2A2A] border-gray-700">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image src={movie.poster} alt={movie.title} className="w-full rounded-lg shadow-lg" width={300} height={300} />
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
                <p className="text-xl text-gray-400">{movie.year} • {movie.genre}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Plot</h2>
                <p className="text-gray-300">{movie.plot}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Director</h2>
                <p className="text-gray-300">{movie.director}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Cast</h2>
                <ul className="list-disc list-inside text-gray-300">
                  {movie.cast.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Rating</h2>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400 fill-current" />
                  <span className="text-xl text-white">{movie.rating}/10</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Your Rating</h2>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                    <Button
                      key={rating}
                      variant={userRating === rating ? 'default' : 'outline'}
                      onClick={() => handleRating(rating)}
                      className={userRating === rating ? 'bg-yellow-400 text-black' : 'text-black'}
                    >
                      {rating}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Your Notes</h2>
                <Textarea
                  placeholder="Add your personal notes about this movie..."
                  value={userNote}
                  onChange={handleNoteChange}
                  className="w-full h-32 bg-[#3A3A3A] border-gray-700 text-white"
                />
              </div>
              <div>
                <Button
                  onClick={handleBookmark}
                  variant={isBookmarked ? 'default' : 'outline'}
                  className={`flex items-center ${isBookmarked ? 'bg-yellow-400 text-black' : 'text-white'}`}
                >
                  <Bookmark className="mr-2" />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}