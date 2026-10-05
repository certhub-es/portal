import React, { useState } from 'react';
import {
  TopNavigation,
  Container,
  Box,
  SpaceBetween,
  Button,
  Badge,
  Input,
  Link,
  StatusIndicator
} from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

// ── HEXAGON BADGE COMPONENT ──
function HexBadge({ title, level, category = 'FOUNDATIONAL', color = '#232f3e', accent = '#ff9900' }) {
  return (
    <div className="hex-badge-container" style={{ '--badge-bg': color, '--badge-accent': accent }}>
      <svg viewBox="0 0 100 115" className="hex-svg">
        <polygon points="50 2, 98 28, 98 87, 50 113, 2 87, 2 28" className="hex-border" />
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

// ── CERTIFICATIONS DATA (CLEANED PATHS) ──
const PROVIDERS_DATA = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    shortName: 'AWS',
    logoSrc: '/aws/aws-logo.webp',
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
    shortName: 'Microsoft Azure',
    logoSrc: '/azure/azure.png',
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
    id: 'gcp',
    name: 'Google Cloud',
    shortName: 'Google Cloud',
    logoSrc: '/gcp/Google_Cloud_icon_(2026).svg.webp',
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
    logoSrc: '/hashicorp/HashiCorp_Logo_no_text.png',
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
    logoSrc: '/github/25231.png',
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
  const [selectedProviderId, setSelectedProviderId] = useState('aws');

  const currentProvider = PROVIDERS_DATA.find(p => p.id === selectedProviderId) || PROVIDERS_DATA[0];

  const filteredCerts = currentProvider.certifications.filter(c => 
    searchQuery === '' ||
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="awsui-dark-mode certhub-root-layout">
      
      {/* ── 1. COMPACT FIXED HEADER BAR ── */}
      <header className="certhub-compact-header">
        <div className="header-content-inner">
          <div className="header-branding">
            <img src="/logo.svg" alt="CertHub Logo" className="header-logo-svg" />
            <div className="header-titles">
              <h1 className="header-main-title">CertHub</h1>
              <span className="header-sub-tagline">Plataforma de estudio de certificaciones oficiales</span>
            </div>
          </div>

          <div className="header-search-bar">
            <Input
              type="search"
              placeholder="Buscar certificación o examen (AI Practitioner, SAA-C03...)"
              value={searchQuery}
              onChange={({ detail }) => setSearchQuery(detail.value)}
              clearAriaLabel="Limpiar"
            />
          </div>

          <div className="header-quick-actions">
            <Button
              variant="primary"
              iconName="external"
              href="/aws/ai-practitioner/"
            >
              Campus AI Practitioner
            </Button>
          </div>
        </div>
      </header>

      {/* ── 2. SINGLE SELECTOR TABS BAR (ICON + TITLE ONLY) ── */}
      <div className="provider-tabs-bar-container">
        <div className="provider-tabs-wrapper">
          {PROVIDERS_DATA.map(p => {
            const isSelected = selectedProviderId === p.id;
            return (
              <button
                key={p.id}
                className={`provider-tab-card ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedProviderId(p.id)}
              >
                <div className="tab-logo-img-wrapper">
                  <img src={p.logoSrc} alt={p.name} className="provider-img-fluid" />
                </div>
                <span className="tab-title-text">{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. DYNAMIC CONTENT BODY (UPDATES ACCORDING TO SELECTED TAB) ── */}
      <main className="main-providers-content-area">
        <div className="content-max-width">
          
          <Container
            header={
              <div className="provider-view-header">
                <div className="provider-header-left">
                  <div className="provider-header-img-box">
                    <img src={currentProvider.logoSrc} alt={currentProvider.name} className="provider-img-fluid" />
                  </div>
                  <h2 className="provider-view-title">{currentProvider.name}</h2>
                </div>
                <Badge color="blue">{filteredCerts.length} Certificaciones</Badge>
              </div>
            }
          >
            {filteredCerts.length > 0 ? (
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

                    {/* CERT DETAILS */}
                    <div className="badge-details-wrapper">
                      <div className="badge-code-row">
                        <span className="badge-exam-code">{cert.code}</span>
                        <StatusIndicator type={cert.statusType}>{cert.status}</StatusIndicator>
                      </div>

                      <h3 className="badge-full-title">{cert.fullName}</h3>
                      <p className="badge-summary-text">{cert.desc}</p>

                      <div className="badge-meta-pills">
                        <span>📚 {cert.domainsCount} Dominios</span>
                        <span>📝 {cert.examsCount} Exámenes</span>
                        <span>⚡ {cert.flashcardsCount} Flashcards</span>
                      </div>

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
            ) : (
              <div className="empty-search-box">
                <p>No se encontraron certificaciones que coincidan con <strong>"{searchQuery}"</strong> en {currentProvider.name}.</p>
                <Button onClick={() => setSearchQuery('')}>Limpiar Búsqueda</Button>
              </div>
            )}
          </Container>

          {/* ── FOOTER BAR ── */}
          <footer className="certhub-portal-footer">
            <p>
              © 2026 <strong>CertHub</strong> — Creado por{' '}
              <Link external href="https://www.linkedin.com/in/danielibabet">
                Daniel Ibáñez
              </Link>
              . Todos los logos pertenecen a sus respectivos proveedores (AWS, Microsoft Azure, Google Cloud, HashiCorp, GitHub).
            </p>
          </footer>

        </div>
      </main>

    </div>
  );
}
