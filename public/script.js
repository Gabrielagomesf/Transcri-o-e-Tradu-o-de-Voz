document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const copyTranscript = document.getElementById('copyTranscript');
    const clearHistory = document.getElementById('clearHistory');
    const exportHistory = document.getElementById('exportHistory');
    const transcriptArea = document.getElementById('transcript');
    const translateInput = document.getElementById('translateInput');
    const translateText = document.getElementById('translateText');
    const translationOutput = document.getElementById('translationOutput');
    const languageSelect = document.getElementById('languageSelect');
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    const historyList = document.getElementById('historyList');

    // Configuração da API de Reconhecimento de Fala
    let recognition = null;
    if ('webkitSpeechRecognition' in window) {
        // Inicializa o reconhecimento de fala
        recognition = new webkitSpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.interimResults = false;
        recognition.continuous = true;

        // Evento quando o reconhecimento de fala fornece resultados
        recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            transcriptArea.value = transcript;
            addToHistory(transcript);
        };

        // Evento em caso de erro no reconhecimento de fala
        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
        };
    } else {
        alert('Desculpe, sua navegação não suporta a API de reconhecimento de fala.');
    }

    // Inicia o reconhecimento de fala
    startButton.addEventListener('click', () => {
        if (recognition) {
            recognition.start();
            startButton.disabled = true;
            stopButton.disabled = false;
        }
    });

    // Para o reconhecimento de fala
    stopButton.addEventListener('click', () => {
        if (recognition) {
            recognition.stop();
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    });

    // Copia o texto da área de transcrição para a área de transferência
    copyTranscript.addEventListener('click', () => {
        transcriptArea.select();
        document.execCommand('copy');
    });

    // Limpa o histórico de transcrições
    clearHistory.addEventListener('click', () => {
        historyList.innerHTML = '';
    });

    // Exporta o histórico de transcrições como um arquivo de texto
    exportHistory.addEventListener('click', () => {
        const blob = new Blob([transcriptArea.value], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'transcriptions.txt';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });

    // Traduz o texto inserido
    translateText.addEventListener('click', () => {
        const text = translateInput.value;
        const targetLang = languageSelect.value;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|${targetLang}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.responseData && data.responseData.translatedText) {
                    translationOutput.value = data.responseData.translatedText;
                } else {
                    translationOutput.value = 'Erro na tradução.';
                }
            })
            .catch(error => {
                console.error('Erro ao traduzir:', error);
                translationOutput.value = 'Erro ao traduzir.';
            });
    });

    // Envia os dados do formulário de contato
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        fetch('/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            formResponse.textContent = 'Mensagem enviada com sucesso!';
            contactForm.reset();
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem:', error);
            formResponse.textContent = 'Ocorreu um erro ao enviar a mensagem.';
        });
    });

    // Adiciona uma transcrição ao histórico
    function addToHistory(transcript) {
        const li = document.createElement('li');
        li.textContent = transcript;
        historyList.appendChild(li);
    }
});
