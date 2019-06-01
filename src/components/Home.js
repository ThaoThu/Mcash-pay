import React, { Component } from 'react';
import Navbar from './Navbar';
import GetStart from './GetStart';
import PaymentFeature from './PaymentFeature';
import CoinType from './CoinType';
import TrustBy from './TrustBy';
import Stragic from './StragicPartner';
import Register from './Register';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <GetStart></GetStart>
                <PaymentFeature></PaymentFeature>
                <CoinType></CoinType>
                <TrustBy></TrustBy>
                <Stragic></Stragic>
                <Register></Register>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;