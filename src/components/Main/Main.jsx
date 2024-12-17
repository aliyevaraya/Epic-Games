import BigSlider from "./BigSlider";
import Discover from "./Discover";
import DiscoverSomething from "./DiscoverSomething";
import LinkSlider from "./LinkSlider";
import MiniSlider from "./MiniSlider";
import TopList from "./TopList";

function Main() {
  return (
    <main className="bg-[#101014]">
      <div className="w-full lg:w-[75%] m-auto relative">
        <Discover />
        <MiniSlider />
        <BigSlider />
        <DiscoverSomething />
        <LinkSlider />
        <TopList />
      </div>
    </main>
  );
}

export default Main;
