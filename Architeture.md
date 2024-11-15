project-root/
├── public/
│   ├── images/              # Imagens do projeto, como ícones e logos
│   └── favicon.ico
├── src/
│   ├── app/                 # Diretório principal para rotas e páginas
│   │   ├── (public)/        # Páginas acessíveis sem autenticação
│   │   │   ├── login/
│   │   │   │   └── page.tsx # Página de login
│   │   │   └── register/
│   │   │       └── page.tsx # Página de registro
│   │   ├── (authenticated)/ # Páginas protegidas (apenas para usuários logados)
│   │   │   ├── dashboard/
│   │   │   │   ├── layout.tsx       # Layout com Sidebar fixa
│   │   │   │   ├── page.tsx         # Página inicial do dashboard
│   │   │   │   └── [route]/         # Diretório de rotas dinâmicas da Sidebar
│   │   │   │       └── page.tsx     # Conteúdo dos links na Sidebar
│   │   
│   │  
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Sidebar.tsx      # Componente da Sidebar com links de navegação
│   │   ├── Header.tsx       # Componente do cabeçalho (opcional)
│   │   └── AuthProvider.tsx # Provedor de autenticação (para proteger rotas autenticadas)
│   ├── context/             # Contextos globais
│   │   └── AuthContext.tsx  # Contexto de autenticação
│   ├── hooks/               # Hooks personalizados
│   │   └── useAuth.ts       # Hook para lidar com autenticação e verificação de login
│   ├── utils/               # Funções utilitárias
│   │   └── authUtils.ts     # Funções relacionadas à autenticação (ex.: verificação de token)
│   ├── middleware.ts        # Middleware de autenticação
│   ├── styles/              # Estilos globais e customizações
│   │   └── globals.css      # CSS global
│   └── types/               # Definições de tipos TypeScript
│       └── auth.d.ts        # Tipos relacionados à autenticação
├── .env                     # Variáveis de ambiente (tokens, URLs de API, etc.)
├── tsconfig.json            # Configuração do TypeScript
└── next.config.js           # Configuração do Next.js
