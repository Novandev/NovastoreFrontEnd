import React from 'react'
import './home.css'
import Logo from '../../assets/fullname.png'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    };
render(){
    return(
        <main>
            <section id="jumbotron">
            
            <div class="area" >
            <ul class="circles">
                    <div id="header-text-wrapper">
                        <h1 id="header-text">
                            Novastore
                        </h1>
                        <h2 id="header-subtext">
                            Data Science and Statistics as a service.
                        </h2>
                    </div>
                    
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
            </section>  
            <section>
            </section> 
           
        </main>

    )
}


}

export default Home;
