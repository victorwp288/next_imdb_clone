"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Star, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      image: "/images/joker.jpeg",
      rating: 9.3,
      category: "Favorites",
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      image: "/images/shutin.jpeg",
      rating: 9.2,
      category: "Watch Later",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      image: "/images/mortal.jpeg",
      rating: 9.0,
      category: "Favorites",
    },
  ]);

  const handleRemoveBookmark = (id: number) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const categories = ["All", "Favorites", "Watch Later"];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Your Bookmarks</h1>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="bg-[#2A2A2A] border-b border-gray-700">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-[#3A3A3A] data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarks
                .filter(
                  (bookmark) =>
                    category === "All" || bookmark.category === category
                )
                .map((bookmark) => (
                  <Card
                    key={bookmark.id}
                    className="bg-[#2A2A2A] border-gray-700 hover:bg-[#3A3A3A] transition-colors duration-200"
                  >
                    <CardContent className="p-4">
                      <div className="relative">
                        <Image
                          src={bookmark.image}
                          alt={bookmark.title}
                          className="w-full h-48 object-cover mb-4 rounded"
						  width={300}
						  height={300}
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => handleRemoveBookmark(bookmark.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <Link href={`/movie-details`}>
                        <h2 className="text-xl font-semibold text-white hover:text-[#F5C518]">
                          {bookmark.title}
                        </h2>
                      </Link>
                      <p className="text-gray-400">{bookmark.year}</p>
                      <div className="flex items-center mt-2">
                        <Star className="text-yellow-400 fill-current mr-1" />
                        <span className="text-white">{bookmark.rating}/10</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-400">
                          {bookmark.category}
                        </span>
                        <Bookmark className="text-[#F5C518] fill-current" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {bookmarks.length === 0 && (
        <div className="text-center py-12">
          <Bookmark className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">
            No bookmarks yet
          </h2>
          <p className="text-gray-400">
            Start adding movies to your bookmarks to see them here.
          </p>
          <Link href="/">
            <Button className="mt-4 bg-[#F5C518] text-black hover:bg-[#F5C518]/80">
              Explore Movies
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
