import { useState } from 'react'

function OrderForm() {
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    phone: '',
    product_name: 'Chocolate Sweet Bread',
    quantity: 1,
    notes: '',
    fulfillment_method: 'pickup',
    pickup_time: '',
    delivery_time: '',
    delivery_address: '',
    notify_via: 'email',
    whatsapp: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'quantity' ? Number(value) : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = { ...form }
      // Coerce empty time strings to undefined to satisfy backend optional datetime
      if (!payload.pickup_time) delete payload.pickup_time
      if (!payload.delivery_time) delete payload.delivery_time
      if (!payload.delivery_address) delete payload.delivery_address
      if (!payload.whatsapp) delete payload.whatsapp

      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to place order')
      setStatus({ type: 'success', message: 'Thank you! Your order has been received.' })
      setForm({ customer_name: '', email: '', phone: '', product_name: 'Chocolate Sweet Bread', quantity: 1, notes: '', fulfillment_method: 'pickup', pickup_time: '', delivery_time: '', delivery_address: '', notify_via: 'email', whatsapp: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  const isDelivery = form.fulfillment_method === 'delivery'

  return (
    <section id="order" className="py-16 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Place an Order</h2>
          <p className="mt-3 text-gray-700">Choose your favorite loaf and we’ll bake it fresh. Pickup and local delivery available.</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Chocolate: rich organic cacao, coconut sugar</li>
            <li>• Banana: ripe bananas, warm spices</li>
            <li>• Coconut: toasted coconut flakes, creamy coconut milk</li>
          </ul>
        </div>

        <form onSubmit={submit} className="bg-white rounded-2xl p-6 shadow border border-black/5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="customer_name" value={form.customer_name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bread</label>
              <select name="product_name" value={form.product_name} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Chocolate Sweet Bread</option>
                <option>Banana Island Loaf</option>
                <option>Coconut Sunshine Loaf</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input type="number" min="1" max="50" name="quantity" value={form.quantity} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>

            <div className="sm:col-span-2 pt-2">
              <label className="block text-sm font-medium text-gray-700">Fulfillment</label>
              <div className="mt-1 flex gap-4">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="fulfillment_method" value="pickup" checked={form.fulfillment_method==='pickup'} onChange={onChange} /> Pickup
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="fulfillment_method" value="delivery" checked={form.fulfillment_method==='delivery'} onChange={onChange} /> Delivery
                </label>
              </div>
            </div>

            {form.fulfillment_method === 'pickup' && (
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Pickup time</label>
                <input type="datetime-local" name="pickup_time" value={form.pickup_time} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <p className="mt-1 text-xs text-gray-500">Same-day available for items marked "Available today". Otherwise allow lead time shown on menu.</p>
              </div>
            )}

            {isDelivery && (
              <>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Delivery time</label>
                  <input type="datetime-local" name="delivery_time" value={form.delivery_time} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Delivery address</label>
                  <input name="delivery_address" value={form.delivery_address} onChange={onChange} placeholder="Street, City, ZIP" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Order notes</label>
              <textarea name="notes" value={form.notes} onChange={onChange} rows="3" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>

            <div className="sm:col-span-2 pt-2">
              <label className="block text-sm font-medium text-gray-700">Notifications</label>
              <div className="mt-1 flex flex-wrap gap-4 items-center">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="notify_via" value="email" checked={form.notify_via==='email'} onChange={onChange} /> Email
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="notify_via" value="whatsapp" checked={form.notify_via==='whatsapp'} onChange={onChange} /> WhatsApp
                </label>
                {form.notify_via==='whatsapp' && (
                  <input name="whatsapp" value={form.whatsapp} onChange={onChange} placeholder="WhatsApp number e.g. +1 555 555 5555" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-auto flex-1" />
                )}
              </div>
            </div>
          </div>

          {status.message && (
            <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>{status.message}</p>
          )}

          <button disabled={loading} className="mt-4 inline-flex items-center justify-center w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-60">
            {loading ? 'Submitting...' : 'Submit Order'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default OrderForm
