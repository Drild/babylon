import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

export default function Services() {
  const servicePackages = [
    { name: 'S-Home', label: 'Home' },
    { name: 'S-Office', label: 'Office' },
    { name: 'S-Luxe', label: 'Luxe' },
    { name: 'S-Custom', label: 'Custom' },
  ]

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
    <section className="px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Plant <span className="text-primary">Solutions</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg leading-relaxed">
              Babylon Plants is a premium urban plant studio helping people create greener spaces.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              <span className="text-sm">Learn More</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="glass-card space-y-3">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <h3 className="font-semibold">Curated indoor plants</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Hand-selected plants for your space and lifestyle
              </p>
            </div>

            <div className="glass-card space-y-4">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <h3 className="font-semibold">Plant styling service</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {servicePackages.map((pkg) => (
                  <span key={pkg.name} className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.1]">
                    {pkg.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Trusted experts</h3>
            <p className="text-lg text-muted-foreground">
              Over 10 years helping customers choose the right plants.
            </p>
            <div className="pt-4">
              <div className="glass-card text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years of expertise</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
