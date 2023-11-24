export const HeroModal = ({ isOpen, handleClose, heroes, winner }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-80 bg-black">
      <div className="bg-red flex flex-col items-center justify-center p-4 text-yellow w-2xl h-96 max-w-[95%] border-4 border-black overflow-auto sm:overflow-hidden">
        <div className="flex">
          {heroes.map((hero, index) => (
            <div
              key={hero.id}
              className={`flex items-center justify-center mb-4 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`ml-4 ${index % 2 === 0 ? "mr-4" : "ml-4"}`}>
                <h2 className="font-bold text-center">{hero.name}</h2>
                <p className="text-sm sm:text-base">
                  Intelligence: {hero.powerstats.intelligence}
                </p>
                <p className="text-sm sm:text-base">
                  Strength: {hero.powerstats.strength}
                </p>
                <p className="text-sm sm:text-base">
                  Speed: {hero.powerstats.speed}
                </p>
                <p className="text-sm sm:text-base">
                  Durability: {hero.powerstats.durability}
                </p>
                <p className="text-sm sm:text-base">
                  Power: {hero.powerstats.power}
                </p>
                <p className="text-sm sm:text-base">
                  Combat: {hero.powerstats.combat}
                </p>
              </div>
              <div
                className={`w-40 h-60 text-center hidden min-[744px]:block ${
                  index % 2 === 0 ? "mr-4" : "ml-4"
                }`}
              >
                <img
                  src={hero.images.md}
                  alt={hero.name}
                  className="w-full h-full border-4 border-black shadow-cardShadow"
                />
              </div>
            </div>
          ))}
        </div>
        {winner && (
          <section className="mt-4 flex items-center">
            <p className="">Winner: </p>{" "}
            <p className="font-bold text-lg ml-1"> {winner.name}</p>
          </section>
        )}
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-yellow text-red rounded hover:bg-darkYellow focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};
