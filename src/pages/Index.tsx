import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { FeaturedDogs } from "@/components/FeaturedDogs";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedDogs />
      <Newsletter />
    </motion.div>
  );
};

export default Index;