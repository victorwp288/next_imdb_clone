"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; title: string; year: number; image: string }[]
  >([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch data from an API
    setSearchResults([
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        image: "/images/joker.jpeg",
      },
      {
        id: 2,
        title: "The Godfather",
        year: 1972,
        image: "/images/shutin.jpeg",
      },
      {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        image: "/images/mortal.jpeg",
      },
    ]);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Search movies or actors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-[#2A2A2A] border-gray-700 text-white"
          />
          <Button
            type="submit"
            className="bg-[#F5C518] text-black hover:bg-[#F5C518]/80"
          >
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        <div className="flex space-x-4">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="p-2 border rounded bg-[#2A2A2A] border-gray-700 text-white"
          >
            <option value="">All Genres</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
          <Input
            type="number"
            placeholder="Release Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max="2023"
            className="bg-[#2A2A2A] border-gray-700 text-white"
          />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="p-2 border rounded bg-[#2A2A2A] border-gray-700 text-white"
          >
            <option value="">All Ratings</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
          </select>
        </div>
      </form>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchResults.map((movie) => (
            <Card
              key={movie.id}
              className="bg-[#2A2A2A] border-gray-700 hover:bg-[#3A3A3A] transition-colors duration-200"
            >
              <Link href={`/movie/${movie.id}`}>
                <CardContent className="p-4">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl font-semibold text-white">
                    {movie.title}
                  </h2>
                  <p className="text-gray-400">{movie.year}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <section className="py-8 cursor-pointer transition-colors duration-200 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Featured Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {["joker.jpeg", "shutin.jpeg", "mortal.jpeg"].map((image, i) => (
                <Card
                  key={i}
                  className="bg-[#2A2A2A] border-gray-700 text-white"
                >
                  <Link href="/movie-details">
                    <CardContent className="p-4 hover:bg-gray-800 ">
                      <Image
                        src={`/images/${image}`}
                        alt={`Featured movie ${i + 1}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover mb-4 rounded"
                      />
                      <h3 className="text-lg font-semibold">
                        Featured Movie {i + 1}
                      </h3>
                      <p className="text-sm text-gray-400">Action, Adventure</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-8 cursor-pointer transition-colors duration-200 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Top Picks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "joker.jpeg",
                "shutin.jpeg",
                "mortal.jpeg",
                "joker.jpeg",
                "shutin.jpeg",
                "mortal.jpeg",
              ].map((image, i) => (
                <div key={i} className="relative group">
                  <Link href="/movie-details">
                    <Image
                      src={`/images/${image}`}
                      alt={`Movie ${i + 1}`}
                      width={150}
                      height={225}
                      className="w-full h-auto rounded hover:bg-gray-800 "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                      <PlayCircle className="h-12 w-12 text-white" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="py-8 cursor-pointer transition-colors duration-200 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Trending Trailers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["joker.jpeg", "shutin.jpeg", "mortal.jpeg"].map((image, i) => (
                <div key={i} className="bg-[#2A2A2A] p-4 rounded-lg">
                  <Link href="/movie-details">
                    <div className="relative pb-[56.25%]">
                      <Image
                        src={`/images/${image}`}
                        alt={`Trailer ${i + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded hover:bg-gray-800 "
                      />
                      <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-white opacity-75" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mt-2">
                      Trending Movie {i + 1}
                    </h3>
                    <p className="text-sm text-gray-400">2.5M views</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
