import { Box, Flex, Text } from "@chakra-ui/react";
import { cardInitial } from "@constants/cardInitial";
import ChipImage from "./ChipImage";
import Image from "next/image";
import master from "@images/cardflags/master.png";
import visa from "@images/cardflags/visa.png";
import amex from "@images/cardflags/american.png";
import elo from "@images/cardflags/elo.png";

type Props = {
  card_number: string;
  holder_name: string;
  expiration_date: string;
  security_code: string;
  activeFlip: boolean;
  brand?: string;
};

export const CreditCardImage = ({
  card_number,
  holder_name,
  expiration_date,
  security_code,
  activeFlip,
  brand,
}: Props) => {
  const flags = [
    {
      image: master,
      name: "Mastercard",
    },
    {
      image: visa,
      name: "Visa",
    },
    {
      image: amex,
      name: "American Express",
    },
    {
      image: elo,
      name: "Elo",
    },
  ];

  return (
    <Box
      className="flip-card"
      w={["95%", "360px"]}
      maxW="350px"
      h="80%"
      m={[0, 0, 0, "30px"]}
      style={{ perspective: "1000px" }}
      _hover={{
        ".flip-card-inner": {
          transform: "rotateY(180deg)",
        },
      }}
      rounded="lg"
    >
      <Box
        transform={activeFlip ? "rotateY(180deg)" : undefined}
        className="flip-card-inner"
        position="relative"
        backgroundColor="rgba( 255, 255, 255, 0.25 )"
        shadow="0px -1px 38px rgba(0, 0, 0, 0.2)"
        w="full"
        h="full"
        zIndex="5"
        minH="230px"
        pb="33px"
        style={{
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        rounded="lg"
      >
        <Box
          position="absolute"
          rounded="lg"
          bg="white"
          opacity=".8"
          filter="blur(4px)"
          w="full"
          h="full"
          className="flip-card-inner"
          transform={activeFlip ? "rotateY(180deg)" : undefined}
        />
        <Box
          className="front-card"
          position="absolute"
          left="0"
          top="60px"
          px="20px"
          w="full"
          h="fit-content"
          style={{ backfaceVisibility: "hidden" }}
          rounded="lg"
        >
          <ChipImage mb={2} />
          <Text fontSize="14px">
            {card_number?.length === 0
              ? cardInitial
              : card_number ?? cardInitial}
          </Text>
          <Flex minH="58px" justify="space-between" fontSize={[14, 16, 16, 18]}>
            <Box maxW="80%">
              <Text fontSize="14px" fontWeight="bold">
                Nome impresso no cartão
              </Text>
              <Text fontSize="14px">{holder_name}</Text>
            </Box>
            <Box>
              <Text fontSize="14px" fontWeight="bold">
                Venc.
              </Text>
              <Text fontSize="14px">{expiration_date}</Text>
            </Box>
          </Flex>
          {brand && (
            <Flex justify="flex-end">
              <Image
                src={flags.filter((flag) => flag.name === brand)[0].image}
                alt={
                  "Bandeira do cartão " +
                  flags.filter((flag) => flag.name === brand)[0].name
                }
              />
            </Flex>
          )}
        </Box>
        <Box
          className="back-card"
          position="absolute"
          w="full"
          h="full"
          transform="rotateY(180deg)"
          style={{ backfaceVisibility: "hidden" }}
          rounded="lg"
          top="40px"
        >
          <Box w="full" h="38px" bg="black" mb={8} opacity=".6" />
          <Flex px="20px">
            <Text fontSize="14px" fontWeight="bold">
              CVV
            </Text>
            <Text fontSize="14px" ml={4}>
              {security_code}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
