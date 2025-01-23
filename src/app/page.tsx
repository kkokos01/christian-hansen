import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-medium/50 to-transparent" />
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-accent to-transparent opacity-5" />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8">
            CHRISTIAN HANSEN
          </h1>
          <p className="text-xl sm:text-2xl text-accent/90 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            New York-based artist exploring the boundaries between classical and contemporary art
          </p>
          <Link
            href="/gallery"
            className="btn-outline text-white border-white/30 hover:bg-white/10"
          >
            VIEW GALLERY
          </Link>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-center mb-16 text-primary">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with actual featured works */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-[4/5] bg-accent overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  {/* Replace with actual artwork image */}
                  <div className="w-full h-full bg-primary/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-primary-medium/90 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl mb-2 transform -translate-y-4 transition-transform group-hover:translate-y-0">Artwork Title</h3>
                    <p className="text-accent/80 transform translate-y-4 transition-transform group-hover:translate-y-0">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-medium">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-center mb-16 text-white font-light">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface/95 backdrop-blur p-8 shadow-sm hover:shadow-md transition-all group">
              <span className="text-sm text-primary/60 mb-4 block">January 2025</span>
              <h3 className="text-xl mb-4 text-primary">Upcoming Exhibition</h3>
              <p className="text-primary/80 mb-6">Join us for an exclusive showcase of new works at Gallery XYZ.</p>
              <Link href="/contact" className="text-primary-medium group-hover:text-primary transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-surface/95 backdrop-blur p-8 shadow-sm hover:shadow-md transition-all group">
              <span className="text-sm text-primary/60 mb-4 block">December 2024</span>
              <h3 className="text-xl mb-4 text-primary">Artist Talk</h3>
              <p className="text-primary/80 mb-6">Christian discusses his artistic process and inspiration.</p>
              <Link href="/about" className="text-primary-medium group-hover:text-primary transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-surface/95 backdrop-blur p-8 shadow-sm hover:shadow-md transition-all group">
              <span className="text-sm text-primary/60 mb-4 block">November 2024</span>
              <h3 className="text-xl mb-4 text-primary">New Collection</h3>
              <p className="text-primary/80 mb-6">Exploring themes of nature and urbanization in latest works.</p>
              <Link href="/gallery" className="text-primary-medium group-hover:text-primary transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
