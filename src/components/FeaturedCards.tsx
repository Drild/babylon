import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

export default function FeaturedCards() {
  return (
    <section className="px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card space-y-6"
          >
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-background"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-background"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-background"></div>
            </div>

            <div>
              <p className="text-5xl font-bold text-primary mb-2">10K+</p>
              <p className="text-lg">Homes transformed with our plants</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Check size={16} className="text-primary" />
              <span>Trusted by interior lovers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card space-y-6"
          >
            <h3 className="text-2xl font-bold">Expert plant care</h3>

            <div>
              <p className="text-5xl font-bold text-primary mb-2">98%</p>
              <p className="text-lg">healthy delivery success</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              <span className="text-sm">Learn how we protect every plant</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
