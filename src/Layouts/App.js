import React,{Component} from 'react';
import '../Style/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Layouts/Navigation';
import HeaderContent from '../Layouts/HeaderContent';
import Page from '../Layouts/Router';
import Footer from '../Layouts/Footer';
import axios from "axios";

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response == null) {
    alert(error);
    return;
  }
  if (error.response.status === 400) {
      alert(error.response.data.message);
  }
});

class App extends Component {
    render(){
      return(
        <Router>
          <div className = "app">
            <header className = "header" >
              {<Navigation/>}
              {<HeaderContent/>}
            </header>
            <main className = "page">
              <section className = "page__content">
                {<Page/>}
              </section>
            </main>
            <footer className="footer">
              {<Footer/>}
            </footer>
          </div>
        </Router>
      )
    }

}


export default App;
