import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14213d] via-[#0a1425] to-black" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#fca311]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#fca311]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Discount Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 bg-[#fca311] text-black text-center py-3 px-4"
      >
        <p className="flex items-center justify-center gap-2 font-semibold">
          <span className="animate-pulse">🔴</span>
          <span>Limited Time Offer - Only For First 23 People!</span>
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fca311] animate-pulse" />
                <span className="text-sm">Trusted by 9,000+ People</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get Your Personalized{" "}
                <span className="text-[#fca311]">
                  Mobile Numerology Report
                </span>{" "}
                & Unlock Your Potential
              </h1>

              <h2 className="text-xl md:text-2xl mb-6 text-[#e5e5e5]">
                A wrong mobile number can lead to{" "}
                <span className="text-[#fca311] font-semibold">money blockages</span>,
                professional setbacks, and relationship struggles.
              </h2>

              <p className="text-[#e5e5e5]/80 mb-8 text-lg leading-relaxed">
                Discover the hidden energy of your mobile number and unlock a path of clarity,
                growth, and abundance with a professional numerology report crafted just for you.
              </p>

              <a
                href="#report-form"
                className="inline-flex flex-col items-center gap-1 px-8 py-4 bg-[#fca311] text-black rounded-full font-semibold shadow-lg shadow-[#fca311]/50 hover:shadow-xl hover:shadow-[#fca311]/70 transition-all hover:scale-105"
              >
                <span>Get Your Numerology Report</span>
                <span className="text-sm font-normal opacity-90">
                  Only ₹199 (Regular Price: <s>₹799</s>)
                </span>
              </a>
            </motion.div>

            {/* Right Content - Report Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#fca311]/30 blur-3xl" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#14213d] to-black rounded-3xl p-8 border border-[#fca311]/30 backdrop-blur-sm shadow-2xl aspect-[3/4]">
                  <div className="flex flex-col h-full">
                    <div className="space-y-3">
                      <div className="text-[#fca311] text-xs font-semibold uppercase tracking-wider">
                        Premium Quality
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Premium Mobile<br />Numerology Report
                      </h3>
                      <p className="text-lg font-semibold text-[#e5e5e5]">
                        +91-91353XXXX2
                      </p>
                      
                      <div className="flex items-center gap-2 pt-4">
                        <Sparkles className="w-4 h-4 text-[#fca311]" />
                        <span className="text-sm text-[#e5e5e5]">Lucky Number Analysis</span>
                      </div>
                    </div>

                    {/* Coin Stack */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          animate={{
                            rotateY: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-[#fca311] to-yellow-600 shadow-lg shadow-[#fca311]/50"
                        />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-gradient-to-r from-[#fca311] to-yellow-600 blur-sm opacity-70" />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-gradient-to-r from-[#fca311] to-yellow-600 blur-sm opacity-50" />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-[#fca311] text-sm font-semibold uppercase tracking-widest">
                        Sachin Lohia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}