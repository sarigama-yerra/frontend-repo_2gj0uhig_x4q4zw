function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg tracking-tight text-gray-900">
          Rasta Bread Man
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#products" className="hover:text-emerald-700">Menu</a>
          <a href="#order" className="hover:text-emerald-700">Order</a>
          <a href="#story" className="hover:text-emerald-700">Our Story</a>
          <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
          <a href="#reviews" className="hover:text-emerald-700">Reviews</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
