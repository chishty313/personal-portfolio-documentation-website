import React from 'react';
import {
  ExternalLink,
  GraduationCap,
  Mail
} from 'lucide-react';
import styles from './HeroBanner.module.css';
import profileImage from '@site/static/img/profile_image.jpeg';

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Column - Profile Section */}
          <div className={styles.leftColumn}>
            <div className={styles.profileSection}>
              <div className={styles.imageContainer}>
                <img
                  src={profileImage}
                  alt="Shoabur Rahman Chishty"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.credentialsBadge}>
                <GraduationCap className={styles.credentialsIcon} />
                <span>Hands-on Training: CCNA · MTCNA · RHCSA</span>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className={styles.rightColumn}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Shoabur Rahman Chishty
              </h1>
              <div className={styles.roleContainer}>
                <div className={styles.roleCard}>
                  <h2 className={styles.role}>Network Engineering Enthusiast</h2>
                  <div className={styles.roleBackground}></div>
                </div>
                <div className={styles.roleCard}>
                  <h2 className={styles.role}>Data Center Technology Enthusiast</h2>
                  <div className={styles.roleBackground}></div>
                </div>
                <div className={styles.roleCard}>
                  <h2 className={styles.role}>Cloud Computing Learner</h2>
                  <div className={styles.roleBackground}></div>
                </div>
              </div>

              <p className={styles.description}>
                A dedicated technology enthusiast with comprehensive training in networking fundamentals and infrastructure design. Equipped with hands-on experience in routing protocols, VLAN configuration, and network architecture through CCNA, MTCNA, and RHCSA training programs. Passionate about data center operations and cloud technologies, actively expanding knowledge in virtualization and distributed systems. Seeking opportunities to apply and grow these skills in ISP, telecommunications, or data center environments.
              </p>

              <div className={styles.actionContainer}>
                <a 
                  href="/docs/portfolio" 
                  className={styles.primaryButton}
                >
                  View Projects
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className={styles.secondaryButton}
                >
                  <Mail className={styles.buttonIcon} />
                  Contact Me
                </a>
              </div>

              <div className={styles.professionalLinks}>
                <a
                  href="/docs/certifications"
                  className={styles.professionalLink}
                >
                  <GraduationCap className={styles.linkIcon} />
                  Training & Learning Path
                </a>
                <a
                  href="/docs/projects"
                  className={styles.professionalLink}
                >
                  <ExternalLink className={styles.linkIcon} />
                  Lab Projects & Practice Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;