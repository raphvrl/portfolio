import { MapPin } from 'lucide-react';

const styles = {
  section: 'min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  container: 'max-w-4xl mx-auto text-center px-4',
  title: 'text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent',
  subtitle: 'text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6',
  description: 'text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed',
  location: 'flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mt-4',
  locationText: 'text-gray-600 dark:text-gray-400',
};

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Raphael Verrouil</h1>
        <h2 className={styles.subtitle}>
          Software Engineering Student at Epitech
        </h2>
        <div className={styles.description}>
          Passionate about creating innovative solutions and exploring new
          technologies.
        </div>
        <div className={styles.location}>
          <MapPin className="text-gray-600 dark:text-gray-400" size={20} />
          <span className={styles.locationText}>Bordeaux, France</span>
        </div>
      </div>
    </section>
  );
}