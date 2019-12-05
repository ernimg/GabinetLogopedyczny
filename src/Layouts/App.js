import React,{Component} from 'react';
import '../Style/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Layouts/Navigation';
import HeaderContent from '../Layouts/HeaderContent';
import Page from '../Layouts/Router';
import Footer from '../Layouts/Footer';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify'

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response == null) {
    toast('BŁĄD', {type: 'error'});
    throw error.message;
  }
  if (error.response.status === 400) {
      debugger
      //TODO Change in case when backend will standarize the response errors.

      const firstErrorFieldName = Object.keys(error.response.data)[0];
      const firstErrorMessage = Object.values(error.response.data)[0][0];
      toast(firstErrorFieldName + ': ' + firstErrorMessage, {type: 'error'});
      throw error.message
  }
});

class App extends Component {
    render(){
      return(
        <Router>
          <ToastContainer  position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
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
