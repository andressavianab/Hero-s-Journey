export const HeroModal = ({ isOpen, handleClose, heroes, winner }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-80 bg-black">
        <div className="bg-red rounded-lg  flex flex-col items-center justify-center p-4 text-yellow ">
          <div className="flex">
            {heroes.map((hero, index) => (
              <div
                key={hero.id}
                className={`flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`ml-4 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                  <p>Intelligence: {hero.powerstats.intelligence}</p>
                  <p>Strength: {hero.powerstats.strength}</p>
                  <p>Speed: {hero.powerstats.speed}</p>
                  <p>Durability: {hero.powerstats.durability}</p>
                  <p>Power: {hero.powerstats.power}</p>
                  <p>Combat: {hero.powerstats.combat}</p>
                </div>
                <div className={`w-40 h-60 text-center ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                  <img
                    src={hero.images.md}
                    alt={hero.name}
                    className="w-full h-full border-4 border-black"
                  />
                  <h2 className="font-bold ">{hero.name}</h2>
                </div>
              </div>
            ))}
          </div>
          {winner && <section className="mt-4"><p className="font-bold text-lg">{winner.name}</p></section>}
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-yellow text-red rounded hover:bg-darkYellow focus:outline-none"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  };
  