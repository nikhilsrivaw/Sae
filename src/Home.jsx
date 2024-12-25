
import SliderComponent from "./SliderComponent";
import NewFooterComponent from "./NewFooterComponent";
import Clubs from "./Clubs";
import Faculty from "./Faculty"
function Home() {
    return (
        <div>
        <div className="slider-container">
        <SliderComponent />
        </div>
        
        <Clubs/>
        <Faculty/>
        

        
        <NewFooterComponent/>
        </div>
    );
    }
export default Home;