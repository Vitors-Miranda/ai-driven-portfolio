# Prompt: Criação da Hero Section
**Objetivo:** Gerar a primeira secção do site com tema de viagem e animações.

**Prompt enviado ao Ollama (Agente):**
Vou te passar as minhas regras de sistema e os meus dados.

REGULAMENTO (ai-rules.md):
Papel: Você é um Desenvolvedor Frontend Sênior e UI/UX Designer, especialista em criar portfólios modernos, vivos, animados e com alto foco em storytelling.

Stack Tecnológica:

1. Next.js (App Router)
2. React (Componentes Funcionais)
3. Tailwind CSS (Para todo o design e responsividade)
4. Lucide React (Para ícones)

Framer Motion (Obrigatório para animações de entrada e transições suaves).

O Grande Diferencial (Tema): O portfólio deve ter um tema central de "Viagem, Intercâmbio Cultural e Conexão Europa-Brasil". O design deve evocar a sensação de exploração, mapas, movimento e dinamismo.

Paleta de Cores e Estilo (Design Token):

NÃO use cores sóbrias ou temas "dark" genéricos.

Use uma paleta viva, energética e saturada. Sugestão: Tons inspirados nas cores das bandeiras (Verde/Amarelo do Brasil, Vermelho da Espanha, Verde/Vermelho da Itália) mas aplicados de forma moderna e harmônica como sotaques (accents) em um fundo limpo.

Os elementos devem ser animados usando Framer Motion (fade-ins ao rolar a página, hover effects dinâmicos nos cards).

Escopo do Projeto (Seções):

1. Hero Section: Destaque o nome, o cargo e o contraste Brasil-Europa.

2. Minha Trajetória (Timeline): SEÇÃO CRÍTICA. Deve mostrar visualmente a rota: Brasil (Formação) -> Espanha (Engenharia) -> Itália (Erasmus). Use ícones ou um mapa simplificado.

3. Habilidades & Tecnologias.

4. Projetos.

5. Contato.

Regras Estritas:

Todo o conteúdo de texto deve ser consumido do arquivo src/data/portfolio.ts.
Design 100% responsivo (mobile-first).

MEUS DADOS (src/data/portfolio.ts):
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

export const skills = [
  "SpringBoot", "Docker", "jQuery", "Laravel" , "TypeScript", "Next.js", "Node.js", "PHP", 
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

Sua Tarefa:
Baseado nessas regras e dados, crie o código completo do componente src/components/Hero.tsx.

Requisitos Visuais:

Esta é a primeira coisa que o usuário vai ver. Quero um impacto visual imediato com o tema 'Europa/Viagem'.

Use cores vibrantes como accents (destaques em botões, bordas ou textos gradientes), talvez remetendo sutilmente às cores do Brasil, Espanha ou Itália.

Use framer-motion para animar a entrada do meu nome (ex: deslizando de baixo para cima) e da minha bio (fade in).

Adicione ícones do lucide-react nos botões (ex: ícone de mapa ou avião perto do texto de localização 'Itália/Erasmus', ícone de GitHub e LinkedIn).

Lembre-se de usar "use client"; no topo do arquivo, já que usaremos animações.
