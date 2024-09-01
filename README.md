# Transcrição e Tradução de Voz

Este projeto é uma aplicação web que permite a transcrição de voz em texto e a tradução de texto para diferentes idiomas. O backend é desenvolvido em Node.js com Express, enquanto o frontend utiliza HTML, CSS e JavaScript. A aplicação faz uso do reconhecimento de voz nativo do navegador e de uma API externa para tradução.

# Funcionalidades

Transcrição de Voz: O aplicativo pode gravar áudio e transcrever o conteúdo em texto em tempo real. Os usuários podem iniciar e parar a gravação, copiar o texto transcrito, limpar o histórico de transcrições e exportar o histórico.
Tradução de Texto: Os usuários podem inserir texto, selecionar o idioma de destino e ver a tradução resultante.
Contato: Um formulário de contato permite que os usuários enviem mensagens. As mensagens são processadas pelo backend e uma confirmação é enviada de volta.


## Visão Geral

Este projeto é uma aplicação web que permite aos usuários transcrever áudio em texto e traduzir texto para diferentes idiomas. O backend é responsável por lidar com requisições e fornecer a funcionalidade de tradução através de uma API externa. O frontend oferece uma interface interativa para o usuário.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **APIs Externas**:
  - Reconhecimento de voz: `webkitSpeechRecognition` (nativo do navegador)
  - Tradução: MyMemory Translation API

## Requisitos

Certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Para verificar se você já possui o Node.js e o npm instalados, execute:

```bash
node -v
npm -v
