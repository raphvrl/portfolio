import { Github } from 'lucide-react'

const styles = {
  section: 'py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  container: 'max-w-6xl mx-auto',
  title: 'text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center',
  grid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  card: 'group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300',
  cardContent: 'p-6',
  projectTitle: 'text-xl font-semibold text-gray-900 dark:text-white mb-2',
  projectDesc: 'text-gray-600 dark:text-gray-300 mb-4',
  techStack: 'flex gap-2 mb-4',
  tech: 'px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200',
  link: 'flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline'
}

const projects = [
  {
    title: 'Minecraft Clone',
    description: 'A Minecraft clone developed in C, using the OpenGL library for graphics. Project under development.',
    tech: ['C', 'OpenGL'],
    github: 'https://github.com/raphvrl/C-Minecraft',
    status: 'In development'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Rock Paper Scissors game developed with Next.js to explore the features of the framework.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/raphvrl/paper-scissors-rocks',
    status: 'Completed'
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.link}>
                  <Github size={20} />
                  <span>View on GitHub</span>
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.status}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}