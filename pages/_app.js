import Layout from "../components/Layout"
import '../styles/globalStyles.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
