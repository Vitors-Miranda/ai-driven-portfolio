# AI-Driven Church ERP (Micro-ERP para Igrejas)

Este é um projeto de estudo ("Build to Learn") desenvolvido em um desafio de 7 dias. O objetivo principal foi testar os limites do **Desenvolvimento Assistido por IA** utilizando um modelo de linguagem rodando 100% localmente.

<img width="1516" height="576" alt="image" src="https://github.com/user-attachments/assets/310114b8-e1e7-4024-afc9-6b82450f1dba" />



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
