import React, { useState } from 'react';
import {
  TopNavigation,
  Header,
  Container,
  Box,
  SpaceBetween,
  Button,
  Badge,
  Input,
  Link,
  StatusIndicator,
  ExpandableSection,
  ColumnLayout
} from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

// ── PROVIDER LOGOS (SVG WHITE MONOCHROME) ──
const LOGOS = {
  aws: (
    <svg viewBox="0 0 24 24" className="provider-logo-svg">
      <path fill="currentColor" d="M18.74 18.32a.4.4 0 0 1-.36.21.46.46 0 0 1-.22-.06c-1.89-1.07-4.14-1.63-6.42-1.63-2.3 0-4.57.57-6.48 1.65a.4.4 0 0 1-.41-.02.43.43 0 0 1-.18-.38c.03-.65.25-1.29.62-1.82a.45.45 0 0 1 .47-.18c1.88.66 3.91 1 5.98 1 2.05 0 4.07-.33 5.93-.98a.43.43 0 0 1 .48.16c.39.54.62 1.19.66 1.85a.42.42 0 0 1-.07.22zm2.08-1.55c-.21-.29-.53-.44-.88-.41-1.39.12-2.78.36-4.15.71-.35.09-.59.39-.58.75.01.35.26.65.61.71 1.25.22 2.52.33 3.8.33.27 0 .54-.03.8-.08.36-.07.63-.35.66-.71.04-.37-.15-.71-.46-.9zm-13.6.84c.35-.07.6-.37.59-.72s-.25-.65-.6-.73c-1.35-.33-2.73-.56-4.11-.67a.77.77 0 0 0-.87.41c-.3.2-.49.53-.45.89.04.36.3.65.66.71 1.28.23 2.57.34 3.87.34.3 0 .61-.08.91-.23zM7.22 6.43a2.76 2.76 0 0 1 2.74-2.75c.98 0 1.9.52 2.39 1.37.49-.85 1.41-1.37 2.39-1.37a2.76 2.76 0 0 1 2.74 2.75v5.29h-2.1V7.07c0-.75-.61-1.36-1.37-1.36-.75 0-1.36.61-1.36 1.36v4.65h-2.1V7.07c0-.75-.61-1.36-1.37-1.36-.75 0-1.37.61-1.37 1.36v4.65h-2.1V6.43h.01zm-3.5 0h2.1v5.29H3.72V6.43zm14.46 0h2.1v5.29h-2.1V6.43z"/>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" className="provider-logo-svg">
      <path fill="currentColor" d="M13.05 4.24l-4.5 7.79 4.3 4.14-7.4 3.59H2.5l6.5-11.26 4.05-4.26zm2.4 0h6.05l-8.4 15.52h-5.2l7.55-15.52z"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="provider-logo-svg">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.68-.08-1.35-.22-2H12v4.16h5.8c-.37 1.63-1.63 3.01-3.8 3.01-2.45 0-4.46-1.99-4.46-4.46S11.55 8.25 14 8.25c1.09 0 2.05.4 2.81 1.09l2.95-2.95C18.01 4.75 15.22 3.75 12 3.75 7.44 3.75 3.75 7.44 3.75 12S7.44 20.25 12 20.25c4.78 0 8.01-3.36 8.01-8.15 0-.58-.06-1.09-.16-1.57L12 10.53V2z"/>
    </svg>
  ),
  hashicorp: (
    <svg viewBox="0 0 24 24" className="provider-logo-svg">
      <path fill="currentColor" d="M8.2 2.5L2.5 5.8v12.4l5.7 3.3 5.7-3.3V5.8L8.2 2.5zm4.2 14.1l-4.2 2.4-4.2-2.4V7.4l4.2-2.4 4.2 2.4v9.2zm3.3-10.8l5.7-3.3v12.4l-5.7 3.3V5.8z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="provider-logo-svg">
      <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
};

// ── HEXAGON BADGE COMPONENT ──
function HexBadge({ title, level, category = 'FOUNDATIONAL', color = '#232f3e', accent = '#ff9900' }) {
  return (
    <div className="hex-badge-container" style={{ '--badge-bg': color, '--badge-accent': accent }}>
      <svg viewBox="0 0 100 115" className="hex-svg">
        {/* Outer border */}
        <polygon points="50 2, 98 28, 98 87, 50 113, 2 87, 2 28" className="hex-border" />
        {/* Inner hexagon */}
        <polygon points="50 7, 93 31, 93 84, 50 108, 7 84, 7 31" className="hex-inner" />
      </svg>
      <div className="hex-content">
        <div className="hex-header-brand">
          <span className="hex-brand-text">aws</span>
          <span className="hex-check">✔</span>
          <span className="hex-certified">certified</span>
        </div>
        <div className="hex-divider"></div>
        <div className="hex-main-title">{title}</div>
        <div className="hex-divider"></div>
        <div className="hex-footer-level">{level || category}</div>
      </div>
    </div>
  );
}

// ── CERTIFICATIONS STRUCTURE BY PROVIDER ──
const PROVIDERS_DATA = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    shortName: 'AWS',
    iconKey: 'aws',
    accentColor: '#ff9900',
    description: 'La nube más adoptada a nivel global. Certificaciones de Fundamentos, Arquitectura, Machine Learning y DevOps.',
    certifications: [
      {
        id: 'aif-c01',
        code: 'AIF-C01',
        title: 'AI Practitioner',
        fullName: 'AWS Certified AI Practitioner',
        level: 'FOUNDATIONAL',
        status: 'DISPONIBLE',
        statusType: 'success',
        active: true,
        url: '/aws/ai-practitioner/',
        domainsCount: 5,
        examsCount: 6,
        flashcardsCount: 127,
        desc: 'Inteligencia Artificial, Machine Learning, Foundation Models, Bedrock, SageMaker y principios de IA Responsable.',
        badgeColor: '#1d2a3a',
        badgeAccent: '#ff9900'
      },
      {
        id: 'saa-c03',
        code: 'SAA-C03',
        title: 'Solutions Architect',
        fullName: 'AWS Certified Solutions Architect Associate',
        level: 'ASSOCIATE',
        status: 'EN DESARROLLO',
        statusType: 'in-progress',
        active: false,
        url: '#',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 180,
        desc: 'Diseño de arquitecturas resilientes, seguras, de alto rendimiento y optimizadas en costes en AWS.',
        badgeColor: '#1d2a3a',
        badgeAccent: '#539fe5'
      },
      {
        id: 'dva-c02',
        code: 'DVA-C02',
        title: 'Developer',
        fullName: 'AWS Certified Developer Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 140,
        desc: 'Desarrollo y despliegue de aplicaciones nativas en la nube, serverless (Lambda, API Gateway) y CI/CD.',
        badgeColor: '#1d2a3a',
        badgeAccent: '#539fe5'
      },
      {
        id: 'clf-c02',
        code: 'CLF-C02',
        title: 'Cloud Practitioner',
        fullName: 'AWS Certified Cloud Practitioner',
        level: 'FOUNDATIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 150,
        desc: 'Visión general de la infraestructura global de AWS, servicios core, seguridad compartida y modelos de precios.',
        badgeColor: '#1d2a3a',
        badgeAccent: '#ff9900'
      }
    ]
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    shortName: 'Azure',
    iconKey: 'azure',
    accentColor: '#0089d6',
    description: 'Servicios en la nube empresarial de Microsoft, gobernanza, híbrido y modernización de infraestructuras.',
    certifications: [
      {
        id: 'az-900',
        code: 'AZ-900',
        title: 'Azure Fundamentals',
        fullName: 'Microsoft Certified: Azure Fundamentals',
        level: 'FUNDAMENTALS',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 3,
        examsCount: 4,
        flashcardsCount: 120,
        desc: 'Conceptos de nube, servicios de computación, red, almacenamiento, seguridad y gestión de costes en Azure.',
        badgeColor: '#16283d',
        badgeAccent: '#0089d6'
      },
      {
        id: 'ai-900',
        code: 'AI-900',
        title: 'Azure AI Fundamentals',
        fullName: 'Microsoft Certified: Azure AI Fundamentals',
        level: 'FUNDAMENTALS',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 5,
        examsCount: 4,
        flashcardsCount: 110,
        desc: 'Principios de IA, Computer Vision, Procesamiento de Lenguaje Natural (NLP) y Azure OpenAI Services.',
        badgeColor: '#16283d',
        badgeAccent: '#0089d6'
      },
      {
        id: 'az-104',
        code: 'AZ-104',
        title: 'Azure Administrator',
        fullName: 'Microsoft Certified: Azure Administrator Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 5,
        examsCount: 6,
        flashcardsCount: 190,
        desc: 'Implementación, administración y monitorización de identidades, gobierno, almacenamiento y redes virtuales.',
        badgeColor: '#16283d',
        badgeAccent: '#0089d6'
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Cloud Platform',
    shortName: 'Google Cloud',
    iconKey: 'google',
    accentColor: '#4285f4',
    description: 'Infraestructura de computación de alto rendimiento, análisis de datos con BigQuery y orquestación con Kubernetes.',
    certifications: [
      {
        id: 'gcp-cdl',
        code: 'CDL',
        title: 'Cloud Digital Leader',
        fullName: 'Google Cloud Digital Leader',
        level: 'FOUNDATIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 4,
        examsCount: 4,
        flashcardsCount: 110,
        desc: 'Transformación digital, conceptos clave de Google Cloud y cómo los productos impulsan organizaciones.',
        badgeColor: '#17273d',
        badgeAccent: '#4285f4'
      },
      {
        id: 'gcp-ace',
        code: 'GCP-ACE',
        title: 'Associate Cloud Engineer',
        fullName: 'Google Cloud Associate Cloud Engineer',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 5,
        examsCount: 5,
        flashcardsCount: 150,
        desc: 'Despliegue y monitorización de aplicaciones, gestión de Kubernetes (GKE), Cloud Run y configuración de IAM.',
        badgeColor: '#17273d',
        badgeAccent: '#4285f4'
      }
    ]
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    shortName: 'HashiCorp',
    iconKey: 'hashicorp',
    accentColor: '#844fba',
    description: 'Infraestructura como código (IaC), gestión de secretos y seguridad moderna para entornos multi-cloud.',
    certifications: [
      {
        id: 'terraform-003',
        code: 'TA-003',
        title: 'Terraform Associate',
        fullName: 'HashiCorp Certified: Terraform Associate (003)',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 9,
        examsCount: 6,
        flashcardsCount: 160,
        desc: 'Conceptos de IaC, sintaxis HCL, estado de Terraform, módulos, variables y flujos de trabajo profesionales.',
        badgeColor: '#1e1c33',
        badgeAccent: '#844fba'
      },
      {
        id: 'vault-associate',
        code: 'VA-002',
        title: 'Vault Associate',
        fullName: 'HashiCorp Certified: Vault Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 7,
        examsCount: 4,
        flashcardsCount: 130,
        desc: 'Gestión centralizada de secretos, cifrado como servicio, autenticación y políticas de acceso con Vault.',
        badgeColor: '#1e1c33',
        badgeAccent: '#844fba'
      }
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    shortName: 'GitHub',
    iconKey: 'github',
    accentColor: '#f0f6fc',
    description: 'Ecosistema de desarrollo colaborativo, CI/CD automatizado, seguridad de código y DevOps moderno.',
    certifications: [
      {
        id: 'gh-actions',
        code: 'GH-ACT',
        title: 'GitHub Actions',
        fullName: 'GitHub Actions Certification',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 5,
        examsCount: 5,
        flashcardsCount: 140,
        desc: 'Automatización de flujos de trabajo CI/CD, creación de custom actions, runners autogestionados y seguridad.',
        badgeColor: '#1c2128',
        badgeAccent: '#f0f6fc'
      },
      {
        id: 'gh-foundations',
        code: 'GH-FND',
        title: 'GitHub Foundations',
        fullName: 'GitHub Foundations Certification',
        level: 'FOUNDATIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        domainsCount: 4,
        examsCount: 4,
        flashcardsCount: 120,
        desc: 'Control de versiones con Git, colaboración con Issues y Pull Requests, Markdown y gestión de proyectos.',
        badgeColor: '#1c2128',
        badgeAccent: '#f0f6fc'
      }
    ]
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProvider, setActiveProvider] = useState('aws');
  const [expandedSections, setExpandedSections] = useState({
    aws: true,
    azure: false,
    google: false,
    hashicorp: false,
    github: false
  });

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = (state) => {
    setExpandedSections({
      aws: state,
      azure: state,
      google: state,
      hashicorp: state,
      github: state
    });
  };

  return (
    <div className="awsui-dark-mode certhub-root-layout">
      
      {/* ── 1. TOP NAVIGATION (CLOUDSCAPE WITH IMAGE.SVG LOGO) ── */}
      <TopNavigation
        identity={{
          href: '/',
          title: 'CertHub',
          logo: {
            src: '/logo.svg',
            alt: 'CertHub Logo'
          }
        }}
        utilities={[
          {
            type: 'button',
            text: 'Campus AI Practitioner',
            iconName: 'external',
            href: '/aws/ai-practitioner/'
          },
          {
            type: 'button',
            text: 'LinkedIn',
            iconName: 'share',
            href: 'https://www.linkedin.com/in/danielibabet',
            external: true
          }
        ]}
      />

      {/* ── 2. HERO BAR ── */}
      <div className="certhub-hero-section">
        <div className="certhub-hero-inner">
          <div className="hero-pill-badge">
            <span className="hero-pill-dot"></span>
            CATÁLOGO OFICIAL DE CERTIFICACIONES
          </div>
          <h1 className="hero-main-title">
            Prepara y Aprueba tus Certificaciones Cloud con <span>CertHub</span>
          </h1>
          <p className="hero-subtitle">
            Selecciona un proveedor para desplegar las certificaciones disponibles con insignias oficiales, mapas mentales navegables, tests de práctica y flashcards.
          </p>

          {/* SEARCH BAR */}
          <div className="hero-search-wrapper">
            <Input
              type="search"
              placeholder="Buscar por certificación (AI Practitioner, SAA-C03, Terraform, Azure...)"
              value={searchQuery}
              onChange={({ detail }) => setSearchQuery(detail.value)}
              clearAriaLabel="Limpiar búsqueda"
            />
          </div>
        </div>
      </div>

      {/* ── 3. PROVIDER SELECTOR BUTTONS BAR (WHITE LOGOS) ── */}
      <div className="provider-tabs-bar-container">
        <div className="provider-tabs-wrapper">
          {PROVIDERS_DATA.map(p => (
            <button
              key={p.id}
              className={`provider-tab-card ${activeProvider === p.id ? 'active' : ''}`}
              onClick={() => {
                setActiveProvider(p.id);
                setExpandedSections(prev => ({ ...prev, [p.id]: true }));
                const el = document.getElementById(`provider-section-${p.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <div className="tab-logo-icon">{LOGOS[p.iconKey]}</div>
              <div className="tab-info">
                <span className="tab-name">{p.shortName}</span>
                <span className="tab-count">{p.certifications.length} Certs</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── 4. ACCORDION / EXPANDABLE SECTIONS LIST ── */}
      <div className="main-providers-content-area">
        <div className="content-max-width">
          
          <div className="list-controls-bar">
            <div className="list-controls-title">
              Proveedores Tecnológicos ({PROVIDERS_DATA.length})
            </div>
            <div className="list-controls-actions">
              <Button variant="link" onClick={() => expandAll(true)}>Desplegar Todos</Button>
              <span className="separator">|</span>
              <Button variant="link" onClick={() => expandAll(false)}>Colapsar Todos</Button>
            </div>
          </div>

          <SpaceBetween size="l">
            {PROVIDERS_DATA.map(provider => {
              const matchesSearch = searchQuery === '' || 
                provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                provider.certifications.some(c => 
                  c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  c.fullName.toLowerCase().includes(searchQuery.toLowerCase())
                );

              if (!matchesSearch) return null;

              const filteredCerts = provider.certifications.filter(c => 
                searchQuery === '' ||
                c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.fullName.toLowerCase().includes(searchQuery.toLowerCase())
              );

              return (
                <div key={provider.id} id={`provider-section-${provider.id}`} className="provider-expandable-card">
                  <Container
                    header={
                      <div 
                        className="provider-accordion-header"
                        onClick={() => toggleSection(provider.id)}
                      >
                        <div className="accordion-left-side">
                          <div className="provider-white-icon-box">
                            {LOGOS[provider.iconKey]}
                          </div>
                          <div>
                            <div className="provider-accordion-name">
                              {provider.name}
                            </div>
                            <div className="provider-accordion-desc">
                              {provider.description}
                            </div>
                          </div>
                        </div>

                        <div className="accordion-right-side">
                          <Badge color="blue">{filteredCerts.length} Certificaciones</Badge>
                          <div className={`accordion-chevron-icon ${expandedSections[provider.id] ? 'expanded' : ''}`}>
                            ▼
                          </div>
                        </div>
                      </div>
                    }
                  >
                    {expandedSections[provider.id] && (
                      <div className="badges-grid-container">
                        {filteredCerts.map(cert => (
                          <div key={cert.id} className={`cert-badge-card ${cert.active ? 'active' : 'disabled'}`}>
                            
                            {/* HEXAGON BADGE VISUAL */}
                            <div className="badge-visual-wrapper">
                              <HexBadge
                                title={cert.title}
                                level={cert.level}
                                color={cert.badgeColor}
                                accent={cert.badgeAccent}
                              />
                            </div>

                            {/* CERTIFICATION INFO */}
                            <div className="badge-details-wrapper">
                              <div className="badge-code-row">
                                <span className="badge-exam-code">{cert.code}</span>
                                <StatusIndicator type={cert.statusType}>{cert.status}</StatusIndicator>
                              </div>

                              <h3 className="badge-full-title">{cert.fullName}</h3>
                              <p className="badge-summary-text">{cert.desc}</p>

                              {/* PILLS */}
                              <div className="badge-meta-pills">
                                <span>📚 {cert.domainsCount} Dominios</span>
                                <span>📝 {cert.examsCount} Exámenes</span>
                                <span>⚡ {cert.flashcardsCount} Flashcards</span>
                              </div>

                              {/* ACTION BUTTON */}
                              <div className="badge-action-row">
                                {cert.active ? (
                                  <Button 
                                    variant="primary" 
                                    iconName="external" 
                                    iconAlign="right"
                                    href={cert.url}
                                    fullWidth
                                  >
                                    Entrar al Campus
                                  </Button>
                                ) : (
                                  <Button disabled fullWidth>
                                    En Desarrollo
                                  </Button>
                                )}
                              </div>
                            </div>

                          </div>
                        ))}
                      </div>
                    )}
                  </Container>
                </div>
              );
            })}
          </SpaceBetween>

          {/* ── FOOTER BAR ── */}
          <div className="certhub-portal-footer">
            <p>
              © 2026 <strong>CertHub</strong> — Plataforma de Preparación Cloud & IA creada por{' '}
              <Link external href="https://www.linkedin.com/in/danielibabet">
                Daniel Ibáñez
              </Link>
              . Todos los logos y marcas pertenecen a sus respectivos proveedores (AWS, Microsoft, Google, HashiCorp, GitHub).
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
