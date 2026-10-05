import React, { useState } from 'react';
import {
  AppLayout,
  TopNavigation,
  Header,
  Container,
  Grid,
  Box,
  SpaceBetween,
  Button,
  Badge,
  Cards,
  Input,
  Select,
  SideNavigation,
  ContentLayout,
  Link,
  StatusIndicator,
  ColumnLayout,
  Alert
} from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

const CERTIFICATIONS_DATA = [
  {
    id: 'aws-aif-c01',
    provider: 'Amazon Web Services',
    providerKey: 'aws',
    providerBadgeColor: 'severity-high',
    code: 'AIF-C01',
    title: 'AWS Certified AI Practitioner',
    level: 'Foundational',
    levelColor: 'green',
    status: 'Disponible',
    statusType: 'success',
    url: '/aws/ai-practitioner/',
    active: true,
    domainsCount: 5,
    examsCount: 6,
    flashcardsCount: 127,
    description: 'Prepárate de forma integral para el examen oficial AIF-C01 con temario actualizado 2026. Cubre IA tradicional, Machine Learning, Fundamentos de IA Generativa, Aplicaciones con Foundation Models, IA Responsable y Seguridad en AWS.',
    tags: ['GenAI', 'Machine Learning', 'Amazon Bedrock', 'SageMaker', 'IA Responsable'],
    domains: [
      'D1: Fundamentos de IA y ML (20%)',
      'D2: Fundamentos de IA Generativa (24%)',
      'D3: Aplicaciones con Foundation Models (28%)',
      'D4: Directrices de IA Responsable (14%)',
      'D5: Seguridad y Privacidad en IA (14%)'
    ]
  },
  {
    id: 'aws-saa-c03',
    provider: 'Amazon Web Services',
    providerKey: 'aws',
    providerBadgeColor: 'severity-high',
    code: 'SAA-C03',
    title: 'AWS Certified Solutions Architect Associate',
    level: 'Associate',
    levelColor: 'blue',
    status: 'En Desarrollo',
    statusType: 'in-progress',
    url: '#',
    active: false,
    domainsCount: 4,
    examsCount: 6,
    flashcardsCount: 180,
    description: 'Diseño de arquitecturas en la nube resilientes, de alto rendimiento, seguras y optimizadas en costes. Domina EC2, S3, VPC, IAM, RDS, DynamoDB, Lambda, EKS y servicios de desacoplamiento.',
    tags: ['Cloud Architecture', 'Networking', 'High Availability', 'Security', 'Cost Optimization'],
    domains: [
      'D1: Arquitecturas Seguras (30%)',
      'D2: Arquitecturas Resilientes (26%)',
      'D3: Arquitecturas de Alto Rendimiento (24%)',
      'D4: Arquitecturas Optimizadas en Costes (20%)'
    ]
  },
  {
    id: 'gcp-ace',
    provider: 'Google Cloud',
    providerKey: 'gcp',
    providerBadgeColor: 'blue',
    code: 'GCP-ACE',
    title: 'Google Cloud Associate Cloud Engineer',
    level: 'Associate',
    levelColor: 'blue',
    status: 'Planificado',
    statusType: 'stopped',
    url: '#',
    active: false,
    domainsCount: 5,
    examsCount: 5,
    flashcardsCount: 150,
    description: 'Planificación, configuración, despliegue y monitorización de aplicaciones y recursos empresariales en GCP. Domina Compute Engine, Google Kubernetes Engine (GKE), Cloud Run, VPCs y Cloud IAM.',
    tags: ['Google Cloud', 'Kubernetes', 'Cloud Run', 'BigQuery', 'gcloud CLI'],
    domains: [
      'D1: Configuración del entorno de nube (17%)',
      'D2: Planificación y configuración de soluciones (17%)',
      'D3: Despliegue e implementación (25%)',
      'D4: Operación continua de soluciones (20%)',
      'D5: Configuración de acceso y seguridad (21%)'
    ]
  },
  {
    id: 'azure-az900',
    provider: 'Microsoft Azure',
    providerKey: 'azure',
    providerBadgeColor: 'severity-medium',
    code: 'AZ-900',
    title: 'Microsoft Certified: Azure Fundamentals',
    level: 'Foundational',
    levelColor: 'green',
    status: 'Planificado',
    statusType: 'stopped',
    url: '#',
    active: false,
    domainsCount: 3,
    examsCount: 4,
    flashcardsCount: 120,
    description: 'Conceptos fundamentales de computación en la nube, modelos de servicio, arquitectura global de Azure, gestión de identidad con Entra ID y gobernanza de costes.',
    tags: ['Microsoft Azure', 'Cloud Concepts', 'Entra ID', 'Governance', 'Cost Management'],
    domains: [
      'D1: Conceptos de Cloud (25-30%)',
      'D2: Arquitectura y Servicios de Azure (35-40%)',
      'D3: Gestión y Gobernanza en Azure (30-35%)'
    ]
  }
];

export default function App() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({ label: 'Todos los Proveedores', value: 'all' });
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState('catalog');

  const filteredCerts = CERTIFICATIONS_DATA.filter(cert => {
    const matchesProvider = selectedProvider.value === 'all' || cert.providerKey === selectedProvider.value;
    const matchesSearch = searchFilter === '' || 
      cert.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cert.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cert.tags.some(t => t.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesProvider && matchesSearch;
  });

  return (
    <div className="awsui-dark-mode" style={{ minHeight: '100vh', background: 'var(--awsui-color-background-layout-main, #0f1b2a)' }}>
      {/* ── 1. AWS CLOUD CONSOLE TOP NAVIGATION ── */}
      <TopNavigation
        identity={{
          href: '/',
          title: 'CertHub Management Console',
          logo: {
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff9900"><path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>',
            alt: 'CertHub Logo'
          }
        }}
        utilities={[
          {
            type: 'button',
            text: 'Campus AI Practitioner (AIF-C01)',
            iconName: 'external',
            href: '/aws/ai-practitioner/'
          },
          {
            type: 'menu-dropdown',
            text: 'Región: Global (Edge)',
            iconName: 'settings',
            items: [
              { id: 'es', text: 'certhub.es (Producción)' },
              { id: 'eu-west-1', text: 'Storage: Ireland (eu-west-1)' },
              { id: 'us-east-1', text: 'CDN / SSL: N. Virginia (us-east-1)' }
            ]
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

      {/* ── 2. AWS CONSOLE APPLAYOUT ── */}
      <AppLayout
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        navigation={
          <SideNavigation
            activeHref={activeTab}
            header={{ href: '/', text: 'CertHub Hub' }}
            onFollow={(e) => {
              e.preventDefault();
              if (e.detail.href.startsWith('/')) {
                window.location.href = e.detail.href;
              } else if (e.detail.href === 'aws-filter') {
                setSelectedProvider({ label: 'Amazon Web Services (AWS)', value: 'aws' });
              } else if (e.detail.href === 'gcp-filter') {
                setSelectedProvider({ label: 'Google Cloud Platform (GCP)', value: 'gcp' });
              } else if (e.detail.href === 'azure-filter') {
                setSelectedProvider({ label: 'Microsoft Azure', value: 'azure' });
              } else {
                setActiveTab(e.detail.href);
              }
            }}
            items={[
              { type: 'link', text: 'Catálogo de Certificaciones', href: 'catalog' },
              { type: 'link', text: 'AWS AI Practitioner (AIF-C01)', href: '/aws/ai-practitioner/' },
              { type: 'divider' },
              {
                type: 'section',
                text: 'Proveedores Cloud',
                items: [
                  { type: 'link', text: 'Amazon Web Services (2)', href: 'aws-filter' },
                  { type: 'link', text: 'Google Cloud Platform (1)', href: 'gcp-filter' },
                  { type: 'link', text: 'Microsoft Azure (1)', href: 'azure-filter' }
                ]
              },
              { type: 'divider' },
              {
                type: 'section',
                text: 'Recursos & Metodología',
                items: [
                  { type: 'link', text: 'Mapas Mentales con Zoom', href: 'catalog' },
                  { type: 'link', text: 'Simulacros de Examen', href: 'catalog' },
                  { type: 'link', text: 'Flashcards de Repaso', href: 'catalog' }
                ]
              }
            ]}
          />
        }
        toolsHide={true}
        content={
          <ContentLayout
            header={
              <SpaceBetween size="m">
                <Header
                  variant="h1"
                  description="Consola unificada para la preparación y dominio de certificaciones oficiales Cloud e Inteligencia Artificial."
                  actions={
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button
                        variant="primary"
                        iconName="external"
                        href="/aws/ai-practitioner/"
                      >
                        Ir a AI Practitioner
                      </Button>
                      <Button
                        iconName="share"
                        href="https://www.linkedin.com/in/danielibabet"
                        target="_blank"
                      >
                        Autor: Daniel Ibáñez
                      </Button>
                    </SpaceBetween>
                  }
                >
                  CertHub Console
                </Header>

                {/* ── KPI METRICS CONTAINER ── */}
                <Container>
                  <ColumnLayout columns={4} variant="text-grid">
                    <div>
                      <Box variant="awsui-key-label">Certificaciones Totales</Box>
                      <Box variant="p" fontSize="heading-l" fontWeight="bold" color="text-status-info">
                        4 Rutas
                      </Box>
                    </div>
                    <div>
                      <Box variant="awsui-key-label">Campus Activo 2026</Box>
                      <Box variant="p" fontSize="heading-l" fontWeight="bold" color="text-status-success">
                        AWS AI Practitioner
                      </Box>
                    </div>
                    <div>
                      <Box variant="awsui-key-label">Recursos de Estudio</Box>
                      <Box variant="p" fontSize="heading-l" fontWeight="bold">
                        127+ Flashcards · 6 Tests
                      </Box>
                    </div>
                    <div>
                      <Box variant="awsui-key-label">Acceso a la Plataforma</Box>
                      <Box variant="p" fontSize="heading-l" fontWeight="bold" color="text-status-warning">
                        100% Gratuito
                      </Box>
                    </div>
                  </ColumnLayout>
                </Container>
              </SpaceBetween>
            }
          >
            <SpaceBetween size="l">
              
              {/* ── ANNOUNCEMENT ALERT ── */}
              <Alert
                statusIconAriaLabel="Info"
                type="info"
                header="Nuevo temario oficial AIF-C01 2026 ya disponible"
                action={
                  <Button href="/aws/ai-practitioner/" variant="primary" iconName="external">
                    Estudiar Ahora
                  </Button>
                }
              >
                Ya puedes acceder al mapa interactivo de <strong>AWS Certified AI Practitioner</strong> con definiciones detalladas, vídeos explicativos, 6 exámenes de prueba y 127 flashcards con autoevaluación.
              </Alert>

              {/* ── CERTIFICATION CARDS COLLECTION ── */}
              <Cards
                cardDefinition={{
                  header: item => (
                    <SpaceBetween size="xs">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Badge color={item.providerBadgeColor}>{item.provider.toUpperCase()}</Badge>
                        <StatusIndicator type={item.statusType}>{item.status}</StatusIndicator>
                      </div>
                      <div style={{ marginTop: '6px' }}>
                        <Box fontSize="body-s" fontWeight="bold" color="text-status-info">
                          {item.code} · Nivel {item.level}
                        </Box>
                        <Box fontSize="heading-m" fontWeight="bold">
                          {item.title}
                        </Box>
                      </div>
                    </SpaceBetween>
                  ),
                  sections: [
                    {
                      id: 'description',
                      content: item => (
                        <Box variant="p" color="text-body-secondary" fontSize="body-s">
                          {item.description}
                        </Box>
                      )
                    },
                    {
                      id: 'metrics',
                      header: 'Contenido Incluido',
                      content: item => (
                        <ColumnLayout columns={3} variant="text-grid">
                          <div>
                            <Box variant="awsui-key-label">Dominios</Box>
                            <Box fontWeight="bold">{item.domainsCount}</Box>
                          </div>
                          <div>
                            <Box variant="awsui-key-label">Exámenes</Box>
                            <Box fontWeight="bold">{item.examsCount}</Box>
                          </div>
                          <div>
                            <Box variant="awsui-key-label">Flashcards</Box>
                            <Box fontWeight="bold">{item.flashcardsCount}</Box>
                          </div>
                        </ColumnLayout>
                      )
                    },
                    {
                      id: 'domains',
                      header: 'Desglose del Examen',
                      content: item => (
                        <SpaceBetween size="xxs">
                          {item.domains.map((dom, idx) => (
                            <Box key={idx} fontSize="body-xs" color="text-body-default">
                              • {dom}
                            </Box>
                          ))}
                        </SpaceBetween>
                      )
                    },
                    {
                      id: 'tags',
                      content: item => (
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                          {item.tags.map((t, idx) => (
                            <Badge key={idx} color="grey">{t}</Badge>
                          ))}
                        </div>
                      )
                    },
                    {
                      id: 'action',
                      content: item => (
                        <div style={{ marginTop: '12px' }}>
                          {item.active ? (
                            <Button variant="primary" iconName="external" iconAlign="right" href={item.url} fullWidth>
                              Abrir Campus Interactivo
                            </Button>
                          ) : (
                            <Button disabled fullWidth>
                              {item.status} (Próximamente)
                            </Button>
                          )}
                        </div>
                      )
                    }
                  ]
                }}
                cardsPerRow={[
                  { cards: 1 },
                  { minWidth: 700, cards: 2 },
                  { minWidth: 1100, cards: 3 }
                ]}
                items={filteredCerts}
                loadingText="Cargando certificaciones..."
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No se encontraron certificaciones</b>
                    <Box padding={{ bottom: 's' }} variant="p" color="inherit">
                      No hay cursos que coincidan con los filtros seleccionados.
                    </Box>
                    <Button onClick={() => { setSearchFilter(''); setSelectedProvider({ label: 'Todos los Proveedores', value: 'all' }); }}>
                      Limpiar Filtros
                    </Button>
                  </Box>
                }
                header={
                  <Header
                    counter={`(${filteredCerts.length})`}
                    description="Explora las certificaciones oficiales disponibles y en desarrollo con simuladores interactivos."
                  >
                    Catálogo de Rutas
                  </Header>
                }
                filter={
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '260px' }}>
                      <Input
                        type="search"
                        placeholder="Buscar por nombre, código (AIF-C01, SAA-C03...) o tecnología..."
                        value={searchFilter}
                        onChange={({ detail }) => setSearchFilter(detail.value)}
                        clearAriaLabel="Limpiar búsqueda"
                      />
                    </div>
                    <div style={{ width: '240px' }}>
                      <Select
                        selectedOption={selectedProvider}
                        onChange={({ detail }) => setSelectedProvider(detail.selectedOption)}
                        options={[
                          { label: 'Todos los Proveedores', value: 'all' },
                          { label: 'Amazon Web Services (AWS)', value: 'aws' },
                          { label: 'Google Cloud Platform (GCP)', value: 'gcp' },
                          { label: 'Microsoft Azure', value: 'azure' }
                        ]}
                      />
                    </div>
                  </div>
                }
              />

              {/* ── METHODOLOGY CONTAINER ── */}
              <Container
                header={
                  <Header
                    variant="h2"
                    description="Cómo funciona el método de aprendizaje activo de CertHub"
                  >
                    Metodología de Aprendizaje
                  </Header>
                }
              >
                <ColumnLayout columns={3} variant="text-grid">
                  <div>
                    <Box fontSize="heading-s" fontWeight="bold" color="text-status-info">
                      1. Mapas Mentales Interactivos
                    </Box>
                    <Box variant="p" color="text-body-secondary" fontSize="body-s">
                      Estructura visual de todo el temario oficial dividida por dominios porcentuales. Haz zoom, filtra conceptos clave y accede a resúmenes y vídeos explicativos directos.
                    </Box>
                  </div>
                  <div>
                    <Box fontSize="heading-s" fontWeight="bold" color="text-status-success">
                      2. Simulacros Reales con Feedback
                    </Box>
                    <Box variant="p" color="text-body-secondary" fontSize="body-s">
                      Baterías de preguntas redactadas según el formato oficial del examen. Cada opción incluye justificación detallada de por qué es correcta o incorrecta.
                    </Box>
                  </div>
                  <div>
                    <Box fontSize="heading-s" fontWeight="bold" color="text-status-warning">
                      3. Repaso Activo con Flashcards
                    </Box>
                    <Box variant="p" color="text-body-secondary" fontSize="body-s">
                      Tarjetas nemotécnicas organizadas por dominio para consolidar servicios, límites, diferencias clave y algoritmos antes del día del examen.
                    </Box>
                  </div>
                </ColumnLayout>
              </Container>

              {/* ── FOOTER BAR ── */}
              <Box textAlign="center" padding={{ top: 'l', bottom: 'l' }} color="text-body-secondary" fontSize="body-s">
                CertHub Management Console © 2026 — Diseñado con Cloudscape Design System oficial de AWS. Desarrollado por{' '}
                <Link external href="https://www.linkedin.com/in/danielibabet">
                  Daniel Ibáñez
                </Link>
                .
              </Box>

            </SpaceBetween>
          </ContentLayout>
        }
      />
    </div>
  );
}
