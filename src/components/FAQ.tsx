import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
  {
    question: 'How are plants packaged safely?',
    answer: 'We use specialized packaging with breathable materials, secure wrapping, and temperature control to ensure your plants arrive in perfect condition.',
  },
  {
    question: 'Do you offer plant care guidance?',
    answer: 'Yes! Every order includes a personalized care guide, and we offer ongoing support through our plant care hotline and online resources.',
  },
  {
    question: 'Can I choose pots or styling?',
    answer: 'Absolutely. Our plant styling service allows you to customize pots, planters, and styling options for each plant.',
  },
  {
    question: 'What if my plant arrives damaged?',
    answer: 'We guarantee 98% healthy delivery. If there are any issues, we offer replacement or full refund within 14 days.',
  },
  {
    question: 'Are your packaging materials eco-friendly?',
    answer: 'Yes, we use 100% recyclable and compostable packaging materials as part of our commitment to sustainability.',
  },
]

function AccordionItem({ item, isOpen, onToggle }: any) {
  return (
    <div className="border-b border-white/[0.1]">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between hover:text-primary transition-colors text-left"
      >
        <span className="font-semibold">{item.question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted-foreground">{item.answer}</p>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-8 md:px-16 py-24 bg-white/[0.02] border-y border-white/[0.1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="section-label">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Common questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-2"
          >
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
