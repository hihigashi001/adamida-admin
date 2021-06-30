import { AppProps } from "next/app";
import "src/styles/index.css";
import "src/styles/table.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
