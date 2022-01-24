import { AnimatePresence } from "framer-motion";
import { useOnScreen } from "@hooks/useOnScreen";
import { Box } from "@chakra-ui/layout";
import { MutableRefObject, ReactNode, useRef } from "react";

export default function AnimateOnScreen({ children }: { children: ReactNode }) {
  const componentRef = useRef<any>();
  const isVisible = useOnScreen(componentRef, "0px");

  return (
    <Box w="full" h="full" ref={componentRef}>
      <AnimatePresence key={isVisible ? 1 : 0}>{children}</AnimatePresence>
    </Box>
  );
}
