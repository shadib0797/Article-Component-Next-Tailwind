import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-manrope bg-grayish-blue-l">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}