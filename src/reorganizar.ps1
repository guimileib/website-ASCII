# Script para reorganizar a estrutura de arquivos

# Componentes UI
Copy-Item -Path "components\KowalskiCard.jsx" -Destination "components\UI\KowalskiCard\index.jsx"
Copy-Item -Path "components\KowalskiCard.css" -Destination "components\UI\KowalskiCard\styles.css"
Copy-Item -Path "components\KowalskiChat.jsx" -Destination "components\UI\KowalskiChat\index.jsx"
Copy-Item -Path "components\ExperimentCard.jsx" -Destination "components\UI\ExperimentCard\index.jsx"
Copy-Item -Path "components\ExperimentCard.css" -Destination "components\UI\ExperimentCard\styles.css"

# Componentes Effects
Copy-Item -Path "components\GlitchText.jsx" -Destination "components\Effects\GlitchText\index.jsx"
Copy-Item -Path "components\GlitchText.css" -Destination "components\Effects\GlitchText\styles.css"
Copy-Item -Path "components\MatrixRain.jsx" -Destination "components\Effects\MatrixRain\index.jsx"
Copy-Item -Path "components\MatrixRain.css" -Destination "components\Effects\MatrixRain\styles.css"
Copy-Item -Path "components\ParticleBackground.jsx" -Destination "components\Effects\ParticleBackground\index.jsx"
Copy-Item -Path "components\ParticleBackground.css" -Destination "components\Effects\ParticleBackground\styles.css"
Copy-Item -Path "components\TypingText.jsx" -Destination "components\Effects\TypingText\index.jsx"
Copy-Item -Path "components\TypingText.css" -Destination "components\Effects\TypingText\styles.css"

# Layouts
Copy-Item -Path "layouts\MainLayout.jsx" -Destination "layouts\MainLayout\index.jsx"
Copy-Item -Path "layouts\MainLayout.css" -Destination "layouts\MainLayout\styles.css"

# Páginas
Copy-Item -Path "pages\Experimentos.jsx" -Destination "pages\Experimentos\index.jsx"
Copy-Item -Path "pages\Experimentos.css" -Destination "pages\Experimentos\styles.css"

# Estilos globais
Copy-Item -Path "index.css" -Destination "styles\index.css"
Copy-Item -Path "App.css" -Destination "styles\App.css"

# Atualizar Imports
# Obs: Esta etapa seria mais complexa em PowerShell e pode precisar de ajustes manuais
Write-Host "Arquivos copiados para a nova estrutura. Verifique os imports nos arquivos copiados." 