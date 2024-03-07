import './HomeScreen.css';
import Navbar from './NavBar';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge></Row>
            <Row title="Popular" fetchUrl={requests.fetchPopular}></Row>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOrginals}></Row>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
            <Row title="Documentries" fetchUrl={requests.fetchDocumentries}></Row>
        </div>
    )
}

export default HomeScreen