import Link from "next/link";
import { Grid, Box, Flex, Collapse } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import Button from "@components/Button";
import MenuToggle from "./MenuToggle";
import { navigation } from "./constants";
import { isBrowser } from "@utils/isBrowser";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  isBrowser && isOpen && window.addEventListener("scroll", onClose);
  isBrowser && isOpen && window.addEventListener("resize", onClose);

  router.events && isOpen && router.events.on("routeChangeComplete", onClose);
  return (
    <>
      <MenuToggle toggle={isOpen ? onClose : onOpen} isOpen={isOpen} />
      <Flex
        position="absolute"
        bg="white"
        shadow={isOpen ? "0 0px 30px rgba(29, 29, 29, 0.5)" : "none"}
        h={[
          isOpen ? "460px" : "0px",
          isOpen ? "460px" : "0px",
          isOpen ? "460px" : "0px",
          0,
        ]}
        w={[
          isOpen ? "80%" : "60px",
          isOpen ? "80%" : "60px",
          isOpen ? "60%" : "60px",
          0,
        ]}
        transition=".3s"
        top="1"
        right="1"
        justify="center"
        align="center"
        zIndex="20"
        rounded="xl"
      >
        <Collapse in={isOpen} animateOpacity>
          <Grid
            gap={6}
            height={isOpen ? "300px" : "80px"}
            display={isOpen ? "grid" : "none"}
          >
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link} passHref shallow>
                <Box
                  as="a"
                  textDecoration={
                    router.pathname === nav.link ? "underline" : "none"
                  }
                  color={router.pathname === nav.link ? "#630060" : "darkgray"}
                  fontWeight={router.pathname === nav.link ? "bold" : "normal"}
                  onClick={() => setTimeout(onClose, 50)}
                >
                  {nav.label}
                </Box>
              </Link>
            ))}

            <Button href="/cotacao">Fazer cotação</Button>
          </Grid>
        </Collapse>
      </Flex>
      <Box
        display={isOpen ? "block" : "none"}
        left={0}
        top={0}
        w="full"
        h="100vh"
        position="absolute"
        zIndex="5"
        bg="black"
        opacity=".3"
        onClick={onClose}
      />
    </>
  );
}
