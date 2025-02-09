const styles = {
  section: 'py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900',
  container: 'max-w-4xl mx-auto',
  title: 'text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center',
  timeline: 'relative',
  timelineLine: 'absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-600 dark:bg-blue-400 top-6 h-[calc(100%-1.5rem)]',
  timelineItem: 'relative flex justify-center mb-8 last:mb-0',
  timelineDot: 'absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400',
  card: 'relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 w-[calc(100%-2rem)] max-w-2xl mx-auto cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]',
  header: 'flex justify-between items-start mb-4 flex-wrap gap-2',
  company: 'text-xl font-semibold text-gray-900 dark:text-white',
  date: 'text-sm text-gray-600 dark:text-gray-400',
  role: 'text-lg text-blue-600 dark:text-blue-400 mb-3',
  description: 'text-gray-600 dark:text-gray-300 space-y-2',
  techStack: 'flex flex-wrap gap-2 mt-4',
  tech: 'px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200',
};

const experiences = [
  {
    company: 'Catalog',
    role: 'Frontend QA Intern',
    date: 'July 31, 2023 - December 22, 2023',
    description: [
      'Design and implementation of end-to-end tests with Cypress',
      'Creation of step-by-step test scenarios to verify the behavior of the user interface',
      'Regression testing to ensure feature stability',
      'Collaboration with the frontend team for bug identification',
    ],
    tech: ['Next.js', 'Cypress', 'GitHub Actions', 'Docker'],
    link: 'https://www.startcatalog.com'
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              
              <a 
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.header}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <h4 className={styles.role}>{exp.role}</h4>
                <div className={styles.description}>
                  {exp.description.map((item, i) => (
                    <div key={i} className="mb-2">{item}</div>
                  ))}
                </div>
                <div className={styles.techStack}>
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}