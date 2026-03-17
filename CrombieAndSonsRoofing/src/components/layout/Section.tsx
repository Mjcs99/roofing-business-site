import React from "react";
import ScrollReveal from "../animations/ScrollReveal";
import styles from "./Section.module.css";

type SectionProps = {
  label?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  reveal?: boolean;
  revealY?: number;
  revealDelay?: number;
  light?: boolean;
};

export default function Section({
  label,
  title,
  description,
  children,
  id,
  className,
  reveal = false,
  revealY = 30,
  revealDelay = 0,
  light = false,
}: SectionProps) {
  const content = (
    <>
      {(label || title || description) && (
        <div className={styles.header}>
          {label && <p className={styles.label}>{label}</p>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}

      {children}
    </>
  );

  return (
    <section
      id={id}
      className={`${styles.section} ${light ? styles.light : ""} ${className ?? ""}`}
    >
      <div className={styles.container}>
        {reveal ? (
          <ScrollReveal y={revealY} delay={revealDelay}>
            {content}
          </ScrollReveal>
        ) : (
          content
        )}
      </div>
    </section>
  );
}