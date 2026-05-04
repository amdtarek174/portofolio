import { useState } from 'react';

const ACCENT = '#0f766e';
const ACCENT_DARK = '#2dd4bf';

const themes = {
  light: {
    accent: ACCENT,
    accentLight: '#ccfbf1',
    bg: '#f8fafc',
    card: '#ffffff',
    text: '#1e293b',
    textMuted: '#64748b',
    border: '#e2e8f0',
    techBg: '#f1f5f9',
    heroGradient: `linear-gradient(135deg, ${ACCENT} 0%, #134e4a 100%)`,
  },
  dark: {
    accent: ACCENT_DARK,
    accentLight: '#134e4a',
    bg: '#0f172a',
    card: '#1e293b',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    border: '#334155',
    techBg: '#334155',
    heroGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  },
};

type Theme = typeof themes.light;

const skills = [
  'Python', 'SQL', 'AWS', 'Amazon Bedrock', 'QuickSight', 'Redshift',
  'RAG Pipelines', 'AI Agent Orchestration', 'Polars / Pandas', 'Streamlit',
  'ETL & Star Schema', 'Prompt Engineering', 'MCP', 'S3 / Lambda', 'Git',
  'DAX', 'Bash', 'Linux',
];

const stats = [
  { value: '$3.3M+', label: 'Total Savings' },
  { value: '1.8M+', label: 'Records Processed' },
  { value: '50%', label: 'Reporting Time Cut' },
  { value: '100%', label: 'Tool Adoption' },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: 'Multi-Agent AI Orchestration Pipeline',
    description:
      'End-to-end AI automation replacing ~4 hours of manual work. Three specialized agents handle savings calculation, operations analysis, and executive report generation with full RAG integration.',
    tech: ['Amazon Bedrock', 'MCP', 'RAG', 'Python', 'Prompt Engineering'],
    demoLink: 'https://drive.google.com/drive/folders/1QL2qj8nIVfm6pEgccJ7EuIC2aqlSHC48?usp=drive_link',
  },
  {
    title: 'Automated Business Review Generator',
    description:
      'Two-step intelligent pipeline: a Polars app processes 200K records into 12 pivot-table sheets, then an AI chatbot generates complete Business Review documents. Achieved 100% adoption among 10 AMET researchers.',
    tech: ['Python (Polars)', 'Amazon Bedrock', 'MCP (Outlook)', 'RAG'],
  },
  {
    title: 'AMET Seller Scorecard Dashboard',
    description:
      'Comprehensive seller performance dashboard across damages, concessions, compliance & PO accuracy. Star schema with 4-table ETL processing 1.8M records, optimized from 17 to 8 min runtime.',
    tech: ['QuickSight', 'Redshift SQL', 'Star Schema', 'ETL Optimization'],
    demoLink: 'https://drive.google.com/drive/folders/1jq2OyXUL9nLm01fx4-N1EpLhVrkzrLwR?usp=drive_link',
  },
  {
    title: 'Streamlit S3 Data Ingestion Platform',
    description:
      'GUI web app for uploading and processing Inventory Check files with auto-detection, data validation, S3 overwrite management, and daily dashboard auto-updates. Eliminated 30 min of manual processing.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Boto3', 'AWS S3'],
    demoLink: 'https://drive.google.com/drive/folders/1WylLyFntD5I2VBSPDZaUvTen3eoMhky_?usp=drive_link',
  },
  {
    title: 'Network Loss Unified Analytics Suite',
    description:
      'Consolidated 3 separate dashboards into a unified reporting interface with rolling 8-week metrics and an S3-integrated real-time USD savings tracker.',
    tech: ['QuickSight', 'AWS S3', 'Redshift SQL', 'Python'],
  },
];

const experience = [
  {
    role: 'Business Analyst',
    company: 'Amazon',
    period: 'Aug 2025 – Apr 2026',
    highlights: [
      'Designed the AMET Seller Scorecard (1.8M+ records, star schema) reducing ETL runtime from 17 to 8 min',
      'Consolidated 4 data sources across 3 dashboards into a unified Network Loss Metrics dashboard — reporting prep from 20 min to under 1 min',
      'Built automated savings tracking dashboard with S3 ingestion, eliminating all manual Excel processing',
      'Engineered AI-powered reporting assistant with Outlook MCP & RAG, cutting review prep from 1+ hour to 15–20 min',
    ],
  },
  {
    role: 'Research Analyst & Operations Supervisor',
    company: 'Amazon',
    period: 'Dec 2024 – Aug 2025',
    highlights: [
      'Identified process improvements generating ~$9K in direct savings through inventory security optimization, contributing to over $3.3M in total tracked savings initiatives',
      'Initiated SQL-based Inventory Disposition Correction report enabling €2.9M annual saving in EU region',
      'Led training programs for 40 dock associates, restoring seller coaching compliance to 100%',
    ],
  },
];

const SectionTitle = ({ children, t }: { children: string; t: Theme }) => (
  <div style={{ marginBottom: 24 }}>
    <h2 style={{ fontSize: 22, fontWeight: 700, color: t.text, margin: 0, letterSpacing: '-0.3px' }}>
      {children}
    </h2>
    <div style={{ width: 40, height: 3, background: t.accent, borderRadius: 2, marginTop: 8 }} />
  </div>
);

const SkillTag = ({ label, t }: { label: string; t: Theme }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '5px 14px',
      fontSize: 13,
      fontWeight: 500,
      background: t.accentLight,
      color: t.accent,
      borderRadius: 20,
      margin: '0 6px 8px 0',
    }}
  >
    {label}
  </span>
);

export const App = () => {
  const [activeSection, setActiveSection] = useState<'experience' | 'projects'>('experience');
  const [dark, setDark] = useState(false);
  const t = dark ? themes.dark : themes.light;

  return (
    <div style={{ background: t.bg, minHeight: '100vh', fontFamily: "'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", transition: 'background 0.3s' }}>
      {/* Hero */}
      <div
        style={{
          background: t.heroGradient,
          color: '#fff',
          padding: '56px 24px 48px',
          textAlign: 'center',
          position: 'relative',
          transition: 'background 0.3s',
        }}
      >
        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            padding: '8px 16px',
            borderRadius: 24,
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>

        <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
          Ahmed Tarek Abdellatif
        </h1>
        <p style={{ fontSize: 17, opacity: 0.9, margin: '10px 0 0', fontWeight: 400 }}>
          Business Analyst & BI Professional · AI Automation Engineer
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 20,
            marginTop: 20,
            fontSize: 14,
            opacity: 0.85,
          }}
        >
          <span>📍 Cairo, Egypt</span>
          <span>✉️ ahmedtarek1754@gmail.com</span>
          <span>📞 +20 1281532200</span>
        </div>
        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 22, flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/in/ahmed-tarek-abdellatif-22a3bb233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 22px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
            }}
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://drive.google.com/drive/folders/1s7WlofJp2GTtVtbARs7-d1W7y6C9bXjy?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 22px',
              borderRadius: 8,
              background: '#fff',
              color: ACCENT,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            📂 Full Portfolio
          </a>
        </div>
        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 32,
            marginTop: 36,
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px' }}>
        {/* About */}
        <div
          style={{
            background: t.card,
            borderRadius: 12,
            padding: 28,
            border: `1px solid ${t.border}`,
            marginBottom: 28,
            transition: 'all 0.3s',
          }}
        >
          <SectionTitle t={t}>About</SectionTitle>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: t.textMuted, margin: 0 }}>
            Results-driven Business Analyst and BI professional with deep operational roots in
            Amazon's fulfillment network. Proven track record of designing high-impact dashboards,
            building AI-powered automation pipelines, and delivering measurable financial outcomes.
            Combines strong SQL and Python engineering skills with hands-on experience in GenAI, RAG
            pipelines, and multi-agent AI systems to transform raw operational data into
            executive-ready insights.
          </p>
        </div>

        {/* Toggle: Experience / Projects */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            marginBottom: 28,
            background: t.card,
            borderRadius: 10,
            border: `1px solid ${t.border}`,
            overflow: 'hidden',
            transition: 'all 0.3s',
          }}
        >
          {(['experience', 'projects'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              style={{
                flex: 1,
                padding: '14px 0',
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeSection === s ? t.accent : 'transparent',
                color: activeSection === s ? '#fff' : t.textMuted,
                transition: 'all 0.2s',
              }}
            >
              {s === 'experience' ? '💼 Experience' : '🚀 Projects'}
            </button>
          ))}
        </div>

        {/* Experience */}
        {activeSection === 'experience' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {experience.map((exp) => (
              <div
                key={exp.role}
                style={{
                  background: t.card,
                  borderRadius: 12,
                  padding: 28,
                  border: `1px solid ${t.border}`,
                  borderLeft: `4px solid ${t.accent}`,
                  transition: 'all 0.3s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', gap: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: t.text, margin: 0 }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: 14, color: t.accent, margin: '4px 0 0', fontWeight: 600 }}>
                      {exp.company}
                    </p>
                  </div>
                  <span style={{ fontSize: 13, color: t.textMuted, whiteSpace: 'nowrap' }}>
                    {exp.period}
                  </span>
                </div>
                <ul style={{ margin: '14px 0 0', paddingLeft: 18, listStyle: 'disc' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: 14, lineHeight: 1.7, color: t.textMuted, marginBottom: 6 }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {activeSection === 'projects' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 20 }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: t.card,
                  borderRadius: 12,
                  padding: 24,
                  border: `1px solid ${t.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, margin: '0 0 10px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: t.textMuted, margin: '0 0 14px', flex: 1 }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
                  {p.tech.map((techItem) => (
                    <span
                      key={techItem}
                      style={{
                        fontSize: 11,
                        padding: '3px 10px',
                        background: t.techBg,
                        color: t.textMuted,
                        borderRadius: 12,
                        fontWeight: 500,
                      }}
                    >
                      {techItem}
                    </span>
                  ))}
                  {p.demoLink && (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 12,
                        padding: '3px 12px',
                        background: t.accent,
                        color: '#fff',
                        borderRadius: 12,
                        fontWeight: 600,
                        textDecoration: 'none',
                        marginLeft: 'auto',
                      }}
                    >
                      ▶ Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div
          style={{
            background: t.card,
            borderRadius: 12,
            padding: 28,
            border: `1px solid ${t.border}`,
            marginTop: 28,
            transition: 'all 0.3s',
          }}
        >
          <SectionTitle t={t}>Skills & Technologies</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {skills.map((s) => (
              <SkillTag key={s} label={s} t={t} />
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
          <div
            style={{
              background: t.card,
              borderRadius: 12,
              padding: 28,
              border: `1px solid ${t.border}`,
              transition: 'all 0.3s',
            }}
          >
            <SectionTitle t={t}>Education</SectionTitle>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, margin: 0 }}>
              Cairo University — Faculty of Engineering
            </h3>
            <p style={{ fontSize: 13.5, color: t.textMuted, margin: '6px 0 0' }}>
              B.Sc. Computer Engineering · Data Science & AI
            </p>
            <p style={{ fontSize: 13.5, color: t.textMuted, margin: '4px 0 0' }}>
              Sept 2019 – June 2024 · GPA: 3.6 / 4.0 (Honors)
            </p>
          </div>
          <div
            style={{
              background: t.card,
              borderRadius: 12,
              padding: 28,
              border: `1px solid ${t.border}`,
              transition: 'all 0.3s',
            }}
          >
            <SectionTitle t={t}>Certifications</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: t.textMuted }}>AWS Certified Cloud Practitioner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: t.textMuted }}>Stepping Up to Leadership (SUTL) — AMET GOLD</span>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1DDTWJOrmmqVPJmfqR4Vi9mjAXJ_Z6Pm6?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 8,
                  padding: '7px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  background: t.accent,
                  color: '#fff',
                  borderRadius: 8,
                  textDecoration: 'none',
                  width: 'fit-content',
                  cursor: 'pointer',
                }}
              >
                📄 View Certificates
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 40, paddingTop: 20, borderTop: `1px solid ${t.border}` }}>
          <p style={{ fontSize: 13, color: t.textMuted, margin: 0 }}>
            © 2025 Ahmed Tarek Abdellatif · Built with ☕ and code
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
