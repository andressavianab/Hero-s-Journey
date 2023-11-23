import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/Card";
import { api } from "../services/api";
import { useSearch } from "../contexts/Search";
import { HeroModal } from "../components/Modal";

export const Home = () => {
  const { searchTerm } = useSearch();
  const [data, setData] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleHeroClick = (hero) => {
    const isHeroSelected = selectedHeroes.some(
      (selectedHero) => selectedHero.id === hero.id
    );

    let updatedSelection = [];

    if (isHeroSelected) {
      updatedSelection = selectedHeroes.filter(
        (selectedHero) => selectedHero.id !== hero.id
      );
    } else if (selectedHeroes.length < 2) {
      updatedSelection = [...selectedHeroes, hero];
    }

    setSelectedHeroes(updatedSelection);

    if (updatedSelection.length === 2) {
      setIsModalOpen(true);
    } else if (updatedSelection.length === 0) {
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedHeroes([]);
  };

  const calculatePowerstatsTotal = (hero) => {
    const { powerstats } = hero;

    if (!powerstats) {
      return 0; // Retornar 0 caso powerstats não esteja definido
    }

    const { intelligence, strength, speed, durability, power, combat } =
      powerstats;

    // Convertendo os valores para números e somando-os
    const total = [
      intelligence,
      strength,
      speed,
      durability,
      power,
      combat,
    ].reduce((acc, curr) => acc + parseInt(curr || 0), 0);

    return total;
  };

  const hero1Total =
    selectedHeroes.length > 0 ? calculatePowerstatsTotal(selectedHeroes[0]) : 0;
  const hero2Total =
    selectedHeroes.length > 1 ? calculatePowerstatsTotal(selectedHeroes[1]) : 0;

  let winner = null;

  if (hero1Total > hero2Total) {
    winner = selectedHeroes[0];
  } else if (hero2Total > hero1Total) {
    winner = selectedHeroes[1];
  } else {
    winner = null;
  }

  console.log("O vencedor é:", winner ? winner.name : "Empate");

  return (
    <div className="mt-7">
      <div className="flex flex-wrap pl-8 pr-8 justify-between gap-7">
        {filteredData.map((hero) => (
          <Card
            key={hero.id}
            name={hero.name}
            img={hero.images.md}
            onClick={() => handleHeroClick(hero)}
            selected={selectedHeroes.includes(hero)}
          />
        ))}
        <HeroModal
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          heroes={selectedHeroes}
          winner={winner}
        />
      </div>
    </div>
  );
};
