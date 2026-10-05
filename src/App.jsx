import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Badge,
  Input,
  Link,
  StatusIndicator
} from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

// ── PROVIDERS DATA (NOW WITH REAL BADGES DIRECTLY FROM IMGS FOLDER) ──
const PROVIDERS_DATA = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    shortName: 'AWS',
    logoSrc: '/aws/Amazon_Web_Services_Logo.svg.webp',
    invertLogo: false,
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
        badgeImg: '/aws/ai-practitioner.png',
        domainsCount: 5,
        examsCount: 6,
        flashcardsCount: 127,
        desc: 'Fundamentos de IA y ML, IA Generativa, aplicaciones con Foundation Models (Bedrock), IA Responsable y Seguridad en AWS.'
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
        badgeImg: '/aws/cloud-practitioner.png',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 150,
        desc: 'Visión general de la nube de AWS, servicios principales, seguridad compartida, facturación y modelos de precios.'
      },
      {
        id: 'ai-business',
        code: 'AIB-C01',
        title: 'AI Business Strategist',
        fullName: 'AWS Certified AI Business Strategist',
        level: 'FOUNDATIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/ai-business-strategist.png',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 130,
        desc: 'Estrategia de adopción de IA empresarial, casos de uso de negocio y retorno de inversión en tecnologías de IA.'
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
        badgeImg: '/aws/solutions-architect.png',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 180,
        desc: 'Diseño de arquitecturas resilientes, de alto rendimiento, seguras y optimizadas en costes en la nube de Amazon.'
      },
      {
        id: 'dva-c02',
        code: 'DVA-C02',
        title: 'Developer Associate',
        fullName: 'AWS Certified Developer Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/developer.png',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 140,
        desc: 'Desarrollo, pruebas y despliegue de aplicaciones nativas en la nube utilizando servicios serverless de AWS.'
      },
      {
        id: 'data-engineer',
        code: 'DEA-C01',
        title: 'Data Engineer Associate',
        fullName: 'AWS Certified Data Engineer Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/data-engineer.png',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 160,
        desc: 'Ingesta, transformación, pipelines de datos y almacenamiento analítico escalable con Glue, EMR, Redshift y Athena.'
      },
      {
        id: 'mle-c01',
        code: 'MLE-C01',
        title: 'Machine Learning Engineer',
        fullName: 'AWS Certified Machine Learning Engineer Associate',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/machine-learning-engineer.png',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 150,
        desc: 'Puesta en producción de modelos de ML, pipelines de MLOps con SageMaker y monitorización continua.'
      },
      {
        id: 'genai-dev',
        code: 'AIF-DEV',
        title: 'Generative AI Developer',
        fullName: 'AWS Certified Generative AI Developer',
        level: 'ASSOCIATE',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/generative-ai-developer.png',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 145,
        desc: 'Construcción de aplicaciones GenAI avanzadas, embeddings, RAG, bases vectoriales y agentes autónomos.'
      },
      {
        id: 'sap-c02',
        code: 'SAP-C02',
        title: 'Solutions Architect Professional',
        fullName: 'AWS Certified Solutions Architect Professional',
        level: 'PROFESSIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/solutions-architect-professional.png',
        domainsCount: 4,
        examsCount: 6,
        flashcardsCount: 200,
        desc: 'Estrategias complejas de arquitectura multi-cuenta, migraciones empresariales y optimización global avanzada.'
      },
      {
        id: 'dop-c02',
        code: 'DOP-C02',
        title: 'DevOps Engineer Professional',
        fullName: 'AWS Certified DevOps Engineer Professional',
        level: 'PROFESSIONAL',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/devops-engineer.png',
        domainsCount: 6,
        examsCount: 6,
        flashcardsCount: 190,
        desc: 'Aprovisionamiento continuo, automatización con IaC, observabilidad y resiliencia en sistemas distribuidos.'
      },
      {
        id: 'ans-c01',
        code: 'ANS-C01',
        title: 'Advanced Networking Specialty',
        fullName: 'AWS Certified Advanced Networking Specialty',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/advanced-networking.png',
        domainsCount: 4,
        examsCount: 5,
        flashcardsCount: 160,
        desc: 'Diseño e implementación de arquitecturas de red complejas, Direct Connect, Transit Gateway e híbridos.'
      },
      {
        id: 'scs-c02',
        code: 'SCS-C02',
        title: 'Security Specialty',
        fullName: 'AWS Certified Security Specialty',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/aws/security.png',
        domainsCount: 5,
        examsCount: 6,
        flashcardsCount: 170,
        desc: 'Protección integral de infraestructuras, gestión de claves KMS, detección de amenazas con GuardDuty e IAM avanzado.'
      }
    ]
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    shortName: 'Microsoft Azure',
    logoSrc: '/azure/azure.png',
    invertLogo: false,
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
        desc: 'Conceptos de nube, servicios de computación, red, almacenamiento, seguridad y gestión de costes en Azure.'
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
        desc: 'Principios de IA, Computer Vision, Procesamiento de Lenguaje Natural (NLP) y Azure OpenAI Services.'
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
        desc: 'Implementación, administración y monitorización de identidades, gobierno, almacenamiento y redes virtuales.'
      }
    ]
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    shortName: 'Google Cloud',
    logoSrc: '/gcp/Google_Cloud_icon_(2026).svg.webp',
    invertLogo: false,
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
        desc: 'Transformación digital, conceptos clave de Google Cloud y cómo los productos impulsan organizaciones.'
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
        desc: 'Despliegue y monitorización de aplicaciones, gestión de Kubernetes (GKE), Cloud Run y configuración de IAM.'
      }
    ]
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    shortName: 'HashiCorp',
    logoSrc: '/hashicorp/HashiCorp_Logo_no_text.png',
    invertLogo: true, // Invertir color para que quede en blanco puro
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
        badgeImg: '/hashicorp/terraform-associate.png',
        domainsCount: 9,
        examsCount: 6,
        flashcardsCount: 160,
        desc: 'Conceptos de IaC, sintaxis HCL, estado de Terraform, módulos, variables y flujos de trabajo profesionales.'
      },
      {
        id: 'terraform-advanced',
        code: 'TA-ADV',
        title: 'Authoring & Operations',
        fullName: 'HashiCorp Certified: Authoring & Operations Advanced',
        level: 'ADVANCED',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/hashicorp/authoring-operations-advanced.png',
        domainsCount: 6,
        examsCount: 5,
        flashcardsCount: 140,
        desc: 'Estructuración modular compleja, testing de código de infraestructura y CI/CD avanzado con Terraform.'
      }
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    shortName: 'GitHub',
    logoSrc: '/github/25231.png',
    invertLogo: true, // Invertir color para que quede en blanco puro
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
        badgeImg: '/github/actions.png',
        domainsCount: 5,
        examsCount: 5,
        flashcardsCount: 140,
        desc: 'Automatización de flujos de trabajo CI/CD, creación de custom actions, runners autogestionados y seguridad.'
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
        badgeImg: '/github/foundations.png',
        domainsCount: 4,
        examsCount: 4,
        flashcardsCount: 120,
        desc: 'Control de versiones con Git, colaboración con Issues y Pull Requests, Markdown y gestión de proyectos.'
      },
      {
        id: 'gh-security',
        code: 'GH-SEC',
        title: 'Advanced Security',
        fullName: 'GitHub Advanced Security Certification',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/github/advanced-security.png',
        domainsCount: 5,
        examsCount: 5,
        flashcardsCount: 135,
        desc: 'Code scanning con CodeQL, secret scanning, gestión de vulnerabilidades con Dependabot y seguridad en la cadena de suministro.'
      },
      {
        id: 'gh-copilot',
        code: 'GH-COP',
        title: 'GitHub Copilot',
        fullName: 'GitHub Copilot Certification',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/github/copilot.png',
        domainsCount: 4,
        examsCount: 4,
        flashcardsCount: 110,
        desc: 'Asistencia con IA en el ciclo de vida del desarrollo, prompt engineering para código y mejores prácticas de productividad.'
      },
      {
        id: 'gh-admin',
        code: 'GH-ADM',
        title: 'GitHub Administration',
        fullName: 'GitHub Administration Certification',
        level: 'SPECIALTY',
        status: 'PLANIFICADO',
        statusType: 'stopped',
        active: false,
        url: '#',
        badgeImg: '/github/admin.png',
        domainsCount: 5,
        examsCount: 5,
        flashcardsCount: 130,
        desc: 'Gestión de organizaciones empresariales, políticas de acceso SAML/SSO, auditoría y gobierno en GitHub Enterprise.'
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
      
      {/* ── 1. UNIFIED SINGLE TOP BAR (BIGGER LOGO LEFT | TABS CENTER | SEARCH RIGHT) ── */}
      <header className="certhub-unified-header">
        <div className="header-unified-inner">
          
          {/* LEFT: CERTHUB LOGO (BIGGER & FULL LEFT) + TAGLINE */}
          <div className="header-brand-box">
            <img src="/logo.svg" alt="CertHub Logo" className="header-brand-logo" />
            <div className="header-brand-texts">
              <span className="header-brand-name">CertHub</span>
              <span className="header-brand-tagline">Plataforma de estudio de certificaciones oficiales</span>
            </div>
          </div>

          {/* CENTER: PROVIDER TABS */}
          <nav className="header-provider-tabs">
            {PROVIDERS_DATA.map(p => {
              const isSelected = selectedProviderId === p.id;
              return (
                <button
                  key={p.id}
                  className={`provider-tab-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedProviderId(p.id)}
                  title={p.name}
                >
                  <div className="pill-icon-wrapper">
                    <img 
                      src={p.logoSrc} 
                      alt={p.name} 
                      className={`provider-img-fluid ${p.invertLogo ? 'invert-white' : ''}`} 
                    />
                  </div>
                  <span className="pill-label-text">{p.name}</span>
                </button>
              );
            })}
          </nav>

          {/* RIGHT: SEARCH BAR */}
          <div className="header-search-box">
            <Input
              type="search"
              placeholder="Buscar certificación o examen..."
              value={searchQuery}
              onChange={({ detail }) => setSearchQuery(detail.value)}
              clearAriaLabel="Limpiar"
            />
          </div>

        </div>
      </header>

      {/* ── 2. DYNAMIC CONTENT BODY ── */}
      <main className="main-providers-content-area">
        <div className="content-max-width">
          
          <Container
            header={
              <div className="provider-view-header">
                <div className="provider-header-left">
                  <div className="provider-header-img-box">
                    <img 
                      src={currentProvider.logoSrc} 
                      alt={currentProvider.name} 
                      className={`provider-img-fluid ${currentProvider.invertLogo ? 'invert-white' : ''}`} 
                    />
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
                    
                    {/* BADGE VISUAL (OFFICIAL PNG BADGE IF PRESENT) */}
                    <div className="badge-visual-wrapper">
                      {cert.badgeImg ? (
                        <img src={cert.badgeImg} alt={cert.title} className="badge-official-png" />
                      ) : (
                        <div className="badge-placeholder-box">
                          <span className="badge-placeholder-code">{cert.code}</span>
                          <span className="badge-placeholder-level">{cert.level}</span>
                        </div>
                      )}
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

          {/* ── FOOTER ── */}
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
