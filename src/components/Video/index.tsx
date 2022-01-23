import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BsPlay } from "react-icons/bs";

type Props = {
  videoThumb: string | StaticImageData;
  videoTitle: string;
  videoSrc: string;
};

export default function Video({ videoThumb, videoTitle, videoSrc }: Props) {
  const [videoPlayed, setVideoPlayed] = useState(false);
  return (
    <section>
      {videoPlayed ? (
        <Box
          as="iframe"
          width="full"
          height="full"
          minHeight={["300px", "420px", "540px"]}
          src={videoSrc + "?autoplay=1"}
          title={videoTitle}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(7, 1fr)",
          ]}
          minHeight={["300px"]}
        >
          <GridItem
            colSpan={3}
            textAlign={["center", "center", "left"]}
            h={["180px", "160px"]}
            p={[4, 8, 12, 16]}
            py={[4, 8, 12, 24]}
          >
            <Heading>Call to action?</Heading>
            <Text fontSize={["25px", "25px", "45px"]} fontWeight="bold">
              Assista ao vídeo:
            </Text>
          </GridItem>
          <GridItem
            position="relative"
            colSpan={[1, 1, 4, 4]}
            h={["220px", "280px", "400px", "500px"]}
          >
            <Button
              bg="purple"
              rounded="full"
              height={["70px", "70px", "90px"]}
              width={["70px", "70px", "90px"]}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              left={["40%", "45%", "-30px", "-40px"]}
              top={["-20px", "-30px", "80px", "150px"]}
              zIndex="10"
              transition=".3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setVideoPlayed(true)}
              aria-label="Aperte play para ver o vídeo"
              title="Aperte play para ver o vídeo"
            >
              <Icon
                as={BsPlay}
                color="white"
                fontSize={["32px", "32px", "42px"]}
              />
            </Button>
            <Box>
              <Image
                src={videoThumb}
                alt={videoTitle}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </GridItem>
        </Grid>
      )}
    </section>
  );
}
