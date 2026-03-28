# Prompt: Criação da Hero Section
**Objetivo:** Construir timeline e pagina de tecnologias

**Prompt enviado ao Ollama (Agente):**
Hero Section ficou perfeita! Agora você vai atuar novamente como meu agente autônomo de frontend para construir as próximas duas seções do portfólio: 'Minha Trajetória' e 'Habilidades'. Lembre-se de operar dentro da pasta ./portfolio/ e manter o tema de 'Viagem/Conexão Europa-Brasil' com cores vibrantes.

Execute estritamente os seguintes passos:

1. Atualização de Dados: > Edite ./portfolio/data/portfolio.ts. Adicione ou atualize a constante trajectory (array de objetos) com 3 marcos:

Brasil: Formação técnica em Programação (3 anos).

Espanha: Graduação em Engenharia Telemática.

Itália (Lecce): Intercâmbio Erasmus atual.
Garanta também que o array skills tenha tecnologias relevantes (React, Next.js, TypeScript, Tailwind, Node.js, etc).

2. Componente da Trajetória (A Viagem):
Crie o arquivo ./portfolio/components/Timeline.tsx.

Crie um design que lembre uma rota de viagem ou mapa, conectando os 3 países com uma linha visual pontilhada ou sólida.

Use ícones do lucide-react (ex: PlaneTakeoff, MapPin, Globe).

Use framer-motion (com "use client";) para animar cada ponto da rota aparecendo na tela à medida que o usuário faz o scroll (whileInView).

3. Componente de Habilidades:
Crie o arquivo ./portfolio/components/Skills.tsx.

Renderize um grid responsivo (mobile-first) mapeando o array skills.

Cada habilidade deve ser um "card" ou "badge" com efeitos de hover muito dinâmicos e vibrantes usando Tailwind.

4. Integração na Página Principal:
Edite o arquivo ./portfolio/app/page.tsx. Importe o <Timeline /> e o <Skills /> e adicione-os logo abaixo do <Hero />. Coloque um espaçamento vertical (py-20 ou similar) para a rolagem da página ficar elegante.

Trabalhe nos arquivos e me avise quando terminar.