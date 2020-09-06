import React, { Component } from 'react'
import logo from './images/bitcoin-logo.png';
import image2 from './images/btcoin.png';
import biticon from './images/bitcoin.png';
import './Style.css';
import './Grid.css';
import './MediaQueries.css';
const currency = [
    {
        id: 1,
        name: '1Bitcoin =',
        tsh: '24,228,638.30Tsh',
    },
    {
        id: 2,
        name: '1Ethereum =',
        tsh: '894,251.24Tsh',
    },
    {
        id: 3,
        name: '1Ripple XRP =',
        tsh: '596.4Tsh',
    },
    {
        id: 4,
        name: '1Litecoin =',
        tsh: '0.0000087Tsh',
    },
    {
        id: 5,
        name: '1INEO =',
        tsh: '46,621.00Tsh'
    },
    {
        id: 6,
        name: '1IOTA =',
        tsh:'9,660.00Tsh',
    },
];
const isSearched = searchTerm => item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase());


class Bitcoin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currency,
            searchTerm: '', 
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    };
    onDismiss (id) {
        const isNotId = item => item.id !== id;
        const updatedList = this.state.currency.filter(isNotId);
        this.setState({ currency: updatedList });
    };

    onSearchChange (e) {
        this.setState({
            searchTerm: e.target.value
        });
    };


    render() {
        return (

         
      
            <div>
                   
            <header>
                <nav className="fix-top">
                    <div className="row main-nav-1">
                       <img src={logo} alt="logo" className="logo"/> 
                        <ul className="main-nav">
                    
                        <li><a href="#trading">trading</a></li>
                        <li><a href="#wallet">wallet</a></li>
                        <li><a href="#coinnyCard">coinnyCard</a></li>
                        <li><a href="#news">news</a></li>
                        </ul>
                        {/* <div className="right-nav">
                                <ul className="nav-right">
                                <a href="#">sign Up</a>
                                <a href="#">login</a>
                            </ul>
                     </div> */}
                   </div>
             </nav> 
     
            
            </header>
            {/* beginning of section one */}
            <section className="section-one">
                <div className="row">
                    <p className="bitcoin">What is</p><br/><img src={biticon} className="biticon" alt="Bitcoin icon"></img><span
                        className="bitcoin-1">Bitcoin?</span>
                    
                </div>
            <div className="row">
                <div className="col span-1-of-2 section-onequeries">
                    It is the most popular cryptocurrencies in the <br />world.It ticker symbol is BTC. You can find
                    it<br /> across many exchanges showing Bitcoin price and<br /> in trading pairs next to other cryptocurrence
                    <div className="btn-1">
                            <a href="#buy">Buy Bitcoin</a>
                        </div>
                            <p>Cryptocurrencies Exchange in Tanzanian Shillings</p>
                            <form>
                                <input
                                type="text"
                                onChange={this.onSearchChange}
                                placeholder="Search Currency By Name"
                                />
                            </form>
                            {this.state.currency.filter(isSearched(this.state.searchTerm)).map(item =>
                                <div key={item.id}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><span>{item.name}</span>&nbsp;&nbsp;</td>
                                            <td> <span>{item.tsh}</span>&nbsp;&nbsp;</td>
                                            </tr>
                                            </tbody>
                                    </table>
                                    
                                    
                                    <span>
                                        <button className="dismiss" onClick={()=>this.onDismiss(item.id)} type="button">Dismiss</button>
                                    </span>
                                </div>
                                )}
                    </div>
                    <div className="col span-1-of-2">
                <img src={image2} alt="Not found" className="image-one" />
                <div>
                    <h4 className="cost">HOW MUCH DOES BITCOIN COST</h4><br />
                    <h2 className="cost-figure">1BTC = $8,000 = &euro; 6,500 =400,000 &#x20B1;</h2>
                </div>
            </div>
            </div>
            </section>
            {/* end of the first section */}
            
               {/* beginning of section two */}
            <section className="section-two">
                <div className="row">
                    <div className="col span-1-of-2">
                        <p>Main features of </p><h2 className="section-two-bitcoin">BitCoin</h2>
                    </div>
                    <div className="col span-1-of-2 trading">
                     <p>People value it as a way of investments or making<br/> money trading it.Some specialists  value it more <br/>for its technological features and specifications.</p>
                    </div>
                </div>
            </section>
            {/* end of the second section */}


            {/* beginning of section three */}
             <section className="section-three">
        <div className="row">
            <div className="col span-1-of-3">
                <h2 className="peer"><span className="peer-01">01</span><span className="barline-01"></span>Peer-to-peer<br/><span className="transactions">transactions</span> </h2>  
            </div>

            <div className="col span-1-of-3 fraud">
                <p className="fraud-page1">02|Fraud protection</p><br/>
                <p className="fraud-page2">HTTPS, 2FA(U2F, SMS/TEXT,<br/> email,Authy),IP, selected<br/> transaction confirmation</p>
            </div>

            <div className="col span-1-of-3">
                <h2 className="withdraw"><span className="withdraw-03">03</span><span className="barline-01">Instant withdraw</span></h2>
            </div>
        </div>
    </section>
            {/* end of the three section */}



            {/* beginning of footer section */}
            <div className="row footer-row">
                <div className="footer">
                    <p>&copy; 2020 &nbsp;|&nbsp;Developed by Samwel Mchomvu from NOTTECH Lab</p>
                </div>

            </div>

             {/* end of the footer section */}
        
        </div>
        
    )
    }
}

export default Bitcoin