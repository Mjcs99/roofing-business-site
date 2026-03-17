import styles from "./ContentCards.module.css";

type Card = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

type Props = {
  items: Card[];
  style?: React.CSSProperties;
};

export default function ContentCards({ items, style }: Props) {
  return (
    <div className={styles.grid} style={style}>
      {items.map((item, index) => (
        <article key={index} className={styles.card}>
          <img src={item.image} alt={item.alt} className={styles.image} />

          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}