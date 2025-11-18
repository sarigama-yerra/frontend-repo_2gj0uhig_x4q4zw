import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ type: 'success', message: 'Message sent! We will get back to you shortly.' })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-gray-600">Questions, wholesale, or collaborations? Drop us a message.</p>
        </div>

        <form onSubmit={submit} className="max-w-2xl mx-auto bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows="4" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>

          {status.message && (
            <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>{status.message}</p>
          )}

          <button disabled={loading} className="mt-4 inline-flex items-center justify-center w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
