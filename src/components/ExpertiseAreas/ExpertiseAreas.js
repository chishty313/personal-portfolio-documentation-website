import React from 'react';
import {
  Network,
  Cloud,
  Database,
  Server,
  Code,
  GitBranch
} from 'lucide-react';
import styles from './ExpertiseAreas.module.css';

const ExpertiseList = [
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Hands-on training in routing protocols, VLAN configuration, and network architecture fundamentals through comprehensive CCNA and MTCNA programs.',
    category: 'Core'
  },
  {
    icon: Database,
    title: 'Data Center Operations',
    description: 'Understanding of data center infrastructure, cooling systems, and operational practices gained through focused practical training.',
    category: 'Core'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Exploring virtualization technologies, distributed systems architecture, and modern cloud service delivery models.',
    category: 'Core'
  },
  {
    icon: Server,
    title: 'System Administration',
    description: 'Linux system management and server administration capabilities developed through hands-on RHCSA training.',
    category: 'Technical'
  },
  {
    icon: GitBranch,
    title: 'Infrastructure Automation',
    description: 'Learning contemporary network automation approaches and infrastructure as code methodologies for efficient system management.',
    category: 'Technical'
  },
  {
    icon: Code,
    title: 'Technical Tools',
    description: 'Developing proficiency in scripting and monitoring tools essential for modern network management and automation.',
    category: 'Technical'
  }
];

function ExpertiseCard({icon: Icon, title, description}) {
  return (
    <div className={styles.expertiseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default function ExpertiseAreas() {
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Focus Areas</h2>
          <p className={styles.sectionDescription}>
            Comprehensive training and hands-on experience in key infrastructure and networking technologies
          </p>
        </div>
        
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Core Competencies</h3>
          <div className={styles.expertiseGrid}>
            {ExpertiseList.filter(item => item.category === 'Core').map((props, idx) => (
              <ExpertiseCard key={idx} {...props} />
            ))}
          </div>
        </div>

        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Technical Capabilities</h3>
          <div className={styles.expertiseGrid}>
            {ExpertiseList.filter(item => item.category === 'Technical').map((props, idx) => (
              <ExpertiseCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}