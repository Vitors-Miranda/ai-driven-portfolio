# AI-Driven Church ERP (Micro-ERP para Igrejas)

Este é um projeto de estudo ("Build to Learn") desenvolvido em um desafio de 7 dias. O objetivo principal foi testar os limites do **Desenvolvimento Assistido por IA** utilizando um modelo de linguagem rodando 100% localmente.

<img width="1459" height="575" alt="image" src="https://github.com/user-attachments/assets/28f4b51b-46b7-443c-9348-fbd2dd794e74" />


Para evitar alucinações e códigos complexos desnecessários, o projeto foi construído sob o conceito de **"AI Jail"** (Prisão de IA), utilizando um arquivo de regras estritas (`ai-rules.md`) para guiar o modelo passo a passo, sem perder o contexto da arquitetura.

O Experimento com IA
- **IA Utilizada:** Ollama (Qwen 2.5) rodando localmente no Windows.
- **Abordagem:** Geração de código via CLI focada em TDD (Test-Driven Development) e Server Actions, eliminando a necessidade de uma API REST separada.

## Tecnologias Utilizadas
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Banco de Dados:** SQLite (Zero-config)
- **ORM:** Prisma
