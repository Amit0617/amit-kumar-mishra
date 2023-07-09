import { HStack, Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";
import SvgHeart from "./SvgHeart";
import "../App.css";
import { useState } from "react";
import SvgHeartFilled from "./SvgHeartFilled";

function VideoContainer({ url, title }) {
  const [favourite, setFavourite] = useState(false);

  return (
    <Flex w={'100%'} borderRadius={"5px"} shadow={"1px 1px 5px lightblue"} h={"auto"}>
      <Box>
        {favourite ? (
          <SvgHeartFilled
            onClick={() => setFavourite(false)}
            position={"absolute"}
            paddingTop={"12px"}
            paddingLeft={"5px"}
            cursor={"pointer"}
            // style={{
            //   position: "absolute",
            //   paddingTop: "12px",
            //   paddingLeft: "5px",
            // }}
          />
        ) : (
          <SvgHeart
            onClick={() => setFavourite(true)}
            position={"absolute"}
            paddingTop={"12px"}
            paddingLeft={"5px"}
            cursor={"pointer"}
            // style={{
            //   position: "absolute",
            //   paddingTop: "12px",
            //   paddingLeft: "5px",
            // }}
          />
        )}
        <video
          style={{
            position: "relative",
            borderRadius: "5px",
            zIndex: "-1",
            width: "60vw",
            height: "35vw",
          }}
          controls={false}
          autoPlay={true}
          muted={true}
          src={url}
        />
      </Box>

      <Spacer />
      <Box w={"30vw"} h={"initial"}>
        <Heading fontSize={"2xl"}>{title}</Heading>
      </Box>
    </Flex>
  );
}

export default VideoContainer;
