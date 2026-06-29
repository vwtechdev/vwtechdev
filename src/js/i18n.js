// VWTech Dev - i18n (Internacionalização)
// Abordagem vanilla: data-i18n* no HTML + dicionário de traduções.
// Carregar com defer ANTES de index.js (ordem de execução garantida).

var i18n = {
    DEFAULT_LANG: 'pt-BR',
    SUPPORTED: ['pt-BR', 'en-US', 'es-ES'],
    STORAGE_KEY: 'vwtech-lang',
    WHATSAPP_BASE: 'https://wa.me/5547992893609?text=',
    currentLang: 'pt-BR',

    translations: {
        'pt-BR': {
            nav: {
                home: 'Início',
                about: 'Quem Somos',
                services: 'Serviços',
                projects: 'Projetos',
                contact: 'Contato',
                logoAria: 'Voltar ao início',
                menuToggleAria: 'Abrir menu de navegação',
                socialAria: 'Redes sociais',
                langToggleAria: 'Selecionar idioma',
                langDropdownAria: 'Idiomas disponíveis',
                facebookAria: 'Facebook',
                instagramAria: 'Instagram',
                githubAria: 'GitHub',
                mobileMenuAria: 'Menu mobile'
            },
            hero: {
                sectionAria: 'Seção principal',
                title: '<span class="text-highlight">Tecnologia</span> para Empresas',
                description: 'Soluções completas em tecnologia para o seu negócio. Infraestrutura, suporte e sistemas com atendimento local e remoto.',
                featuresAria: 'Nossos diferenciais',
                feature1: 'Soluções completas em tecnologia',
                feature2: 'Infraestrutura, suporte e sistemas',
                feature3: 'Atendimento local e remoto',
                btnPrimaryAria: 'Falar no WhatsApp',
                btnPrimary: 'Solicitar Orçamento Grátis',
                btnPrimaryWhatsapp: 'Olá! Gostaria de solicitar um orçamento para meu projeto.',
                btnSecondaryAria: 'Conhecer nossos serviços',
                btnSecondary: 'Ver Serviços',
                btnOutlineAria: 'Entrar em contato',
                btnOutline: 'Contato'
            },
            about: {
                title: 'Quem <span class="text-highlight">Somos</span>',
                subtitle: 'Conheça nossa história e a equipe que faz a VWTech Dev acontecer.',
                historyTitle: 'Nossa História',
                historyText: 'Fundada em 2019 na cidade de Canoinhas-SC, Brasil, a VWTech Dev nasceu da visão dos irmãos Vinicius Vieira (fundador) e Wellinton Vieira (co-fundador). Inicialmente conhecida como Vieirateam, a empresa busca aprimorar o desenvolvimento de sistemas web, aplicativos móveis com soluções tecnológicas inovadoras.',
                missionTitle: 'Nossa Missão',
                missionText: 'Oferecer soluções completas de TI para empresas, combinando infraestrutura, suporte e sistemas com atendimento personalizado e excelência técnica. Com um compromisso constante com a qualidade e a inovação, buscamos entregar serviços que não apenas atendam, mas superem as expectativas dos nossos clientes.',
                teamTitle: 'Nossa Equipe',
                founderRole: 'Fundador',
                cofounderRole: 'Co-fundador',
                githubViniciusTitle: 'GitHub Vinicius',
                githubWellintonTitle: 'GitHub Wellinton',
                githubText: 'Ver GitHub'
            },
            services: {
                title: 'Nossos <span class="text-highlight">Serviços</span>',
                subtitle: 'Oferecemos uma ampla gama de serviços para atender às necessidades do seu negócio.',
                button: 'Ver Planos',
                web: { title: 'Desenvolvimento Web', description: 'Criamos sites e aplicações web responsivas, otimizadas para performance e conversão, utilizando as melhores tecnologias do mercado.' },
                mobile: { title: 'Aplicativos Mobile', description: 'Desenvolvemos aplicativos nativos e híbridos para Android, com foco em experiência do usuário e funcionalidades exclusivas.' },
                gamer: { title: 'PC Gamer', description: 'Montagem de PC Gamer com peças de qualidade e preço acessível. Orçamento sem compromisso.' },
                maintenance: { title: "PC's e Celulares", description: 'Manutenção de computadores e celulares, troca de tela, bateria, carregador, etc.' },
                support: { title: 'Suporte Técnico', description: 'Suporte remoto rápido e eficiente! Chame no WhatsApp e resolva tudo por AnyDesk.' },
                onsite: { title: 'Atendimento Presencial', description: 'Atendimento presencial para o Planalto Norte Catarinense. Faça seu agendamento agora mesmo!' }
            },
            projects: {
                title: 'Nossos <span class="text-highlight">Projetos</span>',
                subtitle: 'Alguns dos projetos que desenvolvemos para nossos clientes satisfeitos.',
                button: 'Saiba Mais',
                p1: { title: 'Delta Monitor', description: 'Sistema Web de Geração de Recibos Automáticos para empresa Delta Monitoramento Canoinhas-SC' },
                p2: { title: 'Alpha Automation and Robotics', description: 'Landing page moderna e responsiva para a Alpha Automation and Robotics, empresa especializada em automação industrial e robótica.' },
                p3: { title: 'Nations Flow', description: 'Sistema Web de Controle Financeiro para a Igreja Pentecostal Nações para Cristo.' }
            },
            testimonials: {
                title: 'O que dizem <span class="text-highlight">nossos clientes</span>'
            },
            contact: {
                title: 'Entre em <span class="text-highlight">Contato</span>',
                subtitle: 'Tem um projeto em mente? Preencha o formulário abaixo e nossa equipe entrará em contato em breve.',
                form: {
                    nameLabel: 'Nome Completo',
                    namePlaceholder: 'Seu nome',
                    emailLabel: 'E-mail',
                    emailPlaceholder: 'seu@email.com',
                    phoneLabel: 'Telefone',
                    phonePlaceholder: '(00) 00000-0000',
                    messageLabel: 'Mensagem',
                    messagePlaceholder: 'Descreva seu projeto ou dúvida',
                    button: 'Enviar Mensagem',
                    phoneLabelTpl: 'Telefone: {phone}.',
                    whatsappTemplate: 'Olá! Me chamo {name}.\nE-mail: {email}.\n{phone}\n\n{message}'
                },
                info: {
                    title: 'Informações de Contato',
                    addressLabel: 'Endereço',
                    addressText: "R. Joaquim Vieira de Lima, 1100<br>Campo d' Água Verde, Canoinhas-SC, 89466-324",
                    phoneLabel: 'Telefone',
                    phoneText: '(47) 99289-3609',
                    emailLabel: 'E-mail',
                    emailText: 'vwtechdev@gmail.com',
                    hoursLabel: 'Horário de Atendimento',
                    hoursText: 'Segunda a Sexta: 9h às 18h<br>Sábado: 9h às 13h'
                },
                social: { title: 'Siga-nos nas redes sociais' }
            },
            footer: {
                rights: 'Todos os direitos reservados.'
            },
            floating: {
                backToTopAria: 'Voltar ao topo',
                whatsappAria: 'Conversar pelo WhatsApp',
                whatsappMsg: 'Olá! Gostaria de conversar sobre seus serviços.'
            },
            modal: {
                serviceTitle: 'Serviço'
            },
            plans: {
                web: {
                    basic: {
                        name: 'Plano Basic', price: 'R$ 149,90/mês',
                        features: ['Landing Page', 'Domínio Grátis', 'Hospedagem Grátis 1GB', 'Suporte por WhatsApp', '1 Revisão Mensal'],
                        button: 'Assinar Plano Basic', whatsapp: 'Olá! Gostaria de assinar o Plano Basic de Desenvolvimento Web por R$ 129,90/mês.'
                    },
                    silver: {
                        name: 'Plano Silver', price: 'R$ 249,90/mês',
                        features: ['Sistema Web Personalizado', 'Domínio Grátis', 'Hospedagem Grátis 10GB', 'Suporte por WhatsApp', '2 Revisões Mensais'],
                        button: 'Assinar Plano Silver', whatsapp: 'Olá! Gostaria de assinar o Plano Silver de Desenvolvimento Web por R$ 229,90/mês.'
                    },
                    gold: {
                        name: 'Plano Gold', price: 'R$ 349,90/mês',
                        features: ['Sistema Web Personalizado', 'Domínio Grátis', 'Hospedagem Grátis 30GB', 'Backup Automático Grátis', 'Suporte por WhatsApp 24/7', 'Revisões Semanais'],
                        button: 'Assinar Plano Gold', whatsapp: 'Olá! Gostaria de assinar o Plano Gold de Desenvolvimento Web por R$ 329,90/mês.'
                    }
                },
                mobile: {
                    android: {
                        name: 'Plano Android', price: 'R$ 349,90/mês',
                        features: ['Desenvolvimento de Aplicativo Mobile para Android', 'Publicação Gratuita na Google Play Store', 'Hospedagem Grátis (10 GB)', 'Domínio Grátis para Landing Page', 'Suporte via WhatsApp', '2 Revisões Mensais'],
                        button: 'Assinar Plano Android', whatsapp: 'Olá! Gostaria de assinar o Plano Android de Aplicativos Mobile por R$ 299,90/mês.'
                    },
                    ios: {
                        name: 'Plano iOS', price: 'R$ 549,90/mês',
                        features: ['Desenvolvimento de Aplicativo Mobile para iOS', 'Publicação Gratuita na Apple App Store', 'Hospedagem Grátis (10 GB)', 'Domínio Grátis para Landing Page', 'Suporte via WhatsApp', '2 Revisões Mensais'],
                        button: 'Assinar Plano iOS', whatsapp: 'Olá! Gostaria de assinar o Plano iOS de Aplicativos Mobile por R$ 499,90/mês.'
                    }
                },
                gamer: {
                    upgrade: {
                        name: 'Upgrade de Peças', price: 'R$ 149,90',
                        features: ['Análise de compatibilidade das peças', 'Instalação profissional e segura', 'Testes de performance e estabilidade', 'Configuração da BIOS otimizada', 'Garantia de funcionamento'],
                        button: 'Contratar Upgrade de Peças', whatsapp: 'Olá! Gostaria de contratar o serviço de Upgrade de Peças PC Gamer por R$ 229,90.'
                    },
                    cleaning: {
                        name: 'Limpeza Técnica', price: 'R$ 249,90',
                        features: ['Limpeza completa de poeira', 'Troca de pasta térmica', 'Organização e fixação de cabos', 'Verificação de temperatura', 'Otimização do sistema', 'Relatório de saúde dos componentes'],
                        button: 'Contratar Limpeza Técnica', whatsapp: 'Olá! Gostaria de contratar o serviço de Limpeza Técnica PC Gamer por R$ 329,90.'
                    },
                    assembly: {
                        name: 'Montagem Completa', price: 'R$ 349,90',
                        features: ['Seleção de peças compatíveis', 'Montagem cuidadosa e profissional', 'Instalação do sistema operacional', 'Configuração de drivers', 'Testes de estabilidade', 'Benchmark de performance', 'Garantia de funcionamento'],
                        button: 'Contratar Montagem Completa', whatsapp: 'Olá! Gostaria de contratar o serviço de Montagem Completa PC Gamer por R$ 429,90.'
                    }
                },
                maintenance: {
                    computer: {
                        name: 'Computador', price: 'Consultar',
                        features: ['Limpeza completa interna e externa', 'Troca de pasta térmica', 'Verificação e otimização do sistema', 'Diagnóstico de hardware', 'Remoção de vírus e malwares', 'Backup de dados importantes', 'Atualização de drivers'],
                        button: 'Solicitar Orçamento', whatsapp: 'Olá! Gostaria de fazer um orçamento para manutenção de Computador.'
                    },
                    notebook: {
                        name: 'Notebook', price: 'Consultar',
                        features: ['Limpeza completa interna e externa', 'Troca de pasta térmica', 'Verificação e otimização do sistema', 'Diagnóstico de hardware', 'Remoção de vírus e malwares', 'Backup de dados importantes', 'Verificação de bateria e carregador', 'Atualização de drivers'],
                        button: 'Solicitar Orçamento', whatsapp: 'Olá! Gostaria de fazer um orçamento para manutenção de Notebook.'
                    },
                    phone: {
                        name: 'Celular', price: 'Consultar',
                        features: ['Limpeza completa interna e externa', 'Troca de tela quebrada', 'Troca de bateria', 'Reparo de conectores (carregador, fone)', 'Desbloqueio de tela', 'Backup de dados (fotos, contatos, apps)', 'Remoção de vírus e malwares', 'Atualização do sistema operacional'],
                        button: 'Solicitar Orçamento', whatsapp: 'Olá! Gostaria de fazer um orçamento para manutenção de Celular.'
                    }
                },
                support: {
                    basic: {
                        name: 'Plano Basic', price: 'R$ 149,90/mês',
                        features: ['Suporte remoto via AnyDesk', 'Atendimento via WhatsApp', 'Até 3 chamados por mês', 'Horário comercial: 09h–18h', 'Suporte rápido para problemas simples'],
                        button: 'Assinar Plano Basic', whatsapp: 'Olá! Gostaria de assinar o Plano Basic de Suporte Técnico por R$ 129,90/mês.'
                    },
                    silver: {
                        name: 'Plano Silver', price: 'R$ 249,90/mês',
                        features: ['Suporte remoto via AnyDesk', 'Atendimento via WhatsApp', 'Até 5 chamados por mês', 'Horário comercial estendido: 08h–20h', 'Prioridade média para atendimento', 'Assistência em configurações e pequenas manutenções remotas'],
                        button: 'Assinar Plano Silver', whatsapp: 'Olá! Gostaria de assinar o Plano Silver de Suporte Técnico por R$ 229,90/mês.'
                    },
                    gold: {
                        name: 'Plano Gold', price: 'R$ 349,90/mês',
                        features: ['Suporte remoto via AnyDesk', 'Atendimento via WhatsApp 24/7', 'Chamados ilimitados', 'Backup Remoto 100GB', 'Prioridade máxima no atendimento', 'Assistência completa: configurações, atualização e diagnóstico avançado'],
                        button: 'Assinar Plano Gold', whatsapp: 'Olá! Gostaria de assinar o Plano Gold de Suporte Técnico por R$ 329,90/mês.'
                    }
                },
                onsite: {
                    basic: {
                        name: 'Plano Basic', price: 'R$ 249,90/mês',
                        features: ['Atendimento presencial em residência ou escritório pequeno', 'Suporte básico para computadores e periféricos', '1 visita mensal sob agendamento', 'Horário comercial: 09h–18h', 'Solução rápida para problemas simples'],
                        button: 'Assinar Plano Basic', whatsapp: 'Olá! Gostaria de assinar o Plano Basic de Atendimento Presencial por R$ 249,90/mês.'
                    },
                    silver: {
                        name: 'Plano Silver', price: 'R$ 349,90/mês',
                        features: ['Atendimento presencial em residência ou empresa', 'Suporte técnico completo para computadores, redes e periféricos', '2 visitas mensais sob agendamento', 'Horário comercial estendido: 08h–20h', 'Prioridade média no atendimento', 'Assistência em manutenção, configuração e atualização de sistemas'],
                        button: 'Assinar Plano Silver', whatsapp: 'Olá! Gostaria de assinar o Plano Silver de Atendimento Presencial por R$ 749,90/mês.'
                    },
                    gold: {
                        name: 'Plano Gold', price: 'R$ 549,90/mês',
                        features: ['Atendimento presencial 24/7 para empresas', 'Suporte técnico completo: computadores, redes, servidores e periféricos', 'Visitas Semanais sob agendamento', 'Prioridade máxima no atendimento', 'Diagnóstico, manutenção e atualização avançada de sistemas', 'Consultoria para melhorias de infraestrutura de TI'],
                        button: 'Assinar Plano Gold', whatsapp: 'Olá! Gostaria de assinar o Plano Gold de Atendimento Presencial por R$ 1.249,90/mês.'
                    }
                }
            },
            notify: {
                modalNotFound: 'Erro: Modal não encontrado. Tente recarregar a página.',
                plansNotFound: 'Erro: Planos não encontrados para este serviço.',
                fillRequired: 'Por favor, preencha todos os campos obrigatórios.',
                whatsappError: 'Erro ao redirecionar para o WhatsApp. Tente novamente.',
                loadError: 'Erro ao carregar algumas funcionalidades. Recarregue a página se necessário.',
                planInquiryTpl: 'Olá! Gostaria de assinar o plano {plan}.',
                plansGeneral: 'Olá! Gostaria de conhecer seus planos.'
            },
            meta: {
                title: 'VWTech Dev | TI para Empresas | Canoinhas-SC, Brasil',
                description: 'VWTech Dev: TI para Empresas em Canoinhas/SC. Soluções completas em tecnologia, infraestrutura, suporte e sistemas com atendimento local e remoto.',
                keywords: 'desenvolvimento web Canoinhas, aplicativos mobile SC, sites responsivos, sistemas web personalizados, suporte técnico, manutenção computador, notebook, celular, Canoinhas SC, Santa Catarina, VWTech Dev, programação, tecnologia',
                ogTitle: 'VWTech Dev | TI para Empresas | Canoinhas-SC, Brasil',
                ogDescription: 'VWTech Dev: TI para Empresas em Canoinhas/SC. Soluções completas em tecnologia, infraestrutura, suporte e sistemas com atendimento local e remoto.'
            }
        },

        'en-US': {
            nav: {
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                projects: 'Projects',
                contact: 'Contact',
                logoAria: 'Back to top',
                menuToggleAria: 'Open navigation menu',
                socialAria: 'Social media',
                langToggleAria: 'Select language',
                langDropdownAria: 'Available languages',
                facebookAria: 'Facebook',
                instagramAria: 'Instagram',
                githubAria: 'GitHub',
                mobileMenuAria: 'Mobile menu'
            },
            hero: {
                sectionAria: 'Main section',
                title: '<span class="text-highlight">Technology</span> for Businesses',
                description: 'Complete technology solutions for your business. Infrastructure, support and systems with local and remote service.',
                featuresAria: 'Our differentials',
                feature1: 'Complete technology solutions',
                feature2: 'Infrastructure, support and systems',
                feature3: 'Local and remote service',
                btnPrimaryAria: 'Chat on WhatsApp',
                btnPrimary: 'Request a Free Quote',
                btnPrimaryWhatsapp: 'Hello! I would like to request a quote for my project.',
                btnSecondaryAria: 'Learn about our services',
                btnSecondary: 'View Services',
                btnOutlineAria: 'Contact',
                btnOutline: 'Contact'
            },
            about: {
                title: 'About <span class="text-highlight">Us</span>',
                subtitle: 'Learn about our history and the team that makes VWTech Dev happen.',
                historyTitle: 'Our History',
                historyText: 'Founded in 2019 in the city of Canoinhas-SC, Brazil, VWTech Dev was born from the vision of the brothers Vinicius Vieira (founder) and Wellinton Vieira (co-founder). Initially known as Vieirateam, the company strives to improve the development of web systems, mobile apps with innovative technological solutions.',
                missionTitle: 'Our Mission',
                missionText: 'To provide complete IT solutions for businesses, combining infrastructure, support and systems with personalized service and technical excellence. With a constant commitment to quality and innovation, we aim to deliver services that not only meet but exceed our clients\' expectations.',
                teamTitle: 'Our Team',
                founderRole: 'Founder',
                cofounderRole: 'Co-founder',
                githubViniciusTitle: 'Vinicius on GitHub',
                githubWellintonTitle: 'Wellinton on GitHub',
                githubText: 'View GitHub'
            },
            services: {
                title: 'Our <span class="text-highlight">Services</span>',
                subtitle: 'We offer a wide range of services to meet your business needs.',
                button: 'View Plans',
                web: { title: 'Web Development', description: 'We create responsive websites and web applications, optimized for performance and conversion, using the best technologies on the market.' },
                mobile: { title: 'Mobile Apps', description: 'We develop native and hybrid apps for Android, focusing on user experience and exclusive features.' },
                gamer: { title: 'Gaming PC', description: 'Gaming PC assembly with quality parts at an affordable price. No-obligation quote.' },
                maintenance: { title: 'PCs & Phones', description: 'Computer and phone maintenance, screen, battery and charger replacement, etc.' },
                support: { title: 'Technical Support', description: 'Fast and efficient remote support! Reach out on WhatsApp and get everything sorted via AnyDesk.' },
                onsite: { title: 'On-Site Service', description: 'On-site service for the Planalto Norte Catarinense region. Schedule your appointment now!' }
            },
            projects: {
                title: 'Our <span class="text-highlight">Projects</span>',
                subtitle: 'Some of the projects we have developed for our satisfied clients.',
                button: 'Learn More',
                p1: { title: 'Delta Monitor', description: 'Web system for Automatic Receipt Generation for Delta Monitoramento company in Canoinhas-SC' },
                p2: { title: 'Alpha Automation and Robotics', description: 'Modern and responsive landing page for Alpha Automation and Robotics, a company specialized in industrial automation and robotics.' },
                p3: { title: 'Nations Flow', description: 'Web system for Financial Control for the Pentecostal Church Nações para Cristo.' }
            },
            testimonials: {
                title: 'What <span class="text-highlight">our clients</span> say'
            },
            contact: {
                title: 'Contact <span class="text-highlight">US</span>',
                subtitle: 'Have a project in mind? Fill out the form below and our team will get back to you soon.',
                form: {
                    nameLabel: 'Full Name',
                    namePlaceholder: 'Your name',
                    emailLabel: 'Email',
                    emailPlaceholder: 'your@email.com',
                    phoneLabel: 'Phone',
                    phonePlaceholder: '(00) 00000-0000',
                    messageLabel: 'Message',
                    messagePlaceholder: 'Describe your project or question',
                    button: 'Send Message',
                    phoneLabelTpl: 'Phone: {phone}.',
                    whatsappTemplate: 'Hello! My name is {name}.\nEmail: {email}.\n{phone}\n\n{message}'
                },
                info: {
                    title: 'Contact Information',
                    addressLabel: 'Address',
                    addressText: "R. Joaquim Vieira de Lima, 1100<br>Campo d' Água Verde, Canoinhas-SC, 89466-324",
                    phoneLabel: 'Phone',
                    phoneText: '(47) 99289-3609',
                    emailLabel: 'Email',
                    emailText: 'vwtechdev@gmail.com',
                    hoursLabel: 'Business Hours',
                    hoursText: 'Monday to Friday: 9am to 6pm<br>Saturday: 9am to 1pm'
                },
                social: { title: 'Follow us on social media' }
            },
            footer: {
                rights: 'All rights reserved.'
            },
            floating: {
                backToTopAria: 'Back to top',
                whatsappAria: 'Chat on WhatsApp',
                whatsappMsg: 'Hello! I would like to chat about your services.'
            },
            modal: {
                serviceTitle: 'Service'
            },
            plans: {
                web: {
                    basic: {
                        name: 'Basic Plan', price: 'R$ 149.90/mo',
                        features: ['Landing Page', 'Free Domain', 'Free Hosting 1GB', 'WhatsApp Support', '1 Monthly Review'],
                        button: 'Sign up for Basic Plan', whatsapp: 'Hello! I would like to sign up for the Basic Plan of Web Development for R$ 129.90/mo.'
                    },
                    silver: {
                        name: 'Silver Plan', price: 'R$ 249.90/mo',
                        features: ['Custom Web System', 'Free Domain', 'Free Hosting 10GB', 'WhatsApp Support', '2 Monthly Reviews'],
                        button: 'Sign up for Silver Plan', whatsapp: 'Hello! I would like to sign up for the Silver Plan of Web Development for R$ 229.90/mo.'
                    },
                    gold: {
                        name: 'Gold Plan', price: 'R$ 349.90/mo',
                        features: ['Custom Web System', 'Free Domain', 'Free Hosting 30GB', 'Free Automatic Backup', '24/7 WhatsApp Support', 'Weekly Reviews'],
                        button: 'Sign up for Gold Plan', whatsapp: 'Hello! I would like to sign up for the Gold Plan of Web Development for R$ 329.90/mo.'
                    }
                },
                mobile: {
                    android: {
                        name: 'Android Plan', price: 'R$ 349.90/mo',
                        features: ['Android Mobile App Development', 'Free Publication on Google Play Store', 'Free Hosting (10 GB)', 'Free Domain for Landing Page', 'WhatsApp Support', '2 Monthly Reviews'],
                        button: 'Sign up for Android Plan', whatsapp: 'Hello! I would like to sign up for the Android Plan of Mobile Apps for R$ 299.90/mo.'
                    },
                    ios: {
                        name: 'iOS Plan', price: 'R$ 549.90/mo',
                        features: ['iOS Mobile App Development', 'Free Publication on Apple App Store', 'Free Hosting (10 GB)', 'Free Domain for Landing Page', 'WhatsApp Support', '2 Monthly Reviews'],
                        button: 'Sign up for iOS Plan', whatsapp: 'Hello! I would like to sign up for the iOS Plan of Mobile Apps for R$ 499.90/mo.'
                    }
                },
                gamer: {
                    upgrade: {
                        name: 'Parts Upgrade', price: 'R$ 149.90',
                        features: ['Parts compatibility analysis', 'Professional and safe installation', 'Performance and stability tests', 'Optimized BIOS configuration', 'Operation warranty'],
                        button: 'Hire Parts Upgrade', whatsapp: 'Hello! I would like to hire the Parts Upgrade Gaming PC service for R$ 229.90.'
                    },
                    cleaning: {
                        name: 'Technical Cleaning', price: 'R$ 249.90',
                        features: ['Complete dust cleaning', 'Thermal paste replacement', 'Cable organization and securing', 'Temperature check', 'System optimization', 'Component health report'],
                        button: 'Hire Technical Cleaning', whatsapp: 'Hello! I would like to hire the Technical Cleaning Gaming PC service for R$ 329.90.'
                    },
                    assembly: {
                        name: 'Full Assembly', price: 'R$ 349.90',
                        features: ['Compatible parts selection', 'Careful and professional assembly', 'Operating system installation', 'Driver configuration', 'Stability tests', 'Performance benchmark', 'Operation warranty'],
                        button: 'Hire Full Assembly', whatsapp: 'Hello! I would like to hire the Full Assembly Gaming PC service for R$ 429.90.'
                    }
                },
                maintenance: {
                    computer: {
                        name: 'Computer', price: 'Quote',
                        features: ['Complete internal and external cleaning', 'Thermal paste replacement', 'System check and optimization', 'Hardware diagnostics', 'Virus and malware removal', 'Important data backup', 'Driver updates'],
                        button: 'Request a Quote', whatsapp: 'Hello! I would like to get a quote for Computer maintenance.'
                    },
                    notebook: {
                        name: 'Notebook', price: 'Quote',
                        features: ['Complete internal and external cleaning', 'Thermal paste replacement', 'System check and optimization', 'Hardware diagnostics', 'Virus and malware removal', 'Important data backup', 'Battery and charger check', 'Driver updates'],
                        button: 'Request a Quote', whatsapp: 'Hello! I would like to get a quote for Notebook maintenance.'
                    },
                    phone: {
                        name: 'Phone', price: 'Quote',
                        features: ['Complete internal and external cleaning', 'Broken screen replacement', 'Battery replacement', 'Connector repair (charger, headphones)', 'Screen unlock', 'Data backup (photos, contacts, apps)', 'Virus and malware removal', 'Operating system update'],
                        button: 'Request a Quote', whatsapp: 'Hello! I would like to get a quote for Phone maintenance.'
                    }
                },
                support: {
                    basic: {
                        name: 'Basic Plan', price: 'R$ 149.90/mo',
                        features: ['Remote support via AnyDesk', 'WhatsApp support', 'Up to 3 tickets per month', 'Business hours: 9am–6pm', 'Quick support for simple issues'],
                        button: 'Sign up for Basic Plan', whatsapp: 'Hello! I would like to sign up for the Basic Plan of Technical Support for R$ 129.90/mo.'
                    },
                    silver: {
                        name: 'Silver Plan', price: 'R$ 249.90/mo',
                        features: ['Remote support via AnyDesk', 'WhatsApp support', 'Up to 5 tickets per month', 'Extended business hours: 8am–8pm', 'Medium priority support', 'Assistance with settings and minor remote maintenance'],
                        button: 'Sign up for Silver Plan', whatsapp: 'Hello! I would like to sign up for the Silver Plan of Technical Support for R$ 229.90/mo.'
                    },
                    gold: {
                        name: 'Gold Plan', price: 'R$ 349.90/mo',
                        features: ['Remote support via AnyDesk', '24/7 WhatsApp support', 'Unlimited tickets', '100GB Remote Backup', 'Maximum priority support', 'Complete assistance: settings, updates and advanced diagnostics'],
                        button: 'Sign up for Gold Plan', whatsapp: 'Hello! I would like to sign up for the Gold Plan of Technical Support for R$ 329.90/mo.'
                    }
                },
                onsite: {
                    basic: {
                        name: 'Basic Plan', price: 'R$ 249.90/mo',
                        features: ['On-site service at home or small office', 'Basic support for computers and peripherals', '1 monthly visit by appointment', 'Business hours: 9am–6pm', 'Quick solution for simple issues'],
                        button: 'Sign up for Basic Plan', whatsapp: 'Hello! I would like to sign up for the Basic Plan of On-Site Service for R$ 249.90/mo.'
                    },
                    silver: {
                        name: 'Silver Plan', price: 'R$ 349.90/mo',
                        features: ['On-site service at home or business', 'Complete technical support for computers, networks and peripherals', '2 monthly visits by appointment', 'Extended business hours: 8am–8pm', 'Medium priority support', 'Assistance with maintenance, setup and system updates'],
                        button: 'Sign up for Silver Plan', whatsapp: 'Hello! I would like to sign up for the Silver Plan of On-Site Service for R$ 749.90/mo.'
                    },
                    gold: {
                        name: 'Gold Plan', price: 'R$ 549.90/mo',
                        features: ['24/7 on-site service for businesses', 'Complete technical support: computers, networks, servers and peripherals', 'Weekly visits by appointment', 'Maximum priority support', 'Advanced diagnostics, maintenance and system updates', 'Consulting for IT infrastructure improvements'],
                        button: 'Sign up for Gold Plan', whatsapp: 'Hello! I would like to sign up for the Gold Plan of On-Site Service for R$ 1,249.90/mo.'
                    }
                }
            },
            notify: {
                modalNotFound: 'Error: Modal not found. Try reloading the page.',
                plansNotFound: 'Error: Plans not found for this service.',
                fillRequired: 'Please fill in all required fields.',
                whatsappError: 'Error redirecting to WhatsApp. Please try again.',
                loadError: 'Error loading some features. Reload the page if necessary.',
                planInquiryTpl: 'Hello! I would like to sign up for the {plan} plan.',
                plansGeneral: 'Hello! I would like to learn about your plans.'
            },
            meta: {
                title: 'VWTech Dev | IT for Businesses | Canoinhas-SC, Brazil',
                description: 'VWTech Dev: IT for Businesses in Canoinhas/SC. Complete technology, infrastructure, support and systems solutions with local and remote service.',
                keywords: 'web development Canoinhas, mobile apps SC, responsive websites, custom web systems, technical support, computer maintenance, notebook, phone, Canoinhas SC, Santa Catarina, VWTech Dev, programming, technology',
                ogTitle: 'VWTech Dev | IT for Businesses | Canoinhas-SC, Brazil',
                ogDescription: 'VWTech Dev: IT for Businesses in Canoinhas/SC. Complete technology, infrastructure, support and systems solutions with local and remote service.'
            }
        },

        'es-ES': {
            nav: {
                home: 'Inicio',
                about: 'Quiénes Somos',
                services: 'Servicios',
                projects: 'Proyectos',
                contact: 'Contacto',
                logoAria: 'Volver al inicio',
                menuToggleAria: 'Abrir menú de navegación',
                socialAria: 'Redes sociales',
                langToggleAria: 'Seleccionar idioma',
                langDropdownAria: 'Idiomas disponibles',
                facebookAria: 'Facebook',
                instagramAria: 'Instagram',
                githubAria: 'GitHub',
                mobileMenuAria: 'Menú móvil'
            },
            hero: {
                sectionAria: 'Sección principal',
                title: '<span class="text-highlight">Tecnología</span> para Empresas',
                description: 'Soluciones completas de tecnología para tu negocio. Infraestructura, soporte y sistemas con atención local y remota.',
                featuresAria: 'Nuestros diferenciales',
                feature1: 'Soluciones completas en tecnología',
                feature2: 'Infraestructura, soporte y sistemas',
                feature3: 'Atención local y remota',
                btnPrimaryAria: 'Hablar por WhatsApp',
                btnPrimary: 'Solicitar Presupuesto Gratis',
                btnPrimaryWhatsapp: '¡Hola! Me gustaría solicitar un presupuesto para mi proyecto.',
                btnSecondaryAria: 'Conocer nuestros servicios',
                btnSecondary: 'Ver Servicios',
                btnOutlineAria: 'Contacto',
                btnOutline: 'Contacto'
            },
            about: {
                title: 'Quiénes <span class="text-highlight">Somos</span>',
                subtitle: 'Conoce nuestra historia y el equipo que hace posible VWTech Dev.',
                historyTitle: 'Nuestra Historia',
                historyText: 'Fundada en 2019 en la ciudad de Canoinhas-SC, Brasil, VWTech Dev nació de la visión de los hermanos Vinicius Vieira (fundador) y Wellinton Vieira (cofundador). Inicialmente conocida como Vieirateam, la empresa busca perfeccionar el desarrollo de sistemas web, aplicaciones móviles con soluciones tecnológicas innovadoras.',
                missionTitle: 'Nuestra Misión',
                missionText: 'Ofrecer soluciones completas de TI para empresas, combinando infraestructura, soporte y sistemas con atención personalizada y excelencia técnica. Con un compromiso constante con la calidad y la innovación, buscamos entregar servicios que no solo cumplan, sino que superen las expectativas de nuestros clientes.',
                teamTitle: 'Nuestro Equipo',
                founderRole: 'Fundador',
                cofounderRole: 'Cofundador',
                githubViniciusTitle: 'GitHub de Vinicius',
                githubWellintonTitle: 'GitHub de Wellinton',
                githubText: 'Ver GitHub'
            },
            services: {
                title: 'Nuestros <span class="text-highlight">Servicios</span>',
                subtitle: 'Ofrecemos una amplia gama de servicios para atender las necesidades de tu negocio.',
                button: 'Ver Planes',
                web: { title: 'Desarrollo Web', description: 'Creamos sitios y aplicaciones web responsivas, optimizadas para rendimiento y conversión, utilizando las mejores tecnologías del mercado.' },
                mobile: { title: 'Aplicaciones Móviles', description: 'Desarrollamos aplicaciones nativas e híbridas para Android, con foco en la experiencia del usuario y funcionalidades exclusivas.' },
                gamer: { title: 'PC Gamer', description: 'Montaje de PC Gamer con piezas de calidad y precio accesible. Presupuesto sin compromiso.' },
                maintenance: { title: 'PCs y Celulares', description: 'Mantenimiento de computadoras y celulares, cambio de pantalla, batería, cargador, etc.' },
                support: { title: 'Soporte Técnico', description: '¡Soporte remoto rápido y eficiente! Escríbenos por WhatsApp y resuélvelo todo por AnyDesk.' },
                onsite: { title: 'Atención Presencial', description: 'Atención presencial para la región del Planalto Norte Catarinense. ¡Agenda tu cita ahora mismo!' }
            },
            projects: {
                title: 'Nuestros <span class="text-highlight">Proyectos</span>',
                subtitle: 'Algunos de los proyectos que desarrollamos para nuestros clientes satisfechos.',
                button: 'Saber Más',
                p1: { title: 'Delta Monitor', description: 'Sistema Web de Generación Automática de Recibos para la empresa Delta Monitoramiento Canoinhas-SC' },
                p2: { title: 'Alpha Automation and Robotics', description: 'Landing page moderna y responsiva para Alpha Automation and Robotics, empresa especializada en automatización industrial y robótica.' },
                p3: { title: 'Nations Flow', description: 'Sistema Web de Control Financiero para la Iglesia Pentecostal Nações para Cristo.' }
            },
            testimonials: {
                title: 'Lo que dicen <span class="text-highlight">nuestros clientes</span>'
            },
            contact: {
                title: 'Ponte en <span class="text-highlight">Contacto</span>',
                subtitle: '¿Tienes un proyecto en mente? Rellena el formulario a continuación y nuestro equipo se pondrá en contacto pronto.',
                form: {
                    nameLabel: 'Nombre Completo',
                    namePlaceholder: 'Tu nombre',
                    emailLabel: 'Correo electrónico',
                    emailPlaceholder: 'tu@correo.com',
                    phoneLabel: 'Teléfono',
                    phonePlaceholder: '(00) 00000-0000',
                    messageLabel: 'Mensaje',
                    messagePlaceholder: 'Describe tu proyecto o duda',
                    button: 'Enviar Mensaje',
                    phoneLabelTpl: 'Teléfono: {phone}.',
                    whatsappTemplate: '¡Hola! Me llamo {name}.\nCorreo: {email}.\n{phone}\n\n{message}'
                },
                info: {
                    title: 'Información de Contacto',
                    addressLabel: 'Dirección',
                    addressText: "R. Joaquim Vieira de Lima, 1100<br>Campo d' Água Verde, Canoinhas-SC, 89466-324",
                    phoneLabel: 'Teléfono',
                    phoneText: '(47) 99289-3609',
                    emailLabel: 'Correo electrónico',
                    emailText: 'vwtechdev@gmail.com',
                    hoursLabel: 'Horario de Atención',
                    hoursText: 'Lunes a Viernes: 9h a 18h<br>Sábado: 9h a 13h'
                },
                social: { title: 'Síguenos en redes sociales' }
            },
            footer: {
                rights: 'Todos los derechos reservados.'
            },
            floating: {
                backToTopAria: 'Volver arriba',
                whatsappAria: 'Conversar por WhatsApp',
                whatsappMsg: '¡Hola! Me gustaría conversar sobre sus servicios.'
            },
            modal: {
                serviceTitle: 'Servicio'
            },
            plans: {
                web: {
                    basic: {
                        name: 'Plan Basic', price: 'R$ 149,90/mes',
                        features: ['Landing Page', 'Dominio Gratis', 'Hosting Gratis 1GB', 'Soporte por WhatsApp', '1 Revisión Mensual'],
                        button: 'Contratar Plan Basic', whatsapp: '¡Hola! Me gustaría contratar el Plan Basic de Desarrollo Web por R$ 129,90/mes.'
                    },
                    silver: {
                        name: 'Plan Silver', price: 'R$ 249,90/mes',
                        features: ['Sistema Web Personalizado', 'Dominio Gratis', 'Hosting Gratis 10GB', 'Soporte por WhatsApp', '2 Revisiones Mensuales'],
                        button: 'Contratar Plan Silver', whatsapp: '¡Hola! Me gustaría contratar el Plan Silver de Desarrollo Web por R$ 229,90/mes.'
                    },
                    gold: {
                        name: 'Plan Gold', price: 'R$ 349,90/mes',
                        features: ['Sistema Web Personalizado', 'Dominio Gratis', 'Hosting Gratis 30GB', 'Backup Automático Gratis', 'Soporte por WhatsApp 24/7', 'Revisiones Semanales'],
                        button: 'Contratar Plan Gold', whatsapp: '¡Hola! Me gustaría contratar el Plan Gold de Desarrollo Web por R$ 329,90/mes.'
                    }
                },
                mobile: {
                    android: {
                        name: 'Plan Android', price: 'R$ 349,90/mes',
                        features: ['Desarrollo de Aplicación Móvil para Android', 'Publicación Gratuita en Google Play Store', 'Hosting Gratis (10 GB)', 'Dominio Gratis para Landing Page', 'Soporte por WhatsApp', '2 Revisiones Mensuales'],
                        button: 'Contratar Plan Android', whatsapp: '¡Hola! Me gustaría contratar el Plan Android de Aplicaciones Móviles por R$ 299,90/mes.'
                    },
                    ios: {
                        name: 'Plan iOS', price: 'R$ 549,90/mes',
                        features: ['Desarrollo de Aplicación Móvil para iOS', 'Publicación Gratuita en Apple App Store', 'Hosting Gratis (10 GB)', 'Dominio Gratis para Landing Page', 'Soporte por WhatsApp', '2 Revisiones Mensuales'],
                        button: 'Contratar Plan iOS', whatsapp: '¡Hola! Me gustaría contratar el Plan iOS de Aplicaciones Móviles por R$ 499,90/mes.'
                    }
                },
                gamer: {
                    upgrade: {
                        name: 'Upgrade de Piezas', price: 'R$ 149,90',
                        features: ['Análisis de compatibilidad de piezas', 'Instalación profesional y segura', 'Pruebas de rendimiento y estabilidad', 'Configuración de BIOS optimizada', 'Garantía de funcionamiento'],
                        button: 'Contratar Upgrade de Piezas', whatsapp: '¡Hola! Me gustaría contratar el servicio de Upgrade de Piezas PC Gamer por R$ 229,90.'
                    },
                    cleaning: {
                        name: 'Limpieza Técnica', price: 'R$ 249,90',
                        features: ['Limpieza completa de polvo', 'Cambio de pasta térmica', 'Organización y fijación de cables', 'Verificación de temperatura', 'Optimización del sistema', 'Reporte de salud de componentes'],
                        button: 'Contratar Limpieza Técnica', whatsapp: '¡Hola! Me gustaría contratar el servicio de Limpieza Técnica PC Gamer por R$ 329,90.'
                    },
                    assembly: {
                        name: 'Montaje Completa', price: 'R$ 349,90',
                        features: ['Selección de piezas compatibles', 'Montaje cuidadoso y profesional', 'Instalación del sistema operativo', 'Configuración de drivers', 'Pruebas de estabilidad', 'Benchmark de rendimiento', 'Garantía de funcionamiento'],
                        button: 'Contratar Montaje Completa', whatsapp: '¡Hola! Me gustaría contratar el servicio de Montaje Completa PC Gamer por R$ 429,90.'
                    }
                },
                maintenance: {
                    computer: {
                        name: 'Computadora', price: 'Consultar',
                        features: ['Limpieza completa interna y externa', 'Cambio de pasta térmica', 'Verificación y optimización del sistema', 'Diagnóstico de hardware', 'Eliminación de virus y malwares', 'Copia de seguridad de datos importantes', 'Actualización de drivers'],
                        button: 'Solicitar Presupuesto', whatsapp: '¡Hola! Me gustaría solicitar un presupuesto para mantenimiento de Computadora.'
                    },
                    notebook: {
                        name: 'Notebook', price: 'Consultar',
                        features: ['Limpieza completa interna y externa', 'Cambio de pasta térmica', 'Verificación y optimización del sistema', 'Diagnóstico de hardware', 'Eliminación de virus y malwares', 'Copia de seguridad de datos importantes', 'Verificación de batería y cargador', 'Actualización de drivers'],
                        button: 'Solicitar Presupuesto', whatsapp: '¡Hola! Me gustaría solicitar un presupuesto para mantenimiento de Notebook.'
                    },
                    phone: {
                        name: 'Celular', price: 'Consultar',
                        features: ['Limpieza completa interna y externa', 'Cambio de pantalla rota', 'Cambio de batería', 'Reparación de conectores (cargador, auriculares)', 'Desbloqueo de pantalla', 'Copia de seguridad de datos (fotos, contactos, apps)', 'Eliminación de virus y malwares', 'Actualización del sistema operativo'],
                        button: 'Solicitar Presupuesto', whatsapp: '¡Hola! Me gustaría solicitar un presupuesto para mantenimiento de Celular.'
                    }
                },
                support: {
                    basic: {
                        name: 'Plan Basic', price: 'R$ 149,90/mes',
                        features: ['Soporte remoto por AnyDesk', 'Atención por WhatsApp', 'Hasta 3 llamados por mes', 'Horario comercial: 09h–18h', 'Soporte rápido para problemas simples'],
                        button: 'Contratar Plan Basic', whatsapp: '¡Hola! Me gustaría contratar el Plan Basic de Soporte Técnico por R$ 129,90/mes.'
                    },
                    silver: {
                        name: 'Plan Silver', price: 'R$ 249,90/mes',
                        features: ['Soporte remoto por AnyDesk', 'Atención por WhatsApp', 'Hasta 5 llamados por mes', 'Horario comercial extendido: 08h–20h', 'Prioridad media para atención', 'Asistencia en configuraciones y pequeñas mantenimiento remoto'],
                        button: 'Contratar Plan Silver', whatsapp: '¡Hola! Me gustaría contratar el Plan Silver de Soporte Técnico por R$ 229,90/mes.'
                    },
                    gold: {
                        name: 'Plan Gold', price: 'R$ 349,90/mes',
                        features: ['Soporte remoto por AnyDesk', 'Atención por WhatsApp 24/7', 'Llamados ilimitados', 'Backup Remoto 100GB', 'Prioridad máxima en la atención', 'Asistencia completa: configuraciones, actualización y diagnóstico avanzado'],
                        button: 'Contratar Plan Gold', whatsapp: '¡Hola! Me gustaría contratar el Plan Gold de Soporte Técnico por R$ 329,90/mes.'
                    }
                },
                onsite: {
                    basic: {
                        name: 'Plan Basic', price: 'R$ 249,90/mes',
                        features: ['Atención presencial en residencia u oficina pequeña', 'Soporte básico para computadoras y periféricos', '1 visita mensual con cita previa', 'Horario comercial: 09h–18h', 'Solución rápida para problemas simples'],
                        button: 'Contratar Plan Basic', whatsapp: '¡Hola! Me gustaría contratar el Plan Basic de Atención Presencial por R$ 249,90/mes.'
                    },
                    silver: {
                        name: 'Plan Silver', price: 'R$ 349,90/mes',
                        features: ['Atención presencial en residencia o empresa', 'Soporte técnico completo para computadoras, redes y periféricos', '2 visitas mensuales con cita previa', 'Horario comercial extendido: 08h–20h', 'Prioridad media en la atención', 'Asistencia en mantenimiento, configuración y actualización de sistemas'],
                        button: 'Contratar Plan Silver', whatsapp: '¡Hola! Me gustaría contratar el Plan Silver de Atención Presencial por R$ 749,90/mes.'
                    },
                    gold: {
                        name: 'Plan Gold', price: 'R$ 549,90/mes',
                        features: ['Atención presencial 24/7 para empresas', 'Soporte técnico completo: computadoras, redes, servidores y periféricos', 'Visitas Semanales con cita previa', 'Prioridad máxima en la atención', 'Diagnóstico, mantenimiento y actualización avanzada de sistemas', 'Consultoría para mejoras de infraestructura de TI'],
                        button: 'Contratar Plan Gold', whatsapp: '¡Hola! Me gustaría contratar el Plan Gold de Atención Presencial por R$ 1.249,90/mes.'
                    }
                }
            },
            notify: {
                modalNotFound: 'Error: Modal no encontrado. Intenta recargar la página.',
                plansNotFound: 'Error: Planes no encontrados para este servicio.',
                fillRequired: 'Por favor, rellena todos los campos obligatorios.',
                whatsappError: 'Error al redirigir a WhatsApp. Intenta de nuevo.',
                loadError: 'Error al cargar algunas funciones. Recarga la página si es necesario.',
                planInquiryTpl: '¡Hola! Me gustaría contratar el plan {plan}.',
                plansGeneral: '¡Hola! Me gustaría conocer sus planes.'
            },
            meta: {
                title: 'VWTech Dev | TI para Empresas | Canoinhas-SC, Brasil',
                description: 'VWTech Dev: TI para Empresas en Canoinhas/SC. Soluciones completas en tecnología, infraestructura, soporte y sistemas con atención local y remota.',
                keywords: 'desarrollo web Canoinhas, aplicaciones móviles SC, sitios web responsivos, sistemas web personalizados, soporte técnico, mantenimiento computadora, notebook, celular, Canoinhas SC, Santa Catarina, VWTech Dev, programación, tecnología',
                ogTitle: 'VWTech Dev | TI para Empresas | Canoinhas-SC, Brasil',
                ogDescription: 'VWTech Dev: TI para Empresas en Canoinhas/SC. Soluciones completas en tecnología, infraestructura, soporte y sistemas con atención local y remota.'
            }
        }
    },

    // Resolve chave pontuada (ex.: 'nav.about'); fallback pt-BR; se faltar, retorna a key.
    t: function(key) {
        var val = this._resolve(this.translations[this.currentLang], key);
        if (val == null) val = this._resolve(this.translations[this.DEFAULT_LANG], key);
        return val != null ? val : key;
    },

    _resolve: function(obj, key) {
        if (!obj || !key) return null;
        var parts = key.split('.');
        var cur = obj;
        for (var i = 0; i < parts.length; i++) {
            if (cur == null) return null;
            cur = cur[parts[i]];
        }
        return cur;
    },

    getStoredLang: function() {
        try {
            var saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved && this.SUPPORTED.indexOf(saved) !== -1) return saved;
        } catch (e) {}
        return this.DEFAULT_LANG;
    },

    setLanguage: function(lang) {
        if (this.SUPPORTED.indexOf(lang) === -1) lang = this.DEFAULT_LANG;
        try { localStorage.setItem(this.STORAGE_KEY, lang); } catch (e) {}
        this.applyTranslations(lang);
    },

    applyTranslations: function(lang) {
        this.currentLang = lang;
        var self = this;

        // [data-i18n] -> textContent
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var val = self.t(el.getAttribute('data-i18n'));
            if (typeof val === 'string') el.textContent = val;
        });

        // [data-i18n-html] -> innerHTML (highlights, <br>)
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var val = self.t(el.getAttribute('data-i18n-html'));
            if (typeof val === 'string') el.innerHTML = val;
        });

        // [data-i18n-attr] -> "attr:key;attr:key"
        document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
            var spec = el.getAttribute('data-i18n-attr') || '';
            spec.split(';').forEach(function(pair) {
                var idx = pair.indexOf(':');
                if (idx === -1) return;
                var attr = pair.slice(0, idx).trim();
                var key = pair.slice(idx + 1).trim();
                if (!attr || !key) return;
                var val = self.t(key);
                if (typeof val === 'string') el.setAttribute(attr, val);
            });
        });

        // [data-i18n-whatsapp] -> reconstrói href wa.me
        document.querySelectorAll('[data-i18n-whatsapp]').forEach(function(el) {
            var val = self.t(el.getAttribute('data-i18n-whatsapp'));
            if (typeof val === 'string') {
                el.setAttribute('href', self.WHATSAPP_BASE + encodeURIComponent(val));
            }
        });

        // [data-i18n-list] -> reconstrói <ul> com <i class="fas fa-check"></i>
        document.querySelectorAll('[data-i18n-list]').forEach(function(ul) {
            var items = self.t(ul.getAttribute('data-i18n-list'));
            if (Array.isArray(items)) {
                ul.innerHTML = items.map(function(t) {
                    return '<li><i class="fas fa-check"></i> ' + t + '</li>';
                }).join('');
            }
        });

        // <html lang> + meta language
        document.documentElement.setAttribute('lang', lang.toLowerCase());
        var metaLang = document.querySelector('meta[name="language"]');
        if (metaLang) metaLang.setAttribute('content', lang);

        // Marca opção ativa no dropdown
        document.querySelectorAll('.navbar-lang-option').forEach(function(opt) {
            opt.setAttribute('aria-checked', opt.getAttribute('data-lang') === lang ? 'true' : 'false');
        });

        // Avisa outros módulos (ex.: index.js reaplicar modal aberto)
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
    },

    init: function() {
        try {
            this.applyTranslations(this.getStoredLang());
        } catch (e) {
            // Fallback silencioso: mantém HTML original (pt-BR)
        }
    }
};

document.addEventListener('DOMContentLoaded', function() { i18n.init(); });
window.i18n = i18n;
