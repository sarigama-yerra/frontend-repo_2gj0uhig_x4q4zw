function Story() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-700">Born on the islands and baked with love. We started with a simple mission: real bread with real ingredients, crafted for everyone. From farmers’ markets to neighborhood pop-ups, our organic vegan loaves have become a local staple.</p>
          <p className="mt-3 text-gray-700">Today we keep the vibe alive by sourcing responsibly, baking small-batch, and serving our community with warmth and good energy. One slice at a time.</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow border border-black/5">
          <img src="https://images.unsplash.com/photo-1585553293818-b04e27b9da1a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWtpbmclMjB3aXRoJTIwbG92ZXxlbnwwfDB8fHwxNzYzNTA2NjU4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Baking with love" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Story