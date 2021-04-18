import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gradient-to-r  from-blue-500 to-green-500 dark:from-dark-500 dark:to-dark-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument