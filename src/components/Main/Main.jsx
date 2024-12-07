import BigSlider from "./BigSlider";
import Discover from "./Discover";
import MiniSlider from "./MiniSlider";

function Main() {
  return (
    <main className="bg-[#101014]">
      <div className="w-full lg:w-[75%] m-auto relative">
        <Discover />
        <MiniSlider />
        <BigSlider />
      </div>
    </main>
  );
}

export default Main;
