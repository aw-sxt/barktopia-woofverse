import { motion } from "framer-motion";

const dogs = [
  {
    name: "Golden Retriever",
    description: "Friendly and intelligent family companions",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Labrador",
    description: "Outgoing and even-tempered breed",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "German Shepherd",
    description: "Loyal and highly trainable protectors",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const FeaturedDogs = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm bg-secondary rounded-full text-primary-foreground">
            Featured Breeds
          </span>
          <h2 className="text-4xl font-bold mb-4">Meet Our Stars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover some of the most beloved dog breeds, each with their unique characteristics and charm
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dogs.map((dog, index) => (
            <motion.div
              key={dog.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{dog.name}</h3>
                  <p className="text-white/80 text-sm">{dog.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};