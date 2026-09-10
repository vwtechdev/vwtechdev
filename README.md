# VWTech Dev | Soluções em Tecnologia

Site oficial da VWTech Dev, empresa de tecnologia em Canoinhas/SC. Soluções completas para pessoas e empresas: desenvolvimento web, aplicativos mobile, PCs de alta performance, manutenção de equipamentos, suporte técnico e atendimento local e remoto.

## Sobre o Projeto

Este site foi desenvolvido com tecnologias modernas e responsivas, oferecendo uma experiência de usuário excepcional em todos os dispositivos. Totalmente otimizado para performance, SEO e acessibilidade.

## Características

- **Design Responsivo**: Adapta-se perfeitamente a todos os tamanhos de tela
- **Performance Otimizada**: Carregamento rápido e eficiente
- **SEO Avançado**: Meta tags, JSON-LD structured data e sitemap otimizados
- **Acessibilidade**: Navegação por teclado, leitores de tela e ARIA labels
- **Internacionalização (i18n)**: Suporte a pt-BR, en-US e es-ES com persistência local
- **Navigation Drawer**: Menu mobile moderno que desliza da direita
- **Animações Suaves**: Transições e efeitos visuais com AOS + CSS
- **Integração WhatsApp**: Formulário de contato redireciona para WhatsApp
- **Modais de Planos**: Sistema interativo com 6 categorias de serviços e preços
- **Galeria de Projetos**: Lightbox com setas, teclado, contador e miniaturas
- **PWA**: Instalável como aplicativo
- **Lazy Loading**: Carregamento otimizado de imagens e widgets terceiros

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos com variáveis CSS, Flexbox e Grid
- **JavaScript ES6+**: Vanilla, sem dependências de framework
- **Font Awesome 6.4.0**: Ícones vetoriais
- **Google Fonts (Inter)**: Tipografia moderna
- **AOS (Animate On Scroll)**: Animações baseadas em scroll
- **Schema.org (JSON-LD)**: Dados estruturados para ranqueamento local
- **Google Analytics 4**: Monitoramento de tráfego e eventos

## Seções do Site

1. **Hero Section**: Slogan "Soluções em Tecnologia" com 4 diferenciais e call-to-action
2. **Quem Somos**: História, missão e equipe de fundadores
3. **Serviços**: 6 categorias (Web, Mobile, PC Gamer, Manutenção, Suporte Técnico, Atendimento Presencial)
4. **Planos**: Modal com planos detalhados e preços para cada serviço
5. **Projetos**: 4 projetos ordenados por recência (Magno Figures, Nations Flow, Alpha Automation, Delta Monitor) com galeria de imagens por projeto
6. **Depoimentos**: Google Reviews via Elfsight (lazy load)
7. **Contato**: Formulário com redirecionamento para WhatsApp + informações de contato

## Design System

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
- **Navegação**: Menu responsivo com dropdown de idiomas

## Estrutura do Projeto

```
vwtechdev/
├── index.html              # Página principal (SPA)
├── src/
│   ├── css/
│   │   └── base.css       # Estilos principais
│   ├── js/
│   │   ├── index.js       # JavaScript principal
│   │   └── i18n.js        # Internacionalização (pt-BR, en-US, es-ES)
│   └── img/               # Imagens e assets
│       ├── projects/      # Pastas 01, 02... (main.webp + extras por projeto)
│       └── services/      # Imagens dos serviços
├── robots.txt              # Regras de rastreamento para buscadores e IA
├── sitemap.xml             # Mapa do site para indexação
├── manifest.json           # PWA Manifest (instalação como app)
├── CNAME                   # Domínio customizado GitHub Pages
├── README.md              # Documentação
└── LICENSE                # Licença do projeto
```

### robots.txt

Controla o comportamento dos crawlers de buscadores e IA:

- **User-agent: `*`** — Permite rastreamento total da raiz; bloqueia `/admin/`, `/private/`, `/temp/` e `/backup/`
- **IA / LLM Crawlers** — Permite explicitamente `GPTBot`, `Google-Extended`, `Claude-Web`, `CCBot` e `PerplexityBot`, com as mesmas restrições de diretórios
- **Sitemap** — Aponta para `https://vwtechdev.com.br/sitemap.xml`
- **Crawl-delay** — 1 segundo entre requisições

### sitemap.xml

- URL raiz com prioridade 1.0 e atualização semanal
- Deve ser mantido com `lastmod` atualizado sempre que o conteúdo for alterado

### manifest.json

Configura o site como Progressive Web App (PWA):

- **Display**: `standalone` — abre sem a barra do navegador
- **Orientação**: `any` — funciona em portrait e landscape
- **Ícones**: múltiplos tamanhos (48px a 512px)
- **Shortcuts**: acesso rápido a Serviços e Contato
- **Edge Side Panel**: painel lateral com 400px de largura no Edge

## Como Executar

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

## Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## Funcionalidades JavaScript

- **Menu Mobile**: Toggle responsivo com scroll lock
- **Scroll Suave**: Navegação interna com animação
- **Lazy Loading**: Carregamento otimizado de imagens e widgets via IntersectionObserver
- **Galeria de Projetos**: Preview com setas, teclado, swipe, contador e miniaturas
- **Formulário de Contato**: Validação de campos e e-mail, redirecionamento para WhatsApp
- **Máscara de Telefone**: Formatação automática (XX) XXXXX-XXXX com preservação do cursor
- **WhatsApp Flutuante**: Botão com animação de pulse
- **Back to Top**: Navegação rápida para o topo
- **Notificações**: Feedback visual com auto-dismiss de 6s e escape de HTML
- **Throttle RAF**: Eventos de scroll otimizados com requestAnimationFrame
- **Two-phase Init**: Critical no DOMContentLoaded, deferred no requestIdleCallback

## SEO e Performance

- **Meta Tags**: Título, descrição, Open Graph e Twitter Cards otimizados
- **JSON-LD**: LocalBusiness e WebSite com horários, redes sociais e serviços
- **robots.txt**: Regras para buscadores e crawlers de IA com Disallow por crawler
- **sitemap.xml**: Mapa do site para indexação
- **manifest.json**: PWA configurado com shortcuts e edge side panel
- **Imagens Otimizadas**: Lazy loading, compressão WebP e dimensões explícitas
- **Fontes Não-bloqueantes**: Carregamento com media="print" + onload
- **Preconnect**: Redução de latência para CDNs externas
- **Google Analytics 4**: Rastreamento de visitantes

## Hospedagem

Publicado via **GitHub Pages** com domínio próprio (`vwtechdev.com.br`). Compatível com qualquer servidor de hospedagem estática.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Equipe

- **Vinicius Vieira** - Fundador e Desenvolvedor
- **Wellinton Vieira** - Co-fundador e Desenvolvedor

## Contato

- **Email**: vwtechdev@gmail.com
- **WhatsApp**: +5547992893609
- **Endereço**: R. Joaquim Vieira de Lima, 1100, Campo d' Água Verde, Canoinhas-SC 89466-324
- **Website**: [vwtechdev.com.br](https://vwtechdev.com.br)

**VWTech Dev** - Soluções em Tecnologia
