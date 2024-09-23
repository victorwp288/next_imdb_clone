"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Bookmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/images/avatar.jpeg",
  };

  // Mock data for ratings, search history, and bookmarks
  const ratings = [
    { id: 1, title: "The Shawshank Redemption", rating: 10 },
    { id: 2, title: "The Godfather", rating: 9 },
    { id: 3, title: "The Dark Knight", rating: 9 },
  ];

  const searchHistory = [
    "Inception",
    "Christopher Nolan",
    "Pulp Fiction",
    "Marvel movies",
  ];

  const bookmarks = [
    { id: 1, title: "Inception", category: "Favorites" },
    { id: 2, title: "The Matrix", category: "Watch Later" },
    { id: 3, title: "Interstellar", category: "Sci-Fi" },
  ];

  return (
    <Card className="bg-[#2A2A2A] border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full"
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        <Tabs defaultValue="ratings" className="space-y-4">
          <TabsList>
            <TabsTrigger value="ratings">Ratings</TabsTrigger>
            <TabsTrigger value="history">Search History</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>

          <TabsContent value="ratings">
            <div className="space-y-4">
              {ratings.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/movie/${movie.id}`}
                    className="text-white hover:text-yellow-400"
                  >
                    {movie.title}
                  </Link>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current mr-1" />
                    <span>{movie.rating}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-2">
              {searchHistory.map((search, index) => (
                <div key={index} className="flex items-center">
                  <Clock className="mr-2 text-gray-400" />
                  <span className="text-white">{search}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookmarks">
            <div className="space-y-4">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <Link
                      href={`/movie/${bookmark.id}`}
                      className="text-white hover:text-yellow-400"
                    >
                      {bookmark.title}
                    </Link>
                    <p className="text-sm text-gray-400">{bookmark.category}</p>
                  </div>
                  <Bookmark className="text-yellow-400" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
