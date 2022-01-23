import { Text, Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export type Props = {
  children: string;
  fit?: boolean;
  onClick?: () => void;
  withIcon?: boolean | JSX.Element;
  href?: string;
} & ButtonProps;

export default function Button(props: Props) {
  if (props.href) {
    const { href, ...propsWithoutHref } = props;
    return (
      <Link href={href} passHref>
        <a title={props.title}>
          <ButtonBase {...propsWithoutHref} />
        </a>
      </Link>
    );
  }
  return <ButtonBase {...props} />;
}

function ButtonBase(props: Props) {
  return (
    <ChakraButton
      {...props}
      colorScheme={props.colorScheme || "blue"}
      w={props.w ?? props.fit ? "fit-content" : "auto"}
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="span" whiteSpace="nowrap">
        {props.children}
      </Text>
      {props.withIcon && props.withIcon === true ? (
        <Icon ml={4} as={BsArrowRight} />
      ) : (
        props.withIcon
      )}
    </ChakraButton>
  );
}
