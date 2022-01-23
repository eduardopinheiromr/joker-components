import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  iconDirection: "left" | "right";
  disabled?: boolean;
} & FlexProps;

export default function SlideButton({ ...props }: Props) {
  return (
    <Flex
      {...props}
      _disabled={{ opacity: props.disabled ? 0.5 : 1 }}
      justify="center"
      align="center"
      as="button"
      rounded="full"
      border="4px"
      color="purple"
      h="50px"
      w="50px"
      aria-label={
        "Ir para o slide " +
        (props.iconDirection === "left" ? "anterior" : "seguinte")
      }
      title={
        "Ir para o slide " +
        (props.iconDirection === "left" ? "anterior" : "seguinte")
      }
    >
      <Icon
        fontSize="24px"
        as={props.iconDirection === "left" ? FaChevronLeft : FaChevronRight}
      />
    </Flex>
  );
}
