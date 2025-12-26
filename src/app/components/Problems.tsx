import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Problems() {
  const problems = [
    {
      title: "Money Blockages",
      image: "https://images.unsplash.com/photo-1634757439914-23b8acb9d411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGdyb3d0aCUyMHdlYWx0aHxlbnwxfHx8fDE3NjY3MzM4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Business Problems",
      image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2NzMzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Health Problems",
      image: "https://images.unsplash.com/photo-1722605341100-5cdba3a450fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzY2NzAzNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Career Guidance",
      image: "https://images.unsplash.com/photo-1533227108549-141c400ed488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzMzODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Relationship Solutions",
      image: "https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxhdGlvbnNoaXAlMjBjb3VwbGUlMjBsb3ZlfGVufDF8fHx8MTc2NjczMzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Job Solutions",
      image: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2NjU3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#14213d] to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16"
        >
          What problems will this report solve?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-[#fca311]/20 blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-[#14213d]/80 backdrop-blur-sm border border-[#e5e5e5]/10 rounded-2xl overflow-hidden hover:border-[#fca311]/50 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-[#fca311]/20">
                  <h3 className="text-lg font-semibold text-white text-center">
                    {problem.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}