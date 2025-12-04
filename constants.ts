import { Project, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  en: {
    name: "David Cequea",
    role: "Android Developer",
    bio: "I am a passionate Android Developer with 3 years of experience building modern, high-quality mobile applications. I specialize in Kotlin, Jetpack Compose, and Clean Architecture, with strong skills in dependency injection, state management, and scalable architecture patterns. I thrive on solving complex technical challenges, optimizing app performance, and crafting polished user interfaces that deliver smooth and engaging user experiences. Driven by continuous learning, I am committed to writing clean, maintainable code and creating elegant solutions that bring ideas to life on Android."
  },
  es: {
    name: "David Cequea",
    role: "Desarrollador Android",
    bio: "Soy desarrollador Android con 3 años de experiencia creando apps modernas y de alto rendimiento. Trabajo principalmente con Kotlin, Jetpack Compose y Clean Architecture, usando inyección de dependencias, gestión de estado y patrones escalables. Me gusta resolver problemas complejos, optimizar el rendimiento y cuidar los detalles de la interfaz para una experiencia fluida y atractiva. Aprendo de forma continua y priorizo escribir código limpio y mantenible para construir soluciones elegantes y robustas en Android."
  }
};

export const SKILLS: { en: SkillCategory[], es: SkillCategory[] } = {
  en: [
    {
      title: "Core Android",
      icon: "fa-mobile-screen",
      skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design 3"]
    },
    {
      title: "Architecture & Patterns",
      icon: "fa-layer-group",
      skills: ["MVVM", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Coroutines", "Flow"]
    },
    {
      title: "Tools & Libraries",
      icon: "fa-toolbox",
      skills: ["Retrofit", "Room", "Firebase", "Git", "CI/CD (GitHub Actions)", "Gradle", "JUnit/Espresso"]
    }
  ],
  es: [
    {
      title: "Android Core",
      icon: "fa-mobile-screen",
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML Layouts", "Android SDK", "Material Design 3"]
    },
    {
      title: "Arquitectura y Patrones",
      icon: "fa-layer-group",
      skills: ["MVVM", "MVI", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Coroutines", "Flow"]
    },
    {
      title: "Herramientas y Librerías",
      icon: "fa-toolbox",
      skills: ["Retrofit", "Room", "Firebase", "Git", "CI/CD (GitHub Actions)", "Gradle", "JUnit/Espresso"]
    }
  ]
};


export const PROJECTS: { en: Project[], es: Project[] } = {
  en: [
    {
      title: "Transferme",
      description: "A modern mobile banking interface designed in Figma and fully implemented with Jetpack Compose. This project demonstrates my ability to translate high-fidelity design prototypes into production-ready Android UI code, focusing exclusively on the frontend layer.",
      image: "images/transferme_resume_imgs.png",
      tags: ["Kotlin", "Jetpack Compose", "Navigation Compose", "Koin", "MVVM", "Custom Charts"],
      links: { github: "https://github.com/dcequea97/android-transferme" }
    },
    {
      title: "CryptoBuddy",
      description: "A lightweight mobile app that showcases the top cryptocurrencies and allows users to explore their key details. The main objective of this project is not the user interface itself, but the implementation of a caching system to improve performance and ensure a smoother user experience. This project highlights my ability to go beyond UI design and focus on backend-related concepts within the frontend layer, such as efficient data handling, state management, and responsiveness in Android development.",
      image: "images/crypto_buddy.png",
      tags: ["Kotlin", "ROOM", "Retrofit", "MVVM", "DataStore", "Caching", "Koin", "Corutines"],
      links: { github: "https://github.com/dcequea97/android-cryptobuddy" }
    },
    {
      title: "SafeBuddy",
      description: "A lightweight mobile app designed to securely and intuitively manage passwords. Users can create, edit, and view credentials grouped by custom sections, with features like copy, hide, and delete.",
      image: "images/safe_buddy.png",
      tags: ["Kotlin", "Dagger Hilt", "Room", "MVVM", "Encryption", "Biometric Auth", "Coroutines"],
      links: { github: "https://github.com/dcequea97/android-safebuddy" }
    }
  ],
  es: [
    {
      title: "Transferme",
      description: "Una interfaz de banca móvil moderna, diseñada en Figma y completamente implementada con Jetpack Compose. Este proyecto demuestra mi capacidad para traducir prototipos de diseño de alta fidelidad en código de UI Android listo para producción, enfocándome exclusivamente en la capa frontend.",
      image: "images/transferme_resume_imgs.png",
      tags: ["Kotlin", "Jetpack Compose", "Navigation Compose", "Koin", "MVVM", "Custom Charts"],
      links: { github: "https://github.com/dcequea97/android-transferme" }
    },
    {
      title: "CryptoBuddy",
      description: "Una aplicación ligera que muestra las principales criptomonedas y permite explorar sus detalles clave. El propósito principal del proyecto no es la interfaz de usuario, sino la implementación de un sistema de caché para optimizar el rendimiento y la experiencia del usuario.",
      image: "images/crypto_buddy.png",
      tags: ["Kotlin", "WebSockets", "Retrofit", "MVVM", "Chart Library", "Corutines"],
      links: { github: "https://github.com/dcequea97/android-cryptobuddy" }
    },
    {
      title: "SafeBuddy",
      description: "Aplicación móvil ligera diseñada para gestionar contraseñas de forma segura y organizada. Permite al usuario crear, editar y visualizar credenciales agrupadas por secciones personalizadas, con funciones como copiar, ocultar o eliminar contraseñas.",
      image: "images/safe_buddy.png",
      tags: ["Kotlin", "Dagger Hilt", "Room", "MVVM", "Encryption", "Biometric Auth", "Coroutines"],
      links: { github: "https://github.com/dcequea97/android-safebuddy" }
    }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", icon: "fa-github", url: "https://github.com/dcequea97" },
  { platform: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com/in/david-cequea-dentale-568133146" }
];

export const EMAIL = "dcequea97@gmail.com";

export const NAV_LINKS = {
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  es: [
    { label: "Sobre Mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ]
};

export const UI_LABELS = {
  en: {
    hello: "HELLO, MY NAME IS",
    viewWork: "View My Work",
    contactMe: "Contact Me",
    techSkills: "Technical",
    techSkillsSuffix: "Skills",
    techStack: "My tech stack is focused on modern Android development practices. I prioritize clean, maintainable code and scalable architectures.",
    featuredProjects: "Featured",
    featuredProjectsSuffix: "Projects",
    projectsDesc: "A selection of apps I've built. From utility tools to full-scale social platforms, each project represents a unique challenge solved.",
    whatsNext: "What's Next?",
    letsWork: "Let's work together",
    available: "I'm currently available for freelance work. If you have a project that needs some creative Android touch, let's hear it.",
    sayHello: "Say Hello",
    footer: "Designed & Built with React and Tailwind."
  },
  es: {
    hello: "HOLA, MI NOMBRE ES",
    viewWork: "Ver Mi Trabajo",
    contactMe: "Contáctame",
    techSkills: "Habilidades",
    techSkillsSuffix: "Técnicas",
    techStack: "Mi stack tecnológico se centra en prácticas modernas de desarrollo Android. Priorizo código limpio, mantenible y arquitecturas escalables.",
    featuredProjects: "Proyectos",
    featuredProjectsSuffix: "Destacados",
    projectsDesc: "Una selección de apps que he construido. Desde herramientas de utilidad hasta plataformas sociales a gran escala, cada proyecto representa un desafío único resuelto.",
    whatsNext: "¿Qué sigue?",
    letsWork: "Trabajemos Juntos",
    available: "Actualmente estoy disponible para trabajo freelance. Si tienes un proyecto que necesita un toque creativo de Android, hablemos.",
    sayHello: "Saludar",
    footer: "Diseñado y construido con React y Tailwind."
  }
};