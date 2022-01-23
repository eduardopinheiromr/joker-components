import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

type Props = LinkProps & ChakraLinkProps;

export default function Link({ isExternal, children, ...props }: Props) {
  const {
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    href,
    ...anchorProps
  } = props;

  const nextLinkProps = {
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    href,
  };

  return (
    <NextLink {...nextLinkProps} passHref={passHref ?? true}>
      <ChakraLink {...anchorProps}>{children}</ChakraLink>
    </NextLink>
  );
}
