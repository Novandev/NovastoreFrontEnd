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

            <div className="layout-style">
                <Helmet>


                </Helmet>

                <div id={'layout-grid'}>
                    <header>
                            <Header/>
                    </header>
                    <main>
                        {this.props.children}
                    </main>

                    <footer class="footer">
                        <Footer/>
                    </footer>
                </div>




            </div>


        )

    }
}



export default Layout
