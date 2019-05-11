import React from 'react'
import './home.css'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    };
render(){
    return(
        <div id='home-wrapper'>
            <section id="jumbotron">
        
                    <div id="header-text-wrapper">
                        <h1 id="header-text">
                            Novastore
                        </h1>
                        <h2 id="header-subtext">
                            Data Science and Statistics as a service.
                        </h2>
                    </div>
            </section>  
            <section id="intro">
            <article>
                <h2>
                    What is Novastore?
                </h2>
                <p>
                   A service to help analyze and model your data with ease.
                </p>
                <p>
                    Using your files, we return statistics and give you access to predictions on your data
                </p>

            </article>
            <article>
                <h2>
                    How does this work?
                </h2>

                <h3> We use a csv file of the data that you would like analyzed or modeled to do the following:</h3>
                <div id="functions">
                    <div>
                        <img src="" alt=""/>
                        <p>Return the descriptive statistics for each feature/column in JSON format</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>Use your data to get predictions on a target value</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>Check your models accuraccy</p>
                    </div>
                </div>
            </article>            
            </section> 
           
        </div>

    )
}


}

export default Home;
