# Prompt: Criação da Hero Section
**Objetivo:** Organizar o projeto e exibir o hero section.

**Prompt enviado ao Ollama (Agente):**
Você é um agente de desenvolvimento autônomo. Você está rodando na raiz do projeto. O aplicativo Next.js está localizado dentro da subpasta ./portfolio/. Você tem permissão para criar, mover e editar arquivos.

Sua tarefa é organizar a estrutura do portfólio e substituir a tela preta padrão do Next.js pela minha nova Hero Section.
Edite o arquivo ./portfolio/app/page.tsx. APAGUE todo o código boilerplate padrão do Next.js que está lá. Substitua por um componente de página limpo que apenas importa e renderiza o <Hero />. Lembre-se que o caminho de importação será import Hero from '../components/Hero'; (ou similar, dependendo de como você exportar).