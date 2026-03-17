import styles from "./ContentCards.module.css";

type CardItem = {
  featured?: boolean
  image?: string;
  alt?: string;
  title: string;
  description?: string;
  points?: string[];
};

type Props = {
  items: CardItem[];
  style?: React.CSSProperties;
};

export default function ContentCards({ items, style }: Props) {
  return (
    <div className={styles.grid} style={style}>
      {items.map((item, index) => (
        <article key={index} className={`${styles.card} ${item.featured ? styles.featured : ""}`}>
          {item.image && (
            <img src={item.image} alt={item.alt ?? ""} className={styles.image} />
          )}

          <div className={styles.content}>
            <h3>{item.title}</h3>

            {item.points && (
              <ul className={styles.list}>
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            )}

            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}