import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{//변수지정 함수가 들어감

    return(
    <header>
        <Link to="/">홈</Link> &nbsp;&nbsp;
        <Link to ="/boardWriteReact">게시판</Link>
         <hr/>
    </header>
);  
    

}; 
export default Header;