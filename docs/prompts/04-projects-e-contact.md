# Prompt: Criação da Hero Section
**Objetivo:** Construir paginas de projeto e contato

**Prompt enviado ao Ollama (Agente):**
Ótimo trabalho até aqui! Vamos para a fase final de construção do portfólio. Você deve atuar novamente como meu agente autônomo de frontend, operando dentro da subpasta ./portfolio/, respeitando o tema de 'Viagem/Europa' e as animações vibrantes.

Execute estritamente os seguintes passos:

1. Componente de Projetos:
Crie o arquivo ./portfolio/components/Projects.tsx.

Este componente deve ler o array projects de ./portfolio/data/portfolio.ts.

Crie um grid responsivo de cards. Cada card deve mostrar a imagem do projeto (com hover zoom), título, uma descrição vibrante, a stack de tecnologias usada (como badges coloridos) e ícones da Lucide para os links (GitHub, Live Demo).

Use framer-motion (com "use client";) para animar a entrada dos cards com um efeito de 'stagger' (um de cada vez).

2. Componente de Contato (Rodapé):
Crie o arquivo ./portfolio/components/Contact.tsx.

Crie uma seção de rodapé elegante e vibrante. Inclua uma frase de Call to Action (CTA) encorajando a conexão internacional.

Exiba os links sociais de ./portfolio/data/portfolio.ts usando ícones da Lucide (Mail, Linkedin, Github).

Adicione um toque final que remeta à sua localização atual em Lecce, Itália (talvez um ícone de mapa com uma localização sutil).

3. Integração na Página Principal:
Edite o arquivo ./portfolio/app/page.tsx. Importe o <Projects /> e o <Contact /> e adicione-os na ordem correta, logo abaixo do <Skills />. Certifique-se de que há espaçamento vertical (py-20 ou similar) entre cada seção.

Execute as modificações e me avise quando terminar.