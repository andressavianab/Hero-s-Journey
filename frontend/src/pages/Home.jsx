import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { api } from "../services/api";

export const Home = () => {
  const [data, setData] = useState([]);

  const fetchHeros = async () => {
    try {
      const { data } = await api.get("/metahumans");
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeros();
  }, []);

  return (
    <div className="mt-7">
      <div className="flex flex-wrap pl-8 pr-8 justify-between gap-7">
        {data.map((hero) => {
          return <Card key={hero.id} name={hero.name} img={hero.images.md} />;
        })}
      </div>
    </div>
  );
};
