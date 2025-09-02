# VWTech Dev - Site Oficial

Site oficial da VWTech Dev, empresa especializada em desenvolvimento web, aplicativos mobile e soluções tecnológicas em Canoinhas/SC.

## 🚀 Sobre o Projeto

Este site foi desenvolvido com tecnologias modernas e responsivas, oferecendo uma experiência de usuário excepcional em todos os dispositivos. Totalmente otimizado para performance, SEO e acessibilidade.

## ✨ Características

- **Design Responsivo**: Adapta-se perfeitamente a todos os tamanhos de tela
- **Performance Otimizada**: Carregamento rápido e eficiente
- **SEO Avançado**: Meta tags, structured data e sitemap otimizados
- **Acessibilidade**: Navegação por teclado, leitores de tela e ARIA labels
- **Navigation Drawer**: Menu mobile moderno que desliza da direita
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- **Integração WhatsApp**: Botão flutuante para contato direto
- **Modais Interativos**: Sistema de planos com animações fluidas
- **Lazy Loading**: Carregamento otimizado de imagens

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interativas e validações
- **Font Awesome 6.4.0**: Ícones vetoriais de alta qualidade
- **Google Fonts (Inter)**: Tipografia moderna e legível
- **AOS (Animate On Scroll)**: Animações baseadas em scroll
- **EmailJS**: Sistema de envio de emails via JavaScript

## 📱 Seções do Site

1. **Hero Section**: Apresentação principal com call-to-action
2. **Quem Somos**: História e fundadores da empresa
3. **Serviços**: Portfólio de soluções oferecidas
4. **Planos**: Opções de assinatura com preços
5. **Projetos**: Casos de sucesso e trabalhos realizados
6. **Depoimentos**: Avaliações de clientes (Google Reviews)
7. **Contato**: Formulário e informações de contato
8. **Footer**: Informações da empresa e links importantes

## 🎨 Design System

### Cores
- **Laranja Principal**: `#ca692d` - Cor de destaque e CTAs
- **Preto**: `#070808` - Fundo principal
- **Cinzas**: Variações para textos e elementos secundários

### Tipografia
- **Fonte Principal**: Inter (300, 400, 500, 600, 700, 800)
- **Hierarquia**: Títulos, subtítulos e corpo de texto bem definidos

### Componentes
- **Cards**: Design consistente com efeitos hover
- **Botões**: Estilos primário e secundário com animações
- **Formulários**: Campos estilizados com validação visual
- **Navegação**: Menu responsivo com dropdown mobile

## 📁 Estrutura do Projeto

```
vwtechdev/
├── index.html              # Página principal
├── src/
│   ├── css/
│   │   └── base.css       # Estilos principais
│   ├── js/
│   │   ├── index.js       # JavaScript principal
│   │   └── emailjs-config.js # Configuração EmailJS
│   └── img/               # Imagens e assets
├── README.md              # Documentação
└── LICENSE                # Licença do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/vwtechdev/vwtechdev.git
   cd vwtechdev
   ```

2. **Abra o arquivo**:
   - Abra `index.html` em qualquer navegador moderno
   - Ou use um servidor local:
     ```bash
     python3 -m http.server 8000
     # Acesse http://localhost:8000
     ```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Funcionalidades JavaScript

- **Menu Mobile**: Toggle responsivo para dispositivos móveis
- **Scroll Suave**: Navegação interna com animação
- **Lazy Loading**: Carregamento otimizado de imagens
- **Validação de Formulário**: Verificação em tempo real
- **Integração EmailJS**: Envio automático de mensagens
- **Botão WhatsApp**: Redirecionamento direto para contato
- **Back to Top**: Navegação rápida para o topo da página

## 📧 Configuração EmailJS

Para configurar o sistema de envio de emails:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Atualize as configurações em `src/js/emailjs-config.js`

## 🎯 SEO e Performance

- **Meta Tags**: Título, descrição e palavras-chave otimizados
- **Estrutura Semântica**: HTML5 com tags semânticas
- **Imagens Otimizadas**: Lazy loading e compressão
- **CSS Minificado**: Estilos otimizados para produção
- **Google Analytics**: Rastreamento de visitantes

## 🌐 Hospedagem

O site está configurado para ser hospedado em qualquer serviço de hospedagem estática:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Qualquer servidor web

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Vinicius Vieira** - Fundador e Desenvolvedor
- **Wellinton Vieira** - Co-fundador e Desenvolvedor

## 📞 Contato

- **Email**: vwtechdev@gmail.com
- **WhatsApp**: +55 47 99289-3609
- **Endereço**: Estrada Dona Francisca, 988 - Canoinhas/SC
- **Website**: [vwtechdev.com.br](https://vwtechdev.com.br)

## 🔄 Histórico de Versões

### v3.0.0 (Atual - Janeiro 2025)
- ✅ **Navigation Drawer**: Menu mobile moderno que desliza da direita
- ✅ **Botão Hambúrguer Animado**: Transformação suave para X
- ✅ **Structured Data**: Schema.org para melhor SEO
- ✅ **Responsividade Avançada**: Otimizações para todos os dispositivos
- ✅ **Modais Otimizados**: Sistema de planos com melhor UX
- ✅ **Performance**: Remoção de console.log e otimizações
- ✅ **Acessibilidade**: Melhorias em ARIA labels e navegação
- ✅ **SEO**: Sitemap e robots.txt atualizados

### v2.0.0
- ✅ Remoção completa do TailwindCSS
- ✅ Recriação com CSS puro e moderno
- ✅ Implementação da fonte Inter
- ✅ Atualização para Font Awesome 6.4.0
- ✅ Melhorias na responsividade
- ✅ Otimização de performance

### v1.0.0
- ✅ Site inicial com TailwindCSS
- ✅ Funcionalidades básicas
- ✅ Design responsivo

---

**VWTech Dev** - Transformando ideias em soluções digitais de alto impacto! 🚀 