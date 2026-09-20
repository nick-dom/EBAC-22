# PortalViagens

Site de viagens construído com Next.js como projeto de estudo (EBAC).

O projeto foi criado para praticar roteamento baseado em arquivos, rotas dinâmicas, componentes reutilizáveis, CSS Modules, API Routes e integração com serviços externos.

A aplicação inclui página inicial, listagem de destinos, páginas individuais por destino, uma API própria e um widget de clima em tempo real usando a API Open-Meteo.

## Funcionalidades

* Página inicial com destinos em destaque e seção de recursos
* Listagem completa de destinos turísticos
* Páginas dinâmicas por destino (dados gerados estaticamente com `generateStaticParams`)
* Clima atual em tempo real para cada destino
* Cabeçalho e rodapé compartilhados por um layout comum
* API própria para dados de destinos e clima
* Página 404 personalizada
* Imagens otimizadas com `next/image` (via componente `SafeImage`)

## API

| Endpoint                 | Descrição                                        |
| ------------------------ | ------------------------------------------------- |
| `GET /api/destinos`      | Retorna todos os destinos                         |
| `GET /api/destinos/[id]` | Retorna um destino específico                     |
| `GET /api/clima/[id]`    | Retorna o clima atual de um destino               |

O endpoint de clima usa a latitude e longitude do destino para consultar dados meteorológicos atuais na Open-Meteo, com cache de 10 minutos (`revalidate: 600`) e tradução dos códigos de tempo (WMO) para descrições em português.

## Tecnologias

* Next.js 16 (App Router)
* React 19
* TypeScript
* CSS Modules
* Open-Meteo API

## Estrutura do projeto

```text
app/
├── page.tsx                    # Página inicial
├── page.module.css
├── layout.tsx                  # Layout raiz (metadata + <Layout>)
├── globals.css
├── not-found.tsx                # Página 404 personalizada
├── not-found.module.css
│
├── destinos/
│   ├── page.tsx                 # Listagem de destinos
│   ├── destinos.module.css
│   │
│   └── [id]/
│       ├── page.tsx             # Página individual do destino
│       └── destino.module.css
│
└── api/
    ├── destinos/
    │   ├── route.ts             # GET /api/destinos
    │   └── [id]/
    │       └── route.ts         # GET /api/destinos/[id]
    │
    └── clima/
        └── [id]/
            └── route.ts         # GET /api/clima/[id]

components/
├── home/
│   ├── Hero.tsx / Hero.module.css
│   └── FeatureCard.tsx / FeatureCard.module.css
│
├── destinos/
│   ├── CardDestino.tsx / CardDestino.module.css
│   ├── DestinoCardCompacto.tsx / DestinoCardCompacto.module.css
│   ├── DestinoHero.tsx / DestinoHero.module.css
│   ├── InfoRapidas.tsx / InfoRapidas.module.css
│   └── ClimaWidget.tsx / ClimaWidget.module.css
│
├── layout/
│   ├── Layout.tsx / Layout.module.css
│   ├── Header.tsx / Header.module.css
│   └── Footer.tsx / Footer.module.css
│
└── ui/
    ├── SafeImage.tsx / SafeImage.module.css
    └── SectionHeading.tsx / SectionHeading.module.css

lib/
└── destinos.ts                  # Dados mock dos destinos + getDestinoById
```

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço local exibido pelo Next.js no navegador.

## Build de produção

Gerar o build:

```bash
npm run build
```

Iniciar o servidor de produção:

```bash
npm run start
```

## Clima

O widget de clima (`ClimaWidget`) consome o endpoint `/api/clima/[id]`, que por sua vez busca os dados na Open-Meteo a partir da latitude e longitude do destino. Não é necessária nenhuma chave de API.

Se a requisição falhar, o widget exibe uma mensagem de erro sem quebrar o restante da página.

Fluxo da requisição:

```text
Página do destino
       ↓
ClimaWidget
       ↓
API Route /api/clima/[id]
       ↓
Coordenadas do destino (lib/destinos.ts)
       ↓
Open-Meteo
       ↓
Dados de clima atuais
       ↓
Widget de clima
```

## Dados dos destinos

Os dados dos destinos ficam armazenados localmente em:

```text
lib/destinos.ts
```

Atualmente há 8 destinos cadastrados (Rio de Janeiro, Paris, Nova York, Machu Picchu, entre outros), cada um com nome, país, imagem, descrições, coordenadas, preço médio e melhor época para viajar.

Esses dados são usados como mock, permitindo desenvolver e testar a aplicação sem depender de um banco de dados. A estrutura pode futuramente ser substituída por um banco de dados ou uma API externa.

## Objetivo do projeto

Este projeto foi criado para praticar os seguintes recursos do Next.js:

* App Router
* Roteamento baseado em arquivos
* Rotas dinâmicas (`[id]`)
* Route Handlers (API Routes)
* Componentes reutilizáveis (Server e Client Components)
* CSS Modules
* Otimização de imagens
* Integração com API externa
