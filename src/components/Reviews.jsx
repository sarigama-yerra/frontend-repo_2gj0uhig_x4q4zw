function Reviews() {
  const items = [
    { name: 'Maya', text: 'The coconut loaf tastes like sunshine. Perfectly moist and not too sweet!' },
    { name: 'Alex', text: 'Chocolate bread that is actually vegan and amazing? Say less. I’m hooked.' },
    { name: 'Ravi', text: 'Banana loaf is our weekend tradition. The spice balance is on point.' },
  ]
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">What People Say</h2>
        <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">Real words from our bread-loving community.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <div key={i} className="rounded-2xl border border-black/5 shadow p-6 bg-emerald-50">
              <p className="text-gray-800">“{r.text}”</p>
              <p className="mt-4 text-sm text-gray-600">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews