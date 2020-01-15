import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SpeetchTeraphy from '../Pages/SpeechTerapy';
import Materials from '../Pages/Materials';
import Blog from '../Pages/Blog';
import BlogListPost from '../Pages/BlogListPost';
import ErrorPage from '../Pages/ErrorPage';
import Confirmation from '../Pages/Confirmation';
const Page = ()=>{
    return(
        <>
            <Switch>
                <Route  path='/' exact component={HomePage}/>
                <Route  exact path='/about'  component={About}/>
                <Route  exact path='/contact'  component={Contact} />
                <Route  exact path='/speetch-terapy'  component={SpeetchTeraphy} />
                <Route  exact path='/materials'  component={Materials}/>
                <Route  exact path='/blog'  component={BlogListPost}/>
                <Route  exact path='/blog/post/:id' component={Blog}/>
                <Route  exact path='/visit/confitmation/' component={Confirmation}/>
                <Route  path="/*" component={ErrorPage} />
                <Redirect to='/ErrPage'/>
            </Switch>
        </>
    )
}
export default Page;