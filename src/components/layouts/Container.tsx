import { Box, BoxProps } from "@chakra-ui/layout";
import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
} & BoxProps;

export default function Container(props: ContainerProps) {
  return (
    <Box
      width="100%"
      maxWidth="1400px"
      margin="0 auto"
      padding="15px"
      {...props}
    >
      {props.children}
    </Box>
  );
}
