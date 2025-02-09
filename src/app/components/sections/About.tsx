const styles = {
  section: 'py-20 px-4 bg-white dark:bg-gray-900',
  container: 'max-w-4xl mx-auto',
  title: 'text-3xl font-bold mb-8 text-gray-900 dark:text-white',
  content: 'space-y-6 text-gray-600 dark:text-gray-300',
  paragraph: 'text-lg leading-relaxed',
  highlight: 'text-blue-600 dark:text-blue-400 font-semibold',
  list: 'list-disc list-inside mt-2 space-y-2 ml-4'
};

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Currently in my <span className={styles.highlight}>third year</span> at{' '}
            <span className={styles.highlight}>Epitech Bordeaux</span>, 
            I am training to become an expert in software development.
          </p>

          <p className={styles.paragraph}>
            Thanks to Epitech's project-based learning, I have developed strong 
            technical as well as human skills. This unique approach has taught 
            me to work effectively in teams and manage complex projects in real-world conditions.
          </p>

          <div className={styles.paragraph}>
            Throughout the projects, I have gained expertise in:
          </div>
          <ul className={styles.list}>
            <li>Team management and leadership</li>
            <li>Project organization and planning</li>
            <li>Communication and collaboration</li>
            <li>Solving complex problems</li>
            <li>Adaptability and continuous learning</li>
          </ul>

          <p className={styles.paragraph}>
            Passionate about <span className={styles.highlight}>emerging technologies</span>{' '}
            and <span className={styles.highlight}>low-level programming</span>, I have a particular 
            interest in <span className={styles.highlight}>game engine development</span>. 
            This passion drives me to explore complex technical aspects of programming 
            and understand the underlying mechanisms of systems.
          </p>

          <div className={styles.paragraph}>
            My interest in video game development, especially in game engines, 
            allows me to deepen my knowledge in:
          </div>
          <ul className={styles.list}>
            <li>Graphics programming and 3D rendering</li>
            <li>Performance optimization</li>
            <li>Complex software architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}