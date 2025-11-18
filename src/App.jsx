import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import OrderForm from './components/OrderForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Products />
      <OrderForm />
      <Contact />
      <footer className="py-10 bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Rasta Bread Man Company. All rights reserved.</p>
          <p className="text-sm opacity-80">Organic • Vegan • Chocolate • Banana • Coconut</p>
        </div>
      </footer>
    </div>
  )
}

export default App
