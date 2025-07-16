# 🚀 VWTech Dev - Site

Site moderno e responsivo para a VWTech Dev, empresa especializada em desenvolvimento web, sistemas e soluções tecnológicas.

![VWTech Dev](src/img/vwtechdev-github.png)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O VWTech Dev é um site moderno desenvolvido com foco em experiência do usuário e design responsivo. O projeto apresenta os serviços da empresa de forma profissional e atrativa, incluindo:

- **Desenvolvimento Web** - Sites e aplicações responsivas
- **Aplicativos Mobile** - Apps nativos para Android
- **Suporte Técnico** - Remoto e presencial

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos customizados
- **JavaScript** - Interatividade e animações
- **Tailwind CSS** - Framework CSS utilitário
- **Bootstrap 5.3.0** - Componentes e grid system
- **Font Awesome 6.4.0** - Ícones
- **AOS (Animate On Scroll)** - Animações de scroll

### Integrações
- **EmailJS** - Envio de emails via formulário
- **Elfsight** - Widget de Google Reviews
- **WhatsApp API** - Botão de contato direto

## ✨ Funcionalidades

### 🎨 Design & UX
- ✅ **Tema escuro** moderno e profissional
- ✅ **Layout responsivo** para todos os dispositivos
- ✅ **Navegação intuitiva** com scroll suave
- ✅ **Hover effects** interativos

### 🖼️ Recursos Visuais
- ✅ **Animação pulse** nos botões de destaque (WhatsApp e “Conheça nossos planos”)
- ✅ **SVG animado** na hero section

### 📧 Formulário de Contato
- ✅ **Validação em tempo real**
- ✅ **Integração com EmailJS**
- ✅ **Notificações visuais**
- ✅ **Estado de loading**
- ✅ **Reset automático**

### 📱 Recursos Mobile
- ✅ **Menu hambúrguer** responsivo
- ✅ **Botão WhatsApp** flutuante
- ✅ **Botão "Voltar ao topo"**
- ✅ **Touch-friendly** interface

### 🔗 Integrações
- ✅ **WhatsApp Business** - Contato direto
- ✅ **Google Reviews** - Widget de avaliações
- ✅ **Redes Sociais** - Facebook, Instagram e GitHub
- ✅ **EmailJS** - Envio de emails

## 📁 Estrutura do Projeto

```
vwtechdev/
├── index.html                 # Página principal
├── README.md                  # Documentação
├── src/
│   ├── css/
│   │   └── base.css           # Estilos customizados
│   ├── js/
│   │   ├── index.js           # JavaScript principal
│   │   └── emailjs-config.js  # Configuração EmailJS
│   └── img/
│       ├── logo.png           # Logo da empresa
│       ├── background.png     # Imagem de fundo
│       ├── code-apps.svg      # SVG animado na hero section
│       ├── project-01.png     # Projeto Delta
```

## 🚀 Instalação

### Pré-requisitos
- Navegador web moderno
- Servidor web (opcional para desenvolvimento local)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/vwtechdev.git
cd vwtechdev
```

2. **Abra o projeto**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar servidor local (recomendado)
python -m http.server 8000
# ou
npx serve .
```

3. **Acesse o site**
```
http://localhost:8000
```

## ⚙️ Configuração

### EmailJS Setup

1. **Criar conta no EmailJS**
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita

2. **Configurar Email Service**
   - Dashboard → Email Services → Add New Service
   - Escolha seu provedor (Gmail, Outlook, etc.)
   - Anote o **Service ID**

3. **Criar Email Template**
   - Dashboard → Email Templates → Create New Template
   - Use o template fornecido
   - Anote o **Template ID**

4. **Obter Public Key**
   - Dashboard → Account → API Keys
   - Copie sua **Public Key**

5. **Atualizar Configuração**
   ```javascript
   // src/js/emailjs-config.js
   const EMAILJS_CONFIG = {
       PUBLIC_KEY: "sua_public_key",
       SERVICE_ID: "seu_service_id", 
       TEMPLATE_ID: "seu_template_id"
   };
   ```

### Personalização

#### Cores
```css
/* src/css/base.css */
.bg-custom-black { background-color: #070808; }
.text-custom-orange { color: #ca692d; }
.bg-custom-orange { background-color: #ca692d; }
```

#### Informações de Contato
```html
<!-- index.html -->
<p class="text-gray-300">+55 47 99289-3609</p>
<p class="text-gray-300">vieirateam.contact@gmail.com</p>
<p class="text-gray-300">Estrada Dona Francisca, 988<br>Canoinhas/SC</p>
```

## 📖 Uso

### Navegação
- **Header:** Menu de navegação com hover effects
- **Hero Section:** Apresentação principal da empresa
- **Serviços:** Cards com os serviços oferecidos
- **Planos:** Tabela de preços e recursos
- **Projetos:** Portfolio com overlay
- **Depoimentos:** Widget de Google Reviews
- **Contato:** Formulário funcional

### Formulário de Contato
1. Preencha os campos obrigatórios
2. Clique em "Enviar Mensagem"
3. Aguarde a confirmação
4. Email será enviado automaticamente

### Botões Flutuantes
- **WhatsApp:** Contato direto via WhatsApp (com animação pulse)
- **Voltar ao topo:** Navegação rápida

## 🤝 Contribuição

1. **Fork o projeto**
2. **Crie uma branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código
- Use **HTML5 semântico**
- Mantenha **CSS organizado** em arquivos separados
- Use **JavaScript modular**
- Siga as **convenções de nomenclatura**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**VWTech Dev**
- 📧 Email: vieirateam.contact@gmail.com
- 📱 WhatsApp: +55 47 99289-3609
- 📍 Endereço: Estrada Dona Francisca, 988 - Canoinhas/SC
- 🌐 Site: [vwtechdev.com.br](https://vwtechdev.com.br)

### Redes Sociais
- [Facebook](https://www.facebook.com/vwtechdev/)
- [Instagram](https://www.instagram.com/vwtechdev/)
- [GitHub](https://github.com/vwtechdev)

## 🙏 Agradecimentos

- **EmailJS** - Serviço de envio de emails
- **Elfsight** - Widget de Google Reviews
- **Font Awesome** - Ícones
- **Tailwind CSS** - Framework CSS
- **AOS** - Animações de scroll

---

**Desenvolvido com ❤️ pela VWTech Dev**

*Transformando ideias em código desde 2019* 