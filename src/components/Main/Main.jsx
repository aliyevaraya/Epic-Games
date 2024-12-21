import { useContext } from "react";
import BigSlider from "./BigSlider";
import Discover from "./Discover";
import DiscoverSomething from "./DiscoverSomething";
import LinkSlider from "./LinkSlider";
import MiniSlider from "./MiniSlider";
import TopList from "./TopList";
import { DATA } from "../../context/DataContext";


function Main() {
  const {sell, play, wishlist, games, newRelease  } = useContext(DATA)
  // console.log(newRelease);
  
  return (
    <main className="bg-[#101014]">
      <div className="w-full lg:w-[75%] m-auto relative">
        <Discover />
        <MiniSlider />
        <BigSlider />
        <DiscoverSomething data={games}/>
        <LinkSlider />
        <TopList />
        <LinkSlider />
        <DiscoverSomething data={newRelease}/>
      </div>
    </main>
  );
}

export default Main;
