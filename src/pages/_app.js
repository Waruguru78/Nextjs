import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/Home.module.css';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
