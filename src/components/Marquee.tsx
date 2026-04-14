import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

export default function Marquee() {
  const features = [
    { icon: Check, text: 'Easy care' },
    { icon: Check, text: 'Fast delivery' },
    { icon: Check, text: 'Plant styling help' },
    { icon: Check, text: 'Ongoing support' },
  ]

  return (
    <section className="px-8 md:px-16 py-24 bg-white/[0.02] border-y border-white/[0.1]">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Simple / Stylish /{' '}
            <span className="text-primary">Green Living</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card space-y-4"
          >
            <p className="text-5xl font-bold text-primary">30%</p>
            <p className="text-lg">better air quality feel</p>
            <button className="btn-secondary text-sm">Learn more</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="glass-card p-4 text-center space-y-2 h-fit">
              <p className="text-sm font-semibold text-primary">Award-winning</p>
              <p className="text-lg font-bold">Plant Studio</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Start your plant journey and get a free care guide
              </p>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Get Started
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
