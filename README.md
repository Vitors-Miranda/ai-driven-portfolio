# 🌍 Personal Portfolio: Brazil-Europe Journey

Este é um projeto de estudo ("Build to Learn") desenvolvido em um desafio de 7 dias. O objetivo principal foi testar os limites do **Desenvolvimento Assistido por IA** utilizando um modelo de linguagem rodando 100% localmente.

Para evitar alucinações e códigos complexos desnecessários, o projeto foi construído sob o conceito de **"AI Jail"** (Prisão de IA), utilizando um arquivo de regras estritas (`ai-rules.md`) para guiar o modelo passo a passo, sem perder o contexto da arquitetura.

## O Experimento com IA
- **IA Utilizada:** Ollama (Qwen 3.5) rodando localmente no Windows.
- **Abordagem:** Geração de código via **Agente Autônomo** (comando `launch`), eliminando a necessidade de uma API REST separada ou backend complexo. O agente escreveu os arquivos diretamente no sistema de arquivos sob supervisão.

## Funcionalidades (MVP)
Um portfólio "Single Page" com tema internacional e design vibrante, contendo:
1. **Hero Section:** Destaque para o cargo e localização atual na Europa.
2. **Trajetória Timeline:** Linha do tempo animada mostrando a jornada do Brasil (Programação) para a Europa (Engenharia Telemática/Erasmus).
3. **Skills:** Grade responsiva de habilidades técnicas.
4. **Projetos:** Cards dinâmicos dos projetos concluídos.
5. **Contato:** Rodapé com links sociais e CTA para conexão global.

## Tecnologias Utilizadas
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion (para transições dinâmicas)
- **Ícones:** Lucide React

## 🧠 Os Meus Prompts (Prompt Engineering)
Este projeto foi construído utilizando técnicas avançadas de Prompt Engineering e Agentes Autónomos. Para fins de estudo e transparência, guardei todos os comandos exatos que utilizei para guiar a IA na construção de cada componente.

Pode consultar o meu raciocínio e os prompts na pasta [`docs/prompts/`](./docs/prompts/).