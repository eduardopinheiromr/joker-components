import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CreditCardForm from "@components/CreditCardForm";
import CreateUserForm from "@components/Forms/CreateUserForm";
import LoginForm from "@components/Forms/LoginForm";
import PageLayout from "@components/layouts/PageLayout";
import MultipleCarousel from "@components/MultipleCarousel";
import PageTags from "@components/PageTags";
import Video from "@components/Video";
import placeholderImage from "@images/placeholder-image.png";
import { mockedCards } from "src/mock/mockedCards";

const pageTagsProps = {
  title: "Componentes",
  description: "Page description",
};

const videoProps = {
  videoThumb: placeholderImage,
  videoTitle: "Video Title",
  videoSrc: "https://www.youtube.com/embed/T4seJYrnick",
};

const Home = () => {
  return (
    <PageLayout>
      <PageTags {...pageTagsProps} />
      <Box my={8} textAlign="center">
        <Heading>Player de vídeo com placeholder</Heading>
        <Text>
          O iframe só carrega ao apertar play, tornando o carregamento do vídeo
          dinâmico. <br />
          Esta prática melhora a performance de carregamento da página.
        </Text>
        <Video {...videoProps} />
      </Box>
      <Box my={8} px={[4, 8, 16, 24, 32]}>
        <Box textAlign="center">
          <Heading>Carrossel múltiplo com controles externos</Heading>
          <Text>Criado com swiper.js</Text>
        </Box>
        <Heading textAlign="center"></Heading>

        <MultipleCarousel cards={mockedCards} />
      </Box>

      <Box mt={16} textAlign="center">
        <Heading>Formulários</Heading>
        <Text>Criados com react-hook-form e yup</Text>
      </Box>
      <Flex my={8} mx="auto" maxW="4xl" justify="space-between">
        <CreateUserForm />
        <LoginForm />
      </Flex>

      <Box mt={16} textAlign="center">
        <Heading textAlign="center">Pagamento com cartão de crédito</Heading>
        <Text>
          Criados com react-hook-form, yup e card-validator <br />A máscara do
          número do cartão e CVV são dinâmicas, baseadas na bandeira do cartão
        </Text>
      </Box>
      <Flex w="full" my={8}>
        <CreditCardForm />
      </Flex>
    </PageLayout>
  );
};

export default Home;
