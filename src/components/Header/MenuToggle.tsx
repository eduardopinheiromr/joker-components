import { Box } from "@chakra-ui/react";

import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { IoMdClose as CloseIcon } from "react-icons/io";

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Box
      cursor="pointer"
      display={{ base: "block", md: "none" }}
      onClick={toggle}
      position="absolute"
      right="26px"
      zIndex="30"
    >
      {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
    </Box>
  );
}
