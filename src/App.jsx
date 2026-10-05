import React from 'react';
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
  Link
} from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';

const CERTIFICATIONS = [
  {
    id: 'aif-c01',
    provider: 'AWS Certified',
    providerColor: 'severity-high',
    status: 'Disponible',
    statusType: 'success',
    code: 'AIF-C01',
    title: 'AWS Certified AI Practitioner',
    description: 'Domina los fundamentos de Inteligencia Artificial, Machine Learning y GenAI en AWS con mapa interactivo y simulacros.',
    features: [
      'Mapa Mental Interactivo con Zoom y Filtros',
      '6 Exámenes de Práctica con Explicaciones',
      '127 Flashcards con Modo de Estudio Activo'
    ],
    url: '/aws/ai-practitioner/',
    active: true
  },
  {
    id: 'saa-c03',
    provider: 'AWS Certified',
    providerColor: 'severity-high',
    status: 'Próximamente',
    statusType: 'stopped',
    code: 'SAA-C03',
    title: 'AWS Solutions Architect Associate',
    description: 'Aprende a diseñar soluciones resilientes, seguras, de alto rendimiento y optimizadas en costes en la nube de Amazon.',
    features: [
      'Mapas Conceptuales de Computación, Storage y Red',
      'Diagramas de Arquitectura y Patrones de Diseño',
      'Simulacros de Examen con Casos de Escenario'
    ],
    url: '#',
    active: false
  },
  {
    id: 'gcp-ace',
    provider: 'Google Cloud',
    providerColor: 'blue',
    status: 'Próximamente',
    statusType: 'stopped',
    code: 'GCP-ACE',
    title: 'Associate Cloud Engineer',
    description: 'Despliegue de aplicaciones, monitorización de operaciones y gestión de soluciones empresariales en Google Cloud Platform.',
    features: [
      'Temario completo: GKE, Compute Engine y BigQuery',
      'Chuletas y Comandos de la CLI gcloud',
      'Baterías de Preguntas con Métricas'
    ],
    url: '#',
    active: false
  }
];

export default function App() {
  return (
    <div className="awsui-dark-mode" style={{ minHeight: '100vh', background: 'var(--awsui-color-background-layout-main, #0f1b2a)' }}>
      {/* ── TOP NAVIGATION ── */}
      <TopNavigation
        identity={{
          href: '/',
          title: 'CertHub',
          logo: {
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff9900"><path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>',
            alt: 'CertHub Logo'
          }
        }}
        utilities={[
          {
            type: 'button',
            text: 'AWS AI Practitioner',
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

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 64px' }}>
        <SpaceBetween size="xxl">
          
          {/* HERO BANNER */}
          <Box textAlign="center" padding={{ top: 'l', bottom: 'l' }}>
            <SpaceBetween size="l">
              <Badge color="blue">PLATAFORMA DE CERTIFICACIONES CLOUD & IA</Badge>
              <h1 className="hero-gradient-title">
                Domina las Certificaciones Oficiales con <span>CertHub</span>
              </h1>
              <Box variant="p" color="text-body-secondary" fontSize="body-l">
                Plataforma interactiva de estudio: mapas conceptuales navegables, baterías de preguntas reales explicadas y flashcards inteligentes.
              </Box>

              {/* STATS BAR */}
              <Grid gridDefinition={[{ colspan: { default: 6, s: 3 } }, { colspan: { default: 6, s: 3 } }, { colspan: { default: 6, s: 3 } }, { colspan: { default: 6, s: 3 } }]}>
                <div className="stat-box">
                  <div className="stat-num">100%</div>
                  <div className="stat-desc">Temario Oficial</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">127+</div>
                  <div className="stat-desc">Flashcards</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">6</div>
                  <div className="stat-desc">Simulacros Examen</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">Gratis</div>
                  <div className="stat-desc">Acceso Total</div>
                </div>
              </Grid>
            </SpaceBetween>
          </Box>

          {/* CERTIFICATIONS CATALOG */}
          <SpaceBetween size="l">
            <Header variant="h2" description="Selecciona la certificación que estás preparando para acceder al campus interactivo">
              Certificaciones Disponibles
            </Header>

            <Grid gridDefinition={[{ colspan: { default: 12, m: 4 } }, { colspan: { default: 12, m: 4 } }, { colspan: { default: 12, m: 4 } }]}>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="cert-card-wrapper">
                  <Container
                    header={
                      <Header
                        variant="h3"
                        info={<Badge color={cert.statusType === 'success' ? 'green' : 'grey'}>{cert.status.toUpperCase()}</Badge>}
                      >
                        <SpaceBetween size="xxs">
                          <Box fontSize="body-s" fontWeight="bold" color="text-status-info">
                            {cert.code} · {cert.provider}
                          </Box>
                          <span>{cert.title}</span>
                        </SpaceBetween>
                      </Header>
                    }
                    footer={
                      cert.active ? (
                        <Button variant="primary" iconAlign="right" iconName="external" href={cert.url} fullWidth>
                          Comenzar a Estudiar
                        </Button>
                      ) : (
                        <Button disabled fullWidth>
                          En Desarrollo
                        </Button>
                      )
                    }
                  >
                    <SpaceBetween size="m">
                      <Box variant="p" color="text-body-secondary">
                        {cert.description}
                      </Box>
                      <SpaceBetween size="xs">
                        {cert.features.map((feat, idx) => (
                          <Box key={idx} fontSize="body-s" color="text-body-default">
                            ✓ {feat}
                          </Box>
                        ))}
                      </SpaceBetween>
                    </SpaceBetween>
                  </Container>
                </div>
              ))}
            </Grid>
          </SpaceBetween>

          {/* FOOTER */}
          <Box textAlign="center" padding={{ top: 'xxl' }} color="text-body-secondary" fontSize="body-s">
            © 2026 <strong>CertHub</strong> — Desarrollado por{' '}
            <Link external href="https://www.linkedin.com/in/danielibabet">
              Daniel Ibáñez
            </Link>
          </Box>

        </SpaceBetween>
      </div>
    </div>
  );
}
