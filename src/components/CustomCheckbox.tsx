import {
  BoxProps,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { getLocalValue, setLocalValue } from "@utils/localStorageManager";

type Props = {
  name: string;
  label?: string | JSX.Element;
  localCache?: boolean;
} & BoxProps;

export default function CustomCheckbox(props: Props) {
  const {
    formState: { errors, dirtyFields },
    register,
    getValues,
    trigger,
    setValue,
    watch,
  } = useFormContext();
  const { name, label, localCache, ...rest } = props;
  const [isActive, setIsActive] = useState(false);
  const error = errors[name];

  useEffect(() => {
    if (localCache) {
      const value = getLocalValue(name) ?? false;
      setIsActive(value);
      setValue(name, value);
    }
  }, []);

  const checkbox = watch(name);

  useEffect(() => {
    if (dirtyFields[name]) {
      localCache && setLocalValue(name, getValues(name));
      setIsActive(checkbox);
      trigger();
    }
  }, [checkbox]);

  return (
    <FormControl
      isInvalid={Boolean(error)}
      position="relative"
      mb={[4, 4, 4, 8]}
      {...rest}
    >
      <Checkbox id={name} d="none" {...register(name)} />
      <Flex as="label" htmlFor={name} cursor="pointer" align="center">
        <Flex
          tabIndex={0}
          _focus={{ border: "4px solid", borderColor: "green" }}
          justify="center"
          align="center"
          rounded="full"
          borderWidth={2}
          borderColor="darkest_gray"
          w={["22px", "26px"]}
          h={["22px", "26px"]}
          bg={isActive ? "coral" : "white"}
          transition=".3s"
        >
          <Icon as={BsCheckLg} color="white" fontSize={[14, 16]} />
        </Flex>
        <Text
          align="left"
          fontSize={[12, 14, 16, 18]}
          as="span"
          color="darkest_gray"
          ml={2}
        >
          {label}
        </Text>
      </Flex>
      <FormErrorMessage
        fontSize={["xs", "xs", "xs", "sm"]}
        mt="1px"
        color="coral"
        position="absolute"
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
