import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import placeholderImage from "@images/placeholder-image.png";

export const mockedCards = [
  <Box key={1}>
    <Text>Card 1</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box key={2}>
    <Text>Card 2</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box key={3}>
    <Text>Card 3</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box key={4}>
    <Text>Card 4</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box key={5}>
    <Text>Card 5</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
];
