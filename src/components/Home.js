import Header from './Header';
import Self from './Self';
import Portfolios from './Portfolios';
import Contact from './Contact';

function Home() {
    return (
        <div className="home" id="home">
            <Header />
            <div className="body">
                <h1>Portfolio</h1>
                <Portfolios />
                <Self />
            </div>

            <Contact />
        </div>
    );
}

export default Home;
