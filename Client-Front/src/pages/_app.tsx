import { ThemeST } from "@/core/styles";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ThemeST}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
