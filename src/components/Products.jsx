import { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const formatLead = (p) => {
    if (p.available_today) return 'Available today'
    if (p.lead_time_hours > 0) {
      const days = Math.floor(p.lead_time_hours / 24)
      const hours = p.lead_time_hours % 24
      if (days > 0 && hours > 0) return `${days}d ${hours}h lead time`
      if (days > 0) return `${days}d lead time`
      return `${hours}h lead time`
    }
    return 'Preorder'
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Signature Breads</h2>
          <p className="mt-3 text-gray-600">All organic, all vegan — available in Chocolate, Banana, and Coconut.</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading menu...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition bg-white">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image || 'https://images.unsplash.com/photo-1605478052277-9d33ac89dea1?q=80&w=1200&auto=format&fit=crop'} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                    <div className="text-right">
                      <span className="block font-semibold text-emerald-700">${(p.special_price ?? p.price).toFixed(2)}</span>
                      {p.is_special && (
                        <span className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">Special</span>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{p.flavor}</span>
                    {p.vegan && <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">Vegan</span>}
                    {p.organic && <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Organic</span>}
                    <span className={`px-2 py-1 rounded-full border text-gray-700 ${p.available_today ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 border-gray-200'}`}>{formatLead(p)}</span>
                  </div>
                  {!!(p.tags && p.tags.length) && (
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-gray-700">
                      {p.tags.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-full bg-gray-50 border border-gray-200">{t}</span>
                      ))}
                    </div>
                  )}
                  <a href="#order" className="mt-4 inline-flex items-center justify-center w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">Order</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
