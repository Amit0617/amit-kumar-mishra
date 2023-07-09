import { HStack, Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";
import SvgHeart from "./SvgHeart";
import "../App.css";
import { useState } from "react";
import SvgHeartFilled from "./SvgHeartFilled";

function VideoContainer({ url, title }) {
  const [favourite, setFavourite] = useState(false);

  return (
    <div style={{width: '100%', borderRadius:'5px', boxShadow:"1px 1px 5px lightblue", height:"auto", display: 'flex'}} >
      <div>
        {favourite ? (
          <SvgHeartFilled
            onClick={() => setFavourite(false)}
            position={"absolute"}
            padding={"5px"}
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
            padding={"5px"}
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
            paddingLeft: "5px",
            position: "relative",
            borderRadius: "5px",
            zIndex: "-1",
            width: "60vw",
            height: "35vw",
          }}
          controls
          autoPlay
          muted
        >
          <source src={url} type="video/mp4" />
          Your browser does not support videos
        </video>
      </div>

      <Spacer />
      <Box w={"30vw"}>
        <Heading fontSize={"2xl"}>{title}</Heading>
      </Box>
    </div>
  );
}

export default VideoContainer;
