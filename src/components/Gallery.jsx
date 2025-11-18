function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1541781286675-09d03b606ffa?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545418816-5399badafa90?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <section id="gallery" className="py-16 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Gallery</h2>
        <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">A peek into our bakes and the vibe behind the oven.</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-black/5 shadow">
              <img src={src} alt={`Gallery ${i+1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery