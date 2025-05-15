# Plano de Reorganização do Projeto

## Estrutura Proposta
```
/
├── assets/          # Recursos estáticos (imagens, fontes, etc.)
├── components/      # Componentes React organizados por função
│   ├── UI/          # Componentes de interface do usuário
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── KowalskiCard/
│   │   ├── KowalskiChat/
│   │   └── ExperimentCard/
│   └── Effects/     # Componentes para efeitos visuais
│       ├── GlitchText/
│       ├── MatrixRain/
│       ├── ParticleBackground/
│       └── TypingText/
├── layouts/         # Layouts da aplicação
│   └── MainLayout/
├── pages/           # Páginas da aplicação
│   └── Experimentos/
└── styles/          # Estilos globais
    ├── index.css
    └── App.css
```

## Plano de Migração

1. Para cada componente, criar uma pasta com o nome do componente
2. Mover o componente JSX e seu CSS correspondente para esta pasta
3. Renomear o CSS para styles.css ou index.css
4. Atualizar todos os imports necessários

## Etapas para Reorganização

1. **Componentes de UI**
   - Mover Navbar.jsx e Navbar.css para components/UI/Navbar/
   - Mover Footer.jsx e Footer.css para components/UI/Footer/
   - Mover KowalskiCard.jsx e KowalskiCard.css para components/UI/KowalskiCard/
   - Mover KowalskiChat.jsx para components/UI/KowalskiChat/
   - Mover ExperimentCard.jsx e ExperimentCard.css para components/UI/ExperimentCard/

2. **Componentes de Efeitos**
   - Mover GlitchText.jsx e GlitchText.css para components/Effects/GlitchText/
   - Mover MatrixRain.jsx e MatrixRain.css para components/Effects/MatrixRain/
   - Mover ParticleBackground.jsx e ParticleBackground.css para components/Effects/ParticleBackground/
   - Mover TypingText.jsx e TypingText.css para components/Effects/TypingText/

3. **Layouts**
   - Mover MainLayout.jsx e MainLayout.css para layouts/MainLayout/

4. **Páginas**
   - Mover Experimentos.jsx e Experimentos.css para pages/Experimentos/

5. **Estilos Globais**
   - Mover index.css e App.css para styles/

6. **Atualizar App.jsx e main.jsx**
   - Atualizar os caminhos de importação em todos os arquivos afetados 