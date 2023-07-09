import "./App.css";
import { Box, VStack } from "@chakra-ui/react";
import VideoContainer from "./components/VideoContainer";
import ImageContainer from "./components/ImageContainer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <VStack spacing={"18"}>
      <ImageContainer url={"./g5Xy2uRb.jpg"} title={'test test test test test'} />
      <ImageContainer url={"./uzmnWy7.jpg"} title={'This is image title'}/>
      <VideoContainer
        url={"./QYCBUl3.mp4"}
        title={"This is a title of Video"}
      />
      <ImageContainer url={"./2cXi8f8.gif"} title={"this is gif"} />
    </VStack>
  );
}

export default App;
