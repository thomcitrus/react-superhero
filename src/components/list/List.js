import { Card } from "../card/Card";
import styles from "./List.module.scss";

export const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => {
        return (
          <Card
            name={item.data.name}
            image={item.data.images.lg}
            height={item.data.appearance.height[1]}
            weight={item.data.appearance.weight[1]}
            key={item.data.name}
          />
        );
      })}
    </ul>
  );
};
