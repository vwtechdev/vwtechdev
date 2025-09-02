// EmailJS Configuration

const EMAILJS_CONFIG = {
    PUBLIC_KEY: "HN1ki5--eeoUCBnGf", // Sua chave pública do EmailJS
    SERVICE_ID: "service_41r3u35", // ID do seu serviço de email
    TEMPLATE_ID: "template_flfpuqp" // ID do seu template de email
};

// Inicializa o EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

// Função para enviar email
function sendEmail(templateParams) {
    return emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams
    );
} 