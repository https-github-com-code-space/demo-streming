import Banner from "./Banner/Banner"
import HomeAbout from "./HomeAbout/HomeAbout"
import NewsLetter from "./NewsLatter/NewsLetter"
import Proparty from "./Proparty/Proparty"
import VideoPlayer from "./VideoPlayer/VideoPlayer"

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeAbout/>
        <Proparty/>
        <VideoPlayer/>
        <NewsLetter/>
    </div>
  )
}

export default Home