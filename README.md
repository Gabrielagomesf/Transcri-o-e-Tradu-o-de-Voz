# Aplicação Web de Transcrição e Tradução de Voz

Esta aplicação web oferece funcionalidades avançadas para transcrição de voz em texto e tradução de texto para vários idiomas. O backend é desenvolvido utilizando Node.js e Express, enquanto o frontend é construído com HTML, CSS e JavaScript. A aplicação integra o reconhecimento de voz nativo do navegador e uma API externa para tradução.

## Funcionalidades

- **Transcrição de Voz**: 
  - Grave áudio e transcreva o conteúdo em tempo real.
  - Inicie e pare a gravação conforme necessário.
  - Copie o texto transcrito para a área de transferência.
  - Limpe o histórico de transcrições.
  - Exporte o histórico de transcrições.

- **Tradução de Texto**: 
  - Insira texto e selecione o idioma de destino.
  - Visualize a tradução resultante instantaneamente.

- **Contato**: 
  - Preencha um formulário para enviar mensagens.
  - O backend processa as mensagens e envia uma confirmação de recebimento.

## Visão Geral

Este projeto proporciona uma plataforma intuitiva para transcrição e tradução de áudio e texto. O backend é responsável pelo processamento das requisições e pela integração com uma API de tradução externa. O frontend oferece uma interface interativa e amigável para os usuários interagirem com a aplicação.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **APIs Externas**:
  - **Reconhecimento de Voz**: `webkitSpeechRecognition` (nativo do navegador)
  - **Tradução**: MyMemory Translation API

## Requisitos

Para executar a aplicação, você precisa ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Para verificar se o Node.js e o npm estão instalados, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
