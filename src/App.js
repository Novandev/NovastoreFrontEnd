import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Helmet} from 'react-helmet'

// Page imports
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
                <div>
                    <Helmet>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta charSet="utf-8" />
                        <title>Novastore</title>
                    </Helmet>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/signin" component={SigninForm} />
                        <Route path="/signup" component={SignupForm} /> */}
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        {/* <Route path="/brands/:_id" component={ShowBrand}/>
                        <Route path="/product/:_id" component={ShowProduct}/> */}
                    </Layout>

                </div>

            </Router>
  )
}

export default App;
