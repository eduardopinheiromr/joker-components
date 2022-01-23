import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "@components/Header";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import LoadingScreen from "@components/LoadingScreen";

type PageLayoutProps = {
  children: ReactNode;
  withAuth?: boolean;
};

export default function PageLayout({ children, withAuth }: PageLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  if (withAuth && status === "loading") {
    return <LoadingScreen />;
  }

  if (withAuth && status === "unauthenticated") {
    router.push("/login");
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
