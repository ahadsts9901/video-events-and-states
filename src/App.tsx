import "./App.css"
import VideoPlayer from "./components/VideoPlayer"

const App = () => {

  const videos: string[] = [
    "https://ahadsts9901.github.io/instagram-dummy-page/videos/osman.mp4",
    "https://res.cloudinary.com/do6sd9nyx/video/upload/vecteezy_2-minute-timer-timer-2-minutes-2-min-timer-free-countdown_30818095_dwdi6w.mp4?_s=vp-2.1.0"
  ]

  return <>{videos?.map((str: string, i: number) => <VideoPlayer url={str} key={i} />)}</>
}

export default App