import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
    };

    const handleGetStartedClick2 = () => {
        setShowProductList(false);
    };

    return (
        <div className="app-container">
            <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                <div className="background-image"></div>
                <div className="content">
                    <div className="landing_content">
                        <h1>Bienvenidos a la guardería Paradise</h1>
                        <div className="divider"></div>
                        <p>Donde lo verde se encuentra con la serenidad</p>

                        <button className="get-started-button" onClick={handleGetStartedClick}>
                            Vamos a iniciar
                        </button>
                    </div>
                    <div className="aboutus_container">
                        <AboutUs />
                    </div>
                </div>

            </div>
            <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
                <ProductList onPresSed={handleGetStartedClick2}/>
            </div>
        </div>
    );
}

export default App;