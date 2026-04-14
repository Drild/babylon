import { ShoppingCart, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex items-center justify-between">
        <div className="text-xl font-bold font-display">Babylon Plants</div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
          <a href="#shop" className="text-sm hover:text-primary transition-colors">Shop</a>
          <a href="#care" className="text-sm hover:text-primary transition-colors">Care</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn-icon">
            <ShoppingCart size={18} />
          </button>
          <button className="btn-icon">
            <User size={18} />
          </button>
        </div>
      </div>
    </nav>
  )
}
