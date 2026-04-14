import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
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
    <footer className="border-t border-white/[0.1] bg-white/[0.02]">
      <div className="px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-bold font-display">Babylon Plants</h3>
              <p className="text-sm text-muted-foreground">
                Premium indoor plants delivered with care.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">All Plants</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Plant Styling</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Care Guides</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="border-t border-white/[0.1] my-12"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Babylon Plants. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  {social}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
