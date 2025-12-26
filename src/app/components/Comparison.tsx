import { motion } from "motion/react";
import { X, Check, Clock } from "lucide-react";

export function Comparison() {
  const withoutNumerology = [
    "Suffering with money blockages",
    "Problems with marriage",
    "Continuous health related issues",
    "Not happy with professional life & job",
    "So much hardwork but result zero",
  ];

  const withNumerology = [
    "Open all money blockages",
    "Solve marriage problems",
    "Fix health related issues",
    "Stable professional life & job",
    "Get desired results of your hardwork",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#14213d] to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Without Numerology Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-red-500/30"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-white font-semibold text-lg">
                  Without Using Numerology in Life
                </h3>
              </div>
            </div>
            <div className="bg-[#14213d]/80 backdrop-blur-sm p-6 space-y-4">
              {withoutNumerology.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center flex-shrink-0 border border-red-500/50">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-[#e5e5e5]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* With Numerology Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-[#fca311]/30"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥳</span>
                <h3 className="text-white font-semibold text-lg">
                  After Using Numerology in Life
                </h3>
              </div>
            </div>
            <div className="bg-[#14213d]/80 backdrop-blur-sm p-6 space-y-4">
              {withNumerology.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0 border border-green-500/50">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-[#e5e5e5]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hindi Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white mb-8 space-y-1"
        >
          <p className="text-lg">यह ऑफर सिर्फ 23 लोगो के लिए है उसके बाद इसका</p>
          <p className="text-lg">प्राइस ₹799 हो जाएगा !</p>
        </motion.div>

        {/* Timer & CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-6"
        >
          <div className="flex gap-4 justify-center">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-center shadow-lg min-w-[140px]">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">00</div>
              <div className="text-white/80 text-sm">Minutes</div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-center shadow-lg min-w-[140px]">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">00</div>
              <div className="text-white/80 text-sm">Seconds</div>
            </div>
          </div>

          <a
            href="#report-form"
            className="block text-center px-8 py-5 bg-[#fca311] text-black rounded-2xl font-semibold shadow-lg shadow-[#fca311]/50 hover:shadow-xl hover:shadow-[#fca311]/70 transition-all hover:scale-105"
          >
            <span className="block text-lg mb-1">I Want Mobile Numerology Report</span>
            <span className="block text-sm opacity-90">
              (Get Your Report <s>₹799</s> ₹199/– Only)
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}