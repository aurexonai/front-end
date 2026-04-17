import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="font-heading text-8xl md:text-9xl font-extrabold text-accent/30 leading-none">404</div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4">Page Not Found</h1>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-8 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-105 transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
