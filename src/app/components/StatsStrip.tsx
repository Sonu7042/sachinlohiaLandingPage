import { motion } from "motion/react";

export function StatsStrip() {
  const stats = [
    { value: "9,000+", label: "Reports Sold", emoji: "📄" },
    { value: "2,300+", label: "Consultations Done", emoji: "📟" },
    { value: "99.9%", label: "Happy Clients", emoji: "😃" },
  ];

  return (
    <section className="relative bg-[#fca311] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-black"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl">{stat.emoji}</span>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              </div>
              <p className="text-sm md:text-base font-semibold opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}