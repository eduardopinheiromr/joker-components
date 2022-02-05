import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import InputMask from "react-input-mask";
import { getLocalValue, setLocalValue } from "@utils/localStorageManager";

type Props = {
  name: string;
  placeholderText?: string;
  mask?: string;
  leftIcon?: IconType;
  localCache?: boolean;
  notClosable?: boolean;
} & InputProps;

export default function CustomInput(props: Props) {
  const { name, leftIcon, localCache, ...rest } = props;
  const [defaultValue, setDefaultValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { formState, register, resetField, getValues, setValue, trigger } =
    useFormContext();

  const { errors, dirtyFields } = formState;

  useEffect(() => {
    if (defaultValue === "" && !dirtyFields[name]) {
      const value = getLocalValue(name) ?? "";
      setDefaultValue(value);
      setValue(name, value);
    }
  }, [defaultValue]);

  const error = errors[name];

  return (
    <FormControl
      isInvalid={Boolean(error)}
      position="relative"
      mb={[4, 4, 4, 8]}
    >
      <InputGroup>
        {leftIcon && (
          <InputLeftElement
            children={<Icon as={leftIcon} color="coral" fontSize="26px" />}
          />
        )}
        <Input
          w="100%"
          fontSize={["14px", "16px", "18px"]}
          as={props.mask ? InputMask : undefined}
          {...(props.mask ? { mask: props.mask, maskChar: null } : {})}
          borderWidth={2}
          borderColor={
            Boolean(error)
              ? "coral"
              : dirtyFields[name]
              ? "green"
              : "lightest_gray"
          }
          _focus={{ borderColor: "darkest_gray" }}
          {...register(name)}
          _invalid={{
            shadow: "none",
          }}
          onChangeCapture={async () => {
            const isValid = await trigger(name);
            if (!isValid) {
              await trigger(name);
            }
          }}
          onBlur={(event) => {
            const { value } = event.target;
            localCache ? setLocalValue(name, value) : undefined;
            setValue(name, value);
          }}
          {...rest}
          type={
            props.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : undefined
          }
        />
        {getValues(name)?.length > 0 &&
          (props.type === "password" ? (
            <InputRightElement
              onClick={() => setShowPassword(!showPassword)}
              cursor="pointer"
              children={
                <Icon
                  as={showPassword ? AiFillEyeInvisible : AiFillEye}
                  color="#BABABA"
                  fontSize={[16, 16, 18, 22]}
                />
              }
            />
          ) : (
            !props.isReadOnly &&
            !props.notClosable && (
              <InputRightElement
                onClick={() => resetField(name, { defaultValue: "" })}
                cursor="pointer"
                children={
                  <Icon
                    as={AiOutlineCloseCircle}
                    color="#BABABA"
                    fontSize={[16, 16, 18, 22]}
                  />
                }
              />
            )
          ))}
      </InputGroup>
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
