function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100 via-yellow-100 to-amber-100" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(16,185,129,0.3),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">Organic • Vegan • Fresh</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Rasta Bread Man Company
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Handcrafted loaves baked with island vibes. Choose from our signature Chocolate, Banana, and Coconut breads — always organic, always vegan, always delicious.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#order" className="inline-flex items-center bg-emerald-600 text-white px-5 py-3 rounded-lg shadow hover:bg-emerald-700">Order Now</a>
            <a href="#products" className="inline-flex items-center bg-white text-emerald-700 border border-emerald-200 px-5 py-3 rounded-lg hover:bg-emerald-50">View Menu</a>
          </div>

          <div className="mt-6 text-sm text-gray-600 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=12" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=25" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=5" />
            </div>
            <span>Loved by 500+ happy bread lovers</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-200/50 rounded-full blur-2xl" />

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop"
              alt="Fresh vegan bread selection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <p className="font-semibold">Baked fresh daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
