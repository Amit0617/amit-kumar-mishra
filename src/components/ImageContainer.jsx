import { useState } from "react";
import {
  Flex,
  Box,
  HStack,
  Spacer,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import SvgHeart from "./SvgHeart";
import SvgHeartFilled from "./SvgHeartFilled";
import "../App.css";

function ImageContainer({ url, title }) {
  const [favourite, setFavourite] = useState(false);

  return (
    <Flex w={'100%'} borderRadius={"5px"} shadow={"1px 1px 5px lightblue"}>
      <div >
        {favourite ? (
          <SvgHeartFilled
            onClick={() => setFavourite(false)}
            position={"absolute"}
            zIndex={"1"}
            padding={"5px"}
            cursor={"pointer"}
            // style={{ position: "absolute", padding: "5px", cursor:"pointer" }}
          />
        ) : (
          <SvgHeart
            onClick={() => setFavourite(true)}
            position={"absolute"}
            zIndex={"1"}
            // zindex={"1"}
            padding={"5px"}
            cursor={"pointer"}
            // style={{ position: "absolute", padding: "5px", cursor:"pointer" }}
          />
        )}
        <Image
          position={"relative"}
          paddingLeft={"5px"}
          paddingTop={"5px"}
          width={"60vw"}
          height={"35vw"}
          src={url}
          alt="image"
        
        />
      </div>
      <Spacer />
      <Box w={"30vw"} h={"inherit"}>
        <Heading>
          {title}
        </Heading>
      </Box>
    </Flex>
  );
}

export default ImageContainer;
