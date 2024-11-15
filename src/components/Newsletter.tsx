import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <span className="inline-block px-4 py-1 mb-4 text-sm bg-white rounded-full text-primary-foreground">
          Stay Updated
        </span>
        <h2 className="text-4xl font-bold mb-4">Join Our Pack</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to receive the latest news, tips, and heartwarming stories about our furry friends
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
      
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,198,161,0.1),rgba(254,247,205,0.4))]" />
      </div>
    </section>
  );
};