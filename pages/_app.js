import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav";

function MyApp({ Component, pageProps }) {
  return <>
      <Nav />
      <Component {...pageProps} />
      </>
}

export default MyApp
