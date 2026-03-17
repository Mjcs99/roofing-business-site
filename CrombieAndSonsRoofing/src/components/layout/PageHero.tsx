import { type ReactNode } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import styles from "./PageHero.module.css"

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
  actions?: HeroAction[];
  children?: ReactNode;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  actions = [],
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(10,18,32,0.72), rgba(10,18,32,0.78)), url(${backgroundImage})`,
            }
          : undefined
      }
    >
      <div className={styles.pageOverlay} />

      <div className={`${styles.heroContent} container`}>
        <ScrollReveal x={-50} y={0} delay={0.2}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h1>{title}</h1>

          <p className={styles.heroText}>{description}</p>

          {actions.length > 0 && (
            <div className={styles.heroActions}>
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`${styles.btn} ${styles[action.variant ?? "primary"]}`}
                  
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}

          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}