export default function About() {
  return (
    <div className="min-h-screen bg-surface">
      {/* About Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">About the Artist</h1>
          <p className="text-xl text-accent/90 max-w-2xl mx-auto font-light tracking-wide">
            Christian Hansen is a New York-based artist known for his unique perspective on contemporary art
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Artist Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-accent relative overflow-hidden">
              {/* Replace with actual artist image */}
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 -z-10" />
          </div>

          {/* Artist Bio */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl text-primary mb-6 font-light">Biography</h2>
              <p className="text-primary/80 leading-relaxed">
                Christian Hansen's work explores the intersection of classical techniques and contemporary themes.
                With a background in both traditional painting and modern sculpture, his pieces reflect a unique
                blend of old and new, creating compelling narratives that resonate with viewers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-primary mb-6 font-light">Artist Statement</h2>
              <blockquote className="text-primary/80 leading-relaxed border-l-2 border-accent pl-6 italic">
                "My work seeks to bridge the gap between traditional artistic methods and contemporary
                expression. Through my paintings and sculptures, I explore themes of urban life, nature,
                and human connection in the modern world."
              </blockquote>
            </div>

            <div>
              <h2 className="text-2xl text-primary mb-6 font-light">Education & Training</h2>
              <ul className="space-y-4">
                {[
                  'Master of Fine Arts, Prestigious Art School',
                  'Bachelor of Arts in Studio Art, Another Great University',
                  'Classical Training in Florence, Italy'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary/30 mr-4">0{index + 1}</span>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Exhibitions Timeline */}
        <div className="mt-24">
          <h2 className="text-2xl text-primary mb-12 font-light text-center">Selected Exhibitions</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-accent" />
            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: '"Urban Perspectives"',
                  location: 'Gallery XYZ, New York',
                  description: 'Solo exhibition featuring latest works'
                },
                {
                  year: '2023',
                  title: '"Nature in Motion"',
                  location: 'Contemporary Art Space, Brooklyn',
                  description: 'Group exhibition exploring environmental themes'
                },
                {
                  year: '2023',
                  title: '"Form & Function"',
                  location: 'Metropolitan Gallery, Manhattan',
                  description: 'Featured artist in sculpture showcase'
                }
              ].map((exhibition, index) => (
                <div key={index} className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-primary/60 text-sm block mb-2">{exhibition.year}</span>
                      <h3 className="text-xl text-primary mb-2 font-light">{exhibition.title}</h3>
                      <p className="text-primary/80 mb-2">{exhibition.location}</p>
                      <p className="text-primary/60 text-sm">{exhibition.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-accent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-24">
          <h2 className="text-2xl text-primary mb-12 font-light text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Emerging Artist Award',
                organization: 'New York Arts Foundation',
                year: '2023'
              },
              {
                title: 'Excellence in Sculpture',
                organization: 'Contemporary Arts Society',
                year: '2022'
              },
              {
                title: 'Rising Star Grant',
                organization: 'Metropolitan Arts Council',
                year: '2021'
              }
            ].map((award, index) => (
              <div key={index} className="bg-accent/30 p-8 group hover:bg-accent/40 transition-colors">
                <span className="text-primary/60 text-sm block mb-2">{award.year}</span>
                <h3 className="text-xl text-primary mb-2 font-light">{award.title}</h3>
                <p className="text-primary/80">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
