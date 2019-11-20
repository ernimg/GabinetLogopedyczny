import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SpeetchTeraphy from '../Pages/SpeechTerapy';
import Materials from '../Pages/Materials';
import Blog from '../Pages/Blog';
import BlogListPost from '../Pages/BlogListPost';
import ErrorPage from '../Pages/SpeechTerapy';

const Page = ()=>{
    return(
        <>
            <Switch>
                <Route  path='/' exact component={HomePage}/>
                <Route  path='/about'  component={About}/>
                <Route  path='/contact'  component={Contact} />
                <Route  path='/speetch-terapy'  component={SpeetchTeraphy} />
                <Route  path='/materials'  component={Materials}/>
                <Route  exact path='/blog'  component={BlogListPost}/>
                <Route  exact path='/blog/post/:id' component={Blog}/>
                <Route  path='/ErrPage'  component={ErrorPage} />
            </Switch>
        </>
    )
}
export default Page;