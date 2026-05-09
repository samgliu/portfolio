import Header from './Header';
import Self from './Self';
import Portfolios from './Portfolios';
import Contact from './Contact';
import React from 'react';

function Home() {
    return (
        <div className="home" id="home">
            <Header />
            <main className="body">
                <section className="portfolio-section" aria-labelledby="portfolio-heading">
                    <h1 id="portfolio-heading">Portfolio</h1>
                    <Portfolios />
                </section>
                <Self />
            </main>
            <Contact />
        </div>
    );
}

export default Home;
