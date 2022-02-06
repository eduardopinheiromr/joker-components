import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import Image from "next/image";
import CustomInput from "@components/CustomInput";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@components/Button";
import { CreditCardImage } from "./CreditCardImage";

import valid from "card-validator";
import { creditCardResolver } from "./creditCardResolver";
import Container from "@components/layouts/Container";
import { CardNumberVerification } from "card-validator/dist/card-number";
import { getCardMask } from "@utils/getCardMask";

export default function CreditCardForm() {
  const toast = useToast();

  const methods = useForm({ resolver: creditCardResolver, mode: "onChange" });

  const onSubmit = async (card: any) => {
    console.log("submited", card);
  };
  const onError = () => {
    toast({
      status: "error",
      title: "Verifique os campos e tente novamente",
      position: "bottom",
    });
  };

  const [activeFlip, toggleFlip] = useState(false);

  const { card_number, holder_name, expiration_date, security_code } =
    methods.watch();

  const cardValidation = valid.number(card_number);

  const cardImageProps = {
    activeFlip,
    card_number,
    holder_name,
    expiration_date,
    security_code,
    brand: cardValidation?.card?.niceType,
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const allFields = methods.watch();

    const allFieldsAreTouched = Object.values(allFields).filter(
      (field) => field.length > 0
    );

    if (allFieldsAreTouched.length === 4)
      methods.trigger().then(() => {
        setDisabled(!methods.formState.isValid);
      });
  }, [card_number, holder_name, expiration_date, security_code]);

  const [validation, setValidation] = useState<CardNumberVerification>();
  const [cardMask, setCardMask] = useState({
    number: "9999 9999 9999 9999",
    cvv: "999",
  });

  useEffect(() => {
    validation && setCardMask(getCardMask(validation));
  }, [validation]);

  return (
    <Container>
      <Heading textAlign="center">Pagamento com cartão de crédito</Heading>
      <Flex
        mt={[-8, 4, 8]}
        direction={["column", "column", "column", "row"]}
        align="center"
        justify="center"
      >
        <Flex
          position="relative"
          minW={["100%", "440px", "440px", "385px"]}
          minH="254px"
          justify="center"
          align="center"
          flex="1"
          maxW="420px"
          maxH="300px"
        >
          <Box
            w="111px"
            h="111px"
            rounded="full"
            bg="#FFF0E9"
            position="absolute"
            bottom={[-4, -4, 0]}
            left={[-2, -2, 0]}
          />
          <Box
            w="111px"
            h="111px"
            rounded="full"
            bg="purple"
            position="absolute"
            top={[-4, -4, 0]}
            right={[-2, -2, 0]}
          />
          <CreditCardImage {...cardImageProps} />
        </Flex>

        <FormProvider {...methods}>
          <Box
            as="form"
            flex="1"
            maxW="420px"
            ml={[0, 0, 0, "115px"]}
            onSubmit={methods.handleSubmit(onSubmit, onError)}
          >
            {/* <Flex
              mb={4}
              mt={[4, 4, 4, 0]}
              justify={["center", "center", "center", "flex-start"]}
              align="center"
              style={{ gap: 8 }}
            >
              {flags.map((flag) => (
                <Box opacity={flag.active ? 1 : 0.5} key={flag.name}>
                  <Image
                    height={20}
                    width={30}
                    objectFit="contain"
                    src={flag.image}
                    alt={"Bandeira do cartão " + flag.name}
                    title={"Bandeira do cartão " + flag.name}
                  />
                </Box>
              ))}
            </Flex> */}
            <CustomInput
              notClosable
              name="holder_name"
              placeholder="Nome impresso no cartão"
              maxLength={25}
            />

            <CustomInput
              notClosable
              name="card_number"
              placeholder="Número do cartão"
              mask={cardMask.number}
              onChangeCapture={(e) =>
                setValidation(
                  valid.number(
                    e.currentTarget.value
                      .split("-")
                      .join("")
                      .replaceAll("_", "")
                  )
                )
              }
            />
            <Flex>
              <CustomInput
                notClosable
                name="expiration_date"
                placeholder="Vencimento"
                mask="99/99"
              />
              <CustomInput
                notClosable
                w="90%"
                ml="auto"
                name="security_code"
                placeholder="CVV"
                mask={cardMask.cvv}
                onFocusCapture={() => toggleFlip(true)}
                onBlurCapture={() => toggleFlip(false)}
              />
            </Flex>
            <Button
              disabled={disabled}
              mt={[4, 4, 4, 8]}
              mb={[8, 8, 8, 0]}
              h={["44px", "56px"]}
              type="submit"
              mx={["0", "auto", "auto", 0]}
              withIcon
            >
              Pagar
            </Button>
          </Box>
        </FormProvider>
      </Flex>
    </Container>
  );
}
