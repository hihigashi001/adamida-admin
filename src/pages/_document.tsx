import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="favi16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="favi32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="favi48.png" sizes="48x48" type="image/png" />
          <link rel="icon" href="favi62.png" sizes="62x62" type="image/png" />
          <link rel="apple-touch-icon-precomposed" href="favi150.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
