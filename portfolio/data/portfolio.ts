// src/data/portfolio.ts

export const personalInfo = {
  name: "Vitor Miranda",
  role: "Engenheiro Telemático & Desenvolvedor Fullstack", 
  bio: "Desenvolvedor brasileiro com uma base sólida de 3 anos de formação técnica em programação. Movido pelo desafio, mudei-me para a Espanha para cursar Engenharia Telemática e, atualmente, estou expandindo meus horizontes na Itália através do programa Erasmus. Unindo a base de software brasileira com a engenharia europeia, crio soluções com visão global.",
  avatarUrl: "/images/profile.jpg", 
  resumeUrl: "/cv.pdf",
  currentLocation: "Itália (Erasmus)",
};

export const socialLinks = {
  github: "https://github.com/Vitors-Miranda",
  linkedin: "https://www.linkedin.com/in/vitorsmiranda/",
  email: "mailto:vitorsmiranda31@gmail.com",
};

export const trajectory = [
  {
    id: 1,
    country: "Brasil",
    flag: "🇧🇷",
    title: "Formação Técnica",
    description: "3 anos de formação técnica em Programação. Base sólida em lógica de programação e desenvolvimento de software.",
    icon: "graduation",
  },
  {
    id: 2,
    country: "Espanha",
    flag: "🇪🇸",
    title: "Engenharia Telemática",
    description: "Graduação em Engenharia Telemática. Especialização em redes, telecomunicações e sistemas distribuídos.",
    icon: "engineering",
  },
  {
    id: 3,
    country: "Itália",
    flag: "🇮🇹",
    title: "Erasmus em Lecce",
    description: "Intercâmbio internacional através do programa Erasmus. Expansão de horizontes acadêmicos e culturais no sul da Itália.",
    icon: "travel",
    current: true,
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "SpringBoot",
  "Docker",
  "Laravel",
  "PHP",
  "React Native",
  "MySQL",
  "Git",
];

export const projects = [
  {
    id: 1,
    title: "REACT-NATIVE-MOVIES",
    description: "A beautiful and functional mobile app built with React Native, Expo, and TypeScript. It fetches movies from TMDB (The Movie Database) API and allows users to explore trending movies, search for titles, and save their favorites using Appwrite as the backend.",
    techStack: ["React Native", "Tailwind", "API Rest"],
    imageUrl: "/images/projeto-1.png", // Foto na pasta public
    githubUrl: "https://github.com/Vitors-Miranda/react-native-movies",
  },
  {
    id: 2,
    title: "Gerenciador de Tarefas",
    description: "Um site simples de gerenciamento de tarefas criado com React e Vite. Com ele, você pode adicionar tarefas com título e descrição, marcar como feitas ou não feitas e deletar tarefas..",
    techStack: ["React", "Vite"],
    imageUrl: "/images/projeto-2.png",
    githubUrl: "https://github.com/Vitors-Miranda/tasks-react-vite",
  }
];