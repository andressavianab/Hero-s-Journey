import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/Card";
import { api } from "../services/api";
import { useSearch } from "../contexts/Search";

export const Home = () => {
  const { searchTerm } = useSearch();
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

  const filteredData = useMemo(() => {
    return data.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="mt-7">
      <div className="flex flex-wrap pl-8 pr-8 justify-between gap-7">
        {filteredData.map((hero) => (
          <Card key={hero.id} name={hero.name} img={hero.images.md} />
        ))}
      </div>
    </div>
  );
};