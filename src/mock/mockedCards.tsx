import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import placeholderImage from "@images/placeholder-image.png";

export const mockedCards = [
  <Box shadow="md" my={4} rounded="md" p={4} key={1} fontSize="14px">
    <Text>Card 1</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box shadow="md" my={4} rounded="md" p={4} key={2} fontSize="14px">
    <Text>Card 2</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box shadow="md" my={4} rounded="md" p={4} key={3} fontSize="14px">
    <Text>Card 3</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box shadow="md" my={4} rounded="md" p={4} key={4} fontSize="14px">
    <Text>Card 4</Text>
    <Image src={placeholderImage} height={300} width={300} alt="" />
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
      iste rem expedita voluptate molestiae tempore dolor odio possimus qui!
      Odio pariatur, voluptates necessitatibus enim ullam suscipit veritatis
      voluptatibus eum.
    </Text>
  </Box>,
  <Box shadow="md" my={4} rounded="md" p={4} key={5} fontSize="14px">
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
