export const Card = (props) => {
  return (
    <div className="bg-red w-52 h-80 flex flex-col items-center border-4 border-black shadow-cardShadow cursor-pointer">
      <div className="w-40 h-60 mt-5 shadow-lg shadow-darkRed">
        <img
          className="w-full h-full"
          src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg"
          alt=""
        />
      </div>
      <div className="font-semibold text-yellow mt-4">
        <p>A-Bomb</p>
      </div>
    </div>
  );
};
