import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="section-label">London's Premium Plant Delivery</p>
            <p className="text-sm uppercase tracking-wider text-muted-foreground max-w-xs">
              Beautiful plants, styled for modern living
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button className="btn-primary w-fit">Shop plants</button>
            <button className="btn-secondary w-fit">Book plant styling</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-end"
        >
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase font-display leading-tight tracking-tight">
            Bring
            <br />
            Nature
            <br />
            <span className="text-primary">Home</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
