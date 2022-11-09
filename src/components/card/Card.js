import styles from "./Card.module.scss";

export const Card = ({ name, image, height, weight }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} />
      </div>

      <div className={styles.detailsContainer}>
        <h1 className={styles.heading}>{name}</h1>

        <p className={styles.body}>{`Height: ${height}`}</p>

        <p className={styles.body}>{`Weight: ${weight}`}</p>
      </div>
    </li>
  );
};
