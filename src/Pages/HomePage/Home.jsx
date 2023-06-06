import Banner from "./Banner/Banner"
import HomeAbout from "./HomeAbout/HomeAbout"
import NewsLetter from "./NewsLatter/NewsLetter"
import Proparty from "./Proparty/Proparty"

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeAbout/>
        <Proparty/>
        <NewsLetter/>
    </div>
  )
}

export default Home