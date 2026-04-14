import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="px-8 md:px-16 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="section-label">Ready to transform your space?</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Let's <span className="text-primary">grow</span> your home
          </h2>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="btn-primary inline-flex items-center gap-2 group"
        >
          Get started
          <motion.div
            animate={{ rotate: 45 }}
            whileHover={{ rotate: 45 + 45 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
