import { useEffect, useMemo, useState } from 'react'

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1541781286675-09d03b606ffa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545418816-5399badafa90?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop'
]

function Gallery() {
  const [customImages, setCustomImages] = useState([])
  const [input, setInput] = useState('')
  const storageKey = 'rasta_bread_gallery_images'

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]')
      if (Array.isArray(saved)) setCustomImages(saved)
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(customImages))
    } catch (e) {
      // ignore
    }
  }, [customImages])

  const images = useMemo(() => {
    // Show custom images first, then defaults
    return [...customImages, ...DEFAULT_IMAGES]
  }, [customImages])

  const isValidUrl = (url) => {
    try {
      const u = new URL(url)
      return ['http:', 'https:'].includes(u.protocol)
    } catch {
      return false
    }
  }

  const addImage = (e) => {
    e.preventDefault()
    const url = input.trim()
    if (!url) return
    if (!isValidUrl(url)) {
      alert('Please paste a valid image URL (starting with http or https).')
      return
    }
    setCustomImages((prev) => [url, ...prev])
    setInput('')
  }

  const removeImage = (url) => {
    setCustomImages((prev) => prev.filter((u) => u !== url))
  }

  return (
    <section id="gallery" className="py-16 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Gallery</h2>
        <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">Add your own photos by pasting links below. They save to your browser automatically.</p>

        <form onSubmit={addImage} className="mt-6 max-w-3xl mx-auto flex gap-3">
          <input
            type="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste image URL (e.g. from your site, Google Drive, Dropbox, Instagram CDN)"
            className="flex-1 rounded-lg border border-emerald-200 bg-white/90 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button type="submit" className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow hover:bg-emerald-700 transition">Add</button>
        </form>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={src + i} className="group rounded-xl overflow-hidden border border-black/5 shadow relative">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 object-cover" />
              {customImages.includes(src) && (
                <button
                  type="button"
                  onClick={() => removeImage(src)}
                  className="absolute top-2 right-2 rounded-full bg-black/60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                  title="Remove"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Tips: You can host images anywhere (your website, shared Google Drive links with direct access, Dropbox direct links, Imgur, Cloudinary). For best quality, use at least 1200px wide.
        </div>
      </div>
    </section>
  )
}

export default Gallery
