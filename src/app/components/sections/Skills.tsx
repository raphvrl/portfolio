import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiCypress,
  SiGithubactions,
  SiLinux,
  SiExpo,
  SiPhp,
  SiLaravel,
  SiPython
} from 'react-icons/si'

const styles = {
  section: 'py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  container: 'max-w-4xl mx-auto',
  title: 'text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center',
  divider: 'w-full h-px bg-gray-200 dark:bg-gray-700 my-12',

  languagesContainer: 'mb-8',
  languageTitle: 'text-2xl font-semibold mb-6 text-gray-800 dark:text-white',
  languageGrid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  languageCard: 'bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow backdrop-blur-sm hover:scale-105 transition-transform',
  languageName: 'text-lg font-medium text-gray-900 dark:text-white',
  languageLevel: 'text-sm text-gray-600 dark:text-gray-400',
  
  categoryContainer: 'mb-8',
  categoryTitle: 'text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300',
  techGrid: 'grid grid-cols-2 sm:grid-cols-3 gap-4',
  techCard: 'bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow backdrop-blur-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform',
  techIcon: 'text-2xl',
  techName: 'font-medium text-gray-800 dark:text-white'
};

const languages = [
  { name: 'French', level: 'Native language' },
  { name: 'English', level: 'B2 level' }
];

const technologies = {
  "Programming Languages": [
    { name: 'C', icon: SiC, color: '#00599C' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
  ],
  "Frontend": [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  ],
  "Mobile": [
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Expo', icon: SiExpo, color: '#000020' },
  ],
  "Backend": [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  ],
  "Tools & DevOps": [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  ],
  "Testing": [
    { name: 'Cypress', icon: SiCypress, color: '#00BF8C' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.languagesContainer}>
          <h3 className={styles.languageTitle}>Langues</h3>
          <div className={styles.languageGrid}>
            {languages.map((lang, index) => (
              <div key={index} className={styles.languageCard}>
                <h4 className={styles.languageName}>{lang.name}</h4>
                <p className={styles.languageLevel}>{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.container}>
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className={styles.categoryContainer}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.techGrid}>
                {techs.map((tech, index) => (
                  <div key={index} className={styles.techCard}>
                    <tech.icon 
                      className={styles.techIcon} 
                      style={{ color: tech.color }}
                    />
                    <span className={styles.techName}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}