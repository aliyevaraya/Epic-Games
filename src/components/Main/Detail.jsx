import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../context/DataContext";

function Detail() {
  const { id } = useParams();
  const { newRelease } = useContext(DATA);
  const game = newRelease.find((game) => game.id === id);
  console.log(game);

  return( 
  <div>
    <img className="w-[300px]" src={game.keyImages[2].url} alt="" />
  </div>
  )
}

export default Detail;
