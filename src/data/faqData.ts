export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Beginners' | 'Classes & Schedule' | 'Certification & Career';
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need prior technical or computer experience to join?',
    answer: 'Absolutely not! Our foundation courses are built specifically for complete beginners. We start from ground zero with simple, non-intimidating explanations. If you know how to use a smartphone or turn on a computer, you are 100% qualified to start.',
    category: 'Beginners'
  },
  {
    id: 'faq-2',
    question: 'Are the training classes online or physical?',
    answer: 'We provide high-impact online training accessible anywhere in the world. You get recorded on-demand video lessons you can watch at your own pace, paired with weekly live Q&A interactive coaching sessions on Zoom and an active 24/7 student community. In select cities, we also hold special weekend physical bootcamps.',
    category: 'Classes & Schedule'
  },
  {
    id: 'faq-3',
    question: 'Do I need a high-end laptop or computer?',
    answer: 'No expensive high-end computer is necessary. Any standard laptop or desktop running Windows 10/11 or macOS that can connect to the internet and run modern web browsers like Google Chrome will work perfectly for our beginner, office, design, AI, and web programs.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'How long does each course take to complete?',
    answer: 'Most programs run between 4 to 6 weeks, requiring approximately 4 to 6 hours of flexible study per week. Because you get lifetime access to all recorded materials, you can move faster if you have free time, or slow down when work or family commitments arise.',
    category: 'Classes & Schedule'
  },
  {
    id: 'faq-5',
    question: 'Will I receive a verifiable certificate after training?',
    answer: 'Yes! Upon completing your course and submitting the final hands-on capstone project, you receive an official, verifiable Certificate of Completion. You can add this directly to your LinkedIn profile, CV, and portfolio to showcase your practical skills to employers and clients.',
    category: 'Certification & Career'
  },
  {
    id: 'faq-6',
    question: 'How do I register and how quickly can I start learning?',
    answer: 'Registration takes less than 2 minutes. Click on any "Enroll Now" or "Start Learning" button, select your chosen program, and fill in your details. You will immediately receive instant access instructions, orientation guides, and community invite links via email and WhatsApp.',
    category: 'General'
  },
  {
    id: 'faq-7',
    question: 'Can I learn at my own pace if I have a busy 9-to-5 job?',
    answer: 'Yes. All video modules and exercise worksheets are available 24/7. Many of our most successful students are working parents, 9-to-5 employees, or university students who study in the evenings and on weekends. Live mentoring sessions are also recorded so you never miss a thing.',
    category: 'Classes & Schedule'
  },
  {
    id: 'faq-8',
    question: 'What kind of support do I receive if I get stuck during a lesson?',
    answer: 'You are never left alone! Every student gets direct access to our private WhatsApp & Discord community where Coach Marcus and our teaching assistants answer questions daily. You can post screenshots, get code/design reviews, and hop on weekly screen-share office hours.',
    category: 'General'
  },
  {
    id: 'faq-9',
    question: 'Can these skills actually help me make money or find a job?',
    answer: 'Every single skill we teach is chosen based on real market demand. We do not teach abstract theory — we teach skills that businesses desperately need: social media content, websites, AI efficiency, office spreadsheets, and remote communication. We also have dedicated modules on freelancing, portfolio creation, and client negotiation.',
    category: 'Certification & Career'
  },
  {
    id: 'faq-10',
    question: 'How do I get started and is admission open now?',
    answer: 'Yes! Registrations and cohort applications are currently open. You can enroll right now through any course card or chat directly with Farida on WhatsApp to receive immediate orientation guides and session links.',
    category: 'General'
  }
];
