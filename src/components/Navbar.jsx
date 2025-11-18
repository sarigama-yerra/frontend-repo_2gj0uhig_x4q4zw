import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-green-500 flex items-center justify-center text-white font-bold shadow">
              RB
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-gray-900 tracking-tight">Rasta Bread Man</p>
              <p className="text-xs text-gray-500 -mt-1">Organic • Vegan • Fresh</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#products" className="text-gray-700 hover:text-emerald-600">Menu</a>
            <a href="#order" className="text-gray-700 hover:text-emerald-600">Order</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
            <a href="#order" className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700">Order Now</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#products" onClick={() => setOpen(false)} className="block py-2 text-gray-700">Menu</a>
            <a href="#order" onClick={() => setOpen(false)} className="block py-2 text-gray-700">Order</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-2 text-gray-700">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2 text-gray-700">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
