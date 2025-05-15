# ASCII ChatBot - Estrutura de Pastas

Este repositório contém o código fonte para o projeto ASCII ChatBot.

## Estrutura de Pastas

A estrutura de pastas foi organizada da seguinte forma:

```
/
├── assets/                         # Recursos estáticos (imagens, fontes, etc.)
├── components/                     # Componentes React organizados por função
│   ├── UI/                         # Componentes de interface do usuário
│   │   ├── Footer/                 # Rodapé do site
│   │   ├── Navbar/                 # Barra de navegação
│   │   ├── KowalskiCard/           # Card do Kowalski
│   │   ├── KowalskiChat/           # Interface de chat do Kowalski
│   │   └── ExperimentCard/         # Card para experimentos
│   └── Effects/                    # Componentes para efeitos visuais
│       ├── GlitchText/             # Efeito de texto com glitch
│       ├── MatrixRain/             # Efeito de chuva de Matrix
│       ├── ParticleBackground/     # Fundo com partículas
│       └── TypingText/             # Efeito de texto sendo digitado
├── layouts/                        # Layouts da aplicação
│   └── MainLayout/                 # Layout principal
├── pages/                          # Páginas da aplicação
│   └── Experimentos/               # Página de experimentos
└── styles/                         # Estilos globais
    ├── index.css                   # Estilos globais raiz
    └── App.css                     # Estilos da aplicação
```

## Convenção de Nomeação de Arquivos

- Cada componente está em sua própria pasta nomeada de acordo com o componente
- Dentro de cada pasta de componente:
  - `index.jsx`: Arquivo principal do componente
  - `styles.css`: Estilos específicos do componente

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o projeto com `npm run dev` 