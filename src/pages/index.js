import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ExpertiseAreas from '../components/ExpertiseAreas/ExpertiseAreas.js';
import styles from './index.module.css';

function HighlightSection({ title, content }) {
  return (
    <div className={styles.highlightSection}>
      <h2 className={styles.highlightTitle}>{title}</h2>
      <p className={styles.highlightContent}>{content}</p>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const highlights = siteConfig.customFields?.highlightSections || [];

  return (
    <Layout
      title={siteConfig.title}
      description="Showcase of Shoabur Rahman Chishty's professional skills and achievements">
      <main className={styles.mainContent}>
        <HeroBanner />
        <ExpertiseAreas />
        
        {/* Professional Highlights Section */}
        <section className={styles.highlightContainer}>
          {highlights.map((highlight, idx) => (
            <HighlightSection
              key={idx}
              title={highlight.title}
              content={highlight.content}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}