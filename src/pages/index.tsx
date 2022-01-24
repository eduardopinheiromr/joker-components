import { Box, Heading } from "@chakra-ui/react";
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
      <Box my={8}>
        <Heading textAlign="center">Video component with placeholder</Heading>
        <Video {...videoProps} />
      </Box>
      <Box my={8}>
        <Heading textAlign="center">
          Multiple Carousel with external controls
        </Heading>
        <MultipleCarousel cards={mockedCards} />
      </Box>
    </PageLayout>
  );
};

export default Home;