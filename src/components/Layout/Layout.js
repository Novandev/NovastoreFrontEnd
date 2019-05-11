import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import React from "react";
// import Cookies from 'js-cookie';
import {Helmet} from "react-helmet";
//

class Layout extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
<div className="content-wrapper">
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <div id='bottom-align'>
                    <Footer/>
                </div>


            </div>


        )

    }
}



export default Layout
