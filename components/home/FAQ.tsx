"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { HOME_FAQS } from "@/lib/marketing"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">FAQ</p>
            <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Questions fréquentes</h2>
          </div>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {HOME_FAQS.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <article key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold text-gray-950"
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <ChevronDown className={cn("size-5 shrink-0 text-gray-400 transition-transform", isOpen && "rotate-180 text-blue-600")} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                        <p className="max-w-2xl pb-6 leading-relaxed text-gray-600">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
