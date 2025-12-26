import { motion } from "motion/react";
import { Smartphone, Palette, Hash, Sparkles, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Number Prediction",
      description: "Get mobile number prediction in your personalized mobile numerology report.",
    },
    {
      icon: Palette,
      title: "Your Lucky Colors",
      description: "Know your lucky colors and use them daily to overcome obstacles.",
    },
    {
      icon: Hash,
      title: "Your Lucky Numbers",
      description: "Know your lucky number and use it for your personal growth.",
    },
    {
      icon: Sparkles,
      title: "Missing Number Remedies",
      description: "Get useful remedies according to your mobile number combinations.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#14213d] to-black">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16"
        >
          What will you get in this report?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#fca311]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-[#14213d]/80 backdrop-blur-sm border border-[#e5e5e5]/10 rounded-2xl p-6 text-center hover:border-[#fca311]/50 transition-all">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#fca311] to-yellow-600 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#e5e5e5]/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hindi Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white mb-8 space-y-1"
        >
          <p className="text-lg">यह ऑफर शुरू के सिर्फ 23 लोगो के लिए है उसके बाद इसका</p>
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