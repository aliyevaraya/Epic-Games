import { useContext } from "react";
import BigSlider from "./BigSlider";
import DiscoverSomething from "./DiscoverSomething";
import LinkSlider from "./LinkSlider";
import MiniSlider from "./MiniSlider";
import TopList from "./TopList";
import { DATA } from "../../context/DataContext";


function Main() {
  const {sell, play, wishlist, games, newRelease  } = useContext(DATA)

  return (
    <main className="bg-[#101014]">
      <div className="w-full containerr m-auto relative">
        <MiniSlider />
        <BigSlider />
        <DiscoverSomething data={wishlist}  title={"Discover Something New"}/>
        <LinkSlider />
        <TopList />
        <LinkSlider />
        <DiscoverSomething data={newRelease} title={"Top New Releases"}/>
      </div>
    </main>
  );
}

export default Main;
