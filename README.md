# 🌐 CertHub Portal (`certhub.es`)

<p align="center">
  <img src="public/logo.svg" alt="CertHub Logo" width="100" />
</p>

<p align="center">
  <strong>Plataforma integral de estudio de certificaciones oficiales de cloud y tecnología.</strong>
</p>

<p align="center">
  <a href="https://certhub.es">https://certhub.es</a>
</p>

---

## 📌 Visión General

**CertHub** es el portal central y catálogo unificado de itinerarios de certificación técnica (AWS, Microsoft Azure, Google Cloud, HashiCorp Terraform y GitHub). 

Actúa como punto de acceso principal (landing SPA) hacia los diferentes campus de estudio especializados e interactivos desplegados bajo la misma infraestructura global (ej. `/aws/ai-practitioner/`).

---

## 🛠️ Stack Tecnológico & Diseño

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Design System**: [AWS Cloudscape Design System](https://cloudscape.design/) (`@cloudscape-design/components`, `@cloudscape-design/global-styles`) en Dark Mode nativo.
- **Tipografías**: Google Fonts (*Outfit*, *Open Sans*, *Roboto Mono*).
- **Iconografía e Insignias**: SVGs y PNGs oficiales optimizados por proveedor.
- **Arquitectura**: Single Page Application (SPA) ultra ligera con renderizado estático en cliente.
- **Despliegue & CDN**: AWS S3 (`certhub-portal`) + AWS CloudFront (`EWFKMUPN8D7A2`) + Route 53 con SSL/TLS automático vía ACM.

---

## 🏛️ Estructura del Repositorio

```text
certhub/
├── imgs/                       # Recursos gráficos fuente categorizados
│   ├── aws/                    # Insignias y logos de Amazon Web Services
│   ├── azure/                  # Insignias SVGs oficiales de Microsoft Learn
│   ├── gcp/                    # Insignias oficiales de Google Cloud
│   ├── github/                 # Insignias y logos oficiales de GitHub
│   └── terraform/              # Badges oficiales de HashiCorp Terraform
├── public/                     # Assets públicos estáticos servidos en dist/
│   ├── aws/
│   ├── azure/
│   ├── gcp/
│   ├── github/
│   ├── terraform/
│   └── logo.svg                # Logotipo oficial de CertHub (Favicon & Brand)
├── src/
│   ├── App.jsx                 # Componente raíz: Catálogo, filtros, búsqueda y render de fichas
│   ├── index.css               # Sistema de diseño dark, cabecera solapada y media queries
│   └── main.jsx                # Punto de entrada de React
├── index.html                  # Plantilla HTML5 con SEO y metadatos
├── package.json                # Dependencias y scripts de build/deploy
└── vite.config.js              # Configuración de compilación Vite
```

---

## 🚀 Proveedores y Certificaciones Soportadas

| Proveedor | Badges Disponibles | Estado en la Plataforma |
| :--- | :---: | :--- |
| **AWS** | 12 | **AI Practitioner (Disponible)** · 11 En desarrollo |
| **Microsoft Azure** | 16 | 16 Fichas oficiales (Fundamentals, Associate, Expert, Specialty) |
| **Google Cloud** | 12 | 12 Fichas oficiales (Cloud Digital Leader, ACE, PCA, ML, etc.) |
| **Terraform** | 2 | Terraform Associate 003 · Authoring & Operations |
| **GitHub** | 5 | Foundations, Actions, Security, Copilot, Administration |

---

## 💻 Desarrollo Local

```bash
# 1. Clonar el repositorio privado
git clone https://github.com/certhub-es/portal.git
cd portal

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo local
npm run dev
```

---

## ☁️ Compilación y Despliegue a Producción

El proyecto incluye un pipeline simplificado mediante script npm para compilar, sincronizar a S3 e invalidar la distribución de CloudFront:

```bash
npm run deploy
```

> **Comando ejecutado internamente:**
> `vite build && aws s3 sync dist/ s3://certhub-portal/ --exclude "aws/*" && aws cloudfront create-invalidation --distribution-id EWFKMUPN8D7A2 --paths "/index.html" "/" "/assets/*"`
