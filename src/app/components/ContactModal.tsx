'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const styles = {
  wrapper: 'fixed inset-0 z-50',
  overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
  modal: `
    fixed top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-full max-w-lg 
    bg-white dark:bg-gray-900 
    rounded-xl shadow-xl z-50 p-6
    transition-all duration-300
  `,
  header: 'flex justify-between items-center mb-6',
  title: 'text-2xl font-bold text-gray-900 dark:text-white',
  closeButton: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
  formContainer: 'space-y-6',
  formGroup: 'space-y-2',
  label: 'block text-sm font-medium text-gray-700 dark:text-gray-300',
  input: `
    w-full px-4 py-2 
    border border-gray-300 dark:border-gray-700 
    rounded-lg 
    focus:outline-none
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    dark:bg-gray-800 dark:text-white
  `,
  textarea: `
    w-full px-4 py-2 
    border border-gray-300 dark:border-gray-700 
    rounded-lg 
    focus:outline-none
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    min-h-[120px] 
    dark:bg-gray-800 dark:text-white
    resize-y
  `,
  submitButton: `
    w-full px-6 py-3 
    bg-blue-600 hover:bg-blue-700 
    text-white font-medium
    rounded-lg 
    transition-all duration-200
    disabled:opacity-70 disabled:cursor-not-allowed
  `
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Raphaël',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Réponse EmailJS:', result);

      if (result.status === 200) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }
    } catch (error) {
      console.error('Detailed error:', error);
      alert('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={onClose} />
      
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Me</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your message..."
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSubmit(e);
            }}
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}