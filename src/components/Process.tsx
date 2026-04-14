import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Choose', description: 'Browse our curated collection' },
  { number: '02', title: 'Prepare', description: 'We prepare your plants with care' },
  { number: '03', title: 'Deliver', description: 'Fast, secure delivery to your door' },
  { number: '04', title: 'Thrive', description: 'Ongoing support and care guides' },
]

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="px-8 md:px-16 py-24 bg-white/[0.02] border-y border-white/[0.1]">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            The Process
            <br />
            <span className="text-primary">From nursery to your home</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>

              <div className="space-y-4">
                <p className="text-sm font-mono text-primary">{step.number}</p>
                <h3 className="text-2xl font-bold font-display">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
