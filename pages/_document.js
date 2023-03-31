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
                    crossOrigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Whisper&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default CustomDocument;