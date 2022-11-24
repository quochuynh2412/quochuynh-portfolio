import Document, { Html, Head, Main, NextScript } from "next/document";
import packageJson from "../package.json";

class CustomDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="build version" content={packageJson.version} />
        <link
          rel="preload"
          href="/font/L'Hanoienne-Demo.ttf"
          as="font"
          crossOrigin="anonymous"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;