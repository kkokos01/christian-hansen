'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ArtworkCategory = 'all' | 'paintings' | 'sculptures';

interface Artwork {
  id: number;
  title: string;
  category: 'paintings' | 'sculptures';
  description: string;
  dimensions: string;
  year: number;
  medium: string;
}

// Placeholder data - replace with actual artwork data
const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Urban Landscape I',
    category: 'paintings',
    description: 'A contemporary interpretation of urban architecture through abstract forms',
    dimensions: '36" × 48"',
    year: 2023,
    medium: 'Oil on canvas',
  },
  {
    id: 2,
    title: 'Bronze Figure Study',
    category: 'sculptures',
    description: 'Exploring human form through classical techniques',
    dimensions: '24" × 12" × 12"',
    year: 2023,
    medium: 'Cast bronze',
  },
  {
    id: 3,
    title: 'Cityscape at Dawn',
    category: 'paintings',
    description: 'Urban landscape with emphasis on light and shadow',
    dimensions: '40" × 60"',
    year: 2024,
    medium: 'Acrylic on canvas',
  },
  // Add more artwork entries as needed
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = artworks.filter(
    artwork => selectedCategory === 'all' || artwork.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-surface">
      {/* Gallery Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">Gallery</h1>
          <p className="text-xl text-accent/90 max-w-2xl mx-auto font-light tracking-wide">
            A curated collection of paintings and sculptures exploring contemporary themes
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 bg-surface/80 backdrop-blur-sm border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-4">
            {['all', 'paintings', 'sculptures'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as ArtworkCategory)}
                className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-primary/60 hover:text-primary'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-accent overflow-hidden mb-4">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  {/* Replace with actual artwork image */}
                  <div className="w-full h-full bg-primary/10" />
                </div>
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-primary/80 transition-all duration-300"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-accent/80 text-sm tracking-wider mb-2">{artwork.medium}</p>
                    <p className="text-white text-lg">{artwork.dimensions}</p>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl text-primary mb-2 font-light">{artwork.title}</h3>
                <p className="text-primary/60 text-sm mb-2">{artwork.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary/60">{artwork.year}</span>
                  <button 
                    onClick={() => setSelectedArtwork(artwork)}
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="bg-surface max-w-4xl w-full p-8 rounded-lg"
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-[4/3] bg-accent mb-8">
              {/* Replace with actual artwork image */}
              <div className="w-full h-full bg-primary/10" />
            </div>
            <h2 className="text-3xl text-primary mb-4 font-light">{selectedArtwork.title}</h2>
            <p className="text-primary/80 mb-6">{selectedArtwork.description}</p>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="text-primary/60 mb-2">Medium</p>
                <p className="text-primary">{selectedArtwork.medium}</p>
              </div>
              <div>
                <p className="text-primary/60 mb-2">Dimensions</p>
                <p className="text-primary">{selectedArtwork.dimensions}</p>
              </div>
              <div>
                <p className="text-primary/60 mb-2">Year</p>
                <p className="text-primary">{selectedArtwork.year}</p>
              </div>
              <div>
                <p className="text-primary/60 mb-2">Category</p>
                <p className="text-primary capitalize">{selectedArtwork.category}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                className="btn-outline"
                onClick={() => setSelectedArtwork(null)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
