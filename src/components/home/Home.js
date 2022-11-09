import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import { SuperheroItems } from "../../data/superhero.data";
import { getSuperheroData } from "../../endpoints/superhero";
import { List } from "../list/List";
import styles from "./Home.module.scss";

export const Home = () => {
  const dataResponse = useQueries({
    queries: SuperheroItems.map((id) => {
      return {
        queryKey: ["superhero", id],
        queryFn: () => getSuperheroData(id),
      };
    }),
  });

  useEffect(() => {
    console.log(dataResponse); // const newData = dataResponse.map((response) => response.data);
  }, [dataResponse]);

  return (
    <div className={styles.homepage}>
      {dataResponse.some((dataResponse) => dataResponse.isLoading) ? (
        <h1>Loading</h1>
      ) : (
        <List data={dataResponse} />
      )}
    </div>
  );
};
