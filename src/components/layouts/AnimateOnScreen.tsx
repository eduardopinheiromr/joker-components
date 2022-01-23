import { AnimatePresence } from "framer-motion";
import { useOnScreen } from "@hooks/useOnScreen";
import { Box } from "@chakra-ui/layout";
import { useRef } from "react";

export default function AnimateOnScreen({ children }) {
  const componentRef = useRef(null);
  const isVisible = useOnScreen(componentRef, "0px");

  return (
    <Box w="full" h="full" ref={componentRef}>
      <AnimatePresence key={isVisible && 1}>{children}</AnimatePresence>
    </Box>
  );
}
