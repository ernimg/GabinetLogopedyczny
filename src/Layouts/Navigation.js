import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Style/NavBar.css';

const list = [
    {   id:1,
        name:"Poradnia Logopedyczna",
        path:"/",
        exact: true,
    },
    {   
        id:2,
        name:"O mnie",
        path:"/about",
    },
    {
        id:3,
        name:"Kontakt",
        path:"/contact",
    },
]
const Navigation = () =>{
    const menu = list.map(item =>(
          <li key={item.id} className="nav__item"><NavLink className="nav__link" activeClassName="nav__link-active" to={item.path} exact={item.exact ? item.exact : false}>
              {item.name}
          </NavLink></li>
    ))
    return(
        <nav className="nav">
            {/* <h1 className="nav__logo">Poradnia Logopedyczna</h1> */}
            <ul className="nav__list">
                {menu}
            </ul>
        </nav>
    )
}
 export default Navigation