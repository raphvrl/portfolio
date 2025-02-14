import { Github, Linkedin, Mail } from 'lucide-react'

const styles = {
  section: 'py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900',
  container: 'max-w-4xl mx-auto text-center',
  title: 'text-3xl font-bold mb-8 text-gray-900 dark:text-white',
  subtitle: 'text-lg text-gray-600 dark:text-gray-400 mb-12',
  linksContainer: 'flex justify-center items-center gap-8',
  link: 'flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform text-gray-800 dark:text-white',
  icon: 'w-5 h-5'
}

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/raphvrl',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/raphael-verrouil-84648a272',
    color: '#0077B5'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:raphael.verrouil@epitech.eu',
    color: '#EA4335'
  }
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>
          Let&apos;s connect! Feel free to reach out through any of these platforms.
        </p>
        
        <div className={styles.linksContainer}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <social.icon className={styles.icon} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}