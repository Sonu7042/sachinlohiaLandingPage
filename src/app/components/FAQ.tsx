import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What will I get in this mobile numerology report?",
      answer: (
        <div className="space-y-3">
          <p>This detailed report will give you all your answers related to your life problems:</p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>In-depth understanding of mobile number and its digits.</li>
            <li>Your lucky number and colors that will suit you.</li>
            <li>Personalized remedies for your mobile number.</li>
            <li>Get a free name numerology report.</li>
          </ol>
        </div>
      ),
    },
    {
      question: "What is the language of this report?",
      answer: <p>This report is only available in English language.</p>,
    },
    {
      question: "How mobile number can help you to become successful?",
      answer: (
        <p>
          If your mobile number has negative combinations then it will become an obstacle in your
          path. So you have to change your number and choose lucky number combinations so that it
          can help you to become successful.
        </p>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#14213d] to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12"
        >
          General FAQs
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#14213d]/80 backdrop-blur-sm border border-[#e5e5e5]/10 rounded-xl overflow-hidden hover:border-[#fca311]/50 transition-all"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-[#e5e5e5] leading-relaxed">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-[#e5e5e5]"
        >
          <p>
            Powered & Marketed By{" "}
            <a href="#" className="text-[#fca311] hover:text-[#fca311]/80 font-semibold">
              Marketingoe
            </a>
          </p>
        </motion.footer>
      </div>
    </section>
  );
}