/*import React from "react"
import ReactDOM from "react-dom/client"
const Greeting=()=>{
    return(<div>
        <booklist>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>            
        </booklist>
    </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root')).render(<Greeting/>)
export default Greeting;*/
/*import React from "react";
import ReactDOM from "react-dom/client";
const Greeting = () => {
    return <h2>My First Component</h2>;
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
export default Greeting;*/


/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
function Index() {
  return (
    <div>
      <h1>This is app</h1>
      <App></App>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);
export default Index;*/
/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useState } from "react";
function Index(){
  let message="coming from root App2.js";
  const handleClick = () => {
    console.log("click");
    setCount(count+1);
  };
  const [count,setCount] = useState(0);
  return (
    <div>
       <h2>This is App2</h2>
       <App message={message}></App>
       <App></App>
       <button onClick={handleClick}>clicked {count} times</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
export default Index;*/
/*import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);*/
/*import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
const Greeting = () => {
  const[count,setCount]=useState(0);
  const handleClick = ()=>{
    console.log("clicked");
    setCount(count+1);
  };
return(
  <div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  </div>
)
};
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)*/
/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
/*import React,{ useState,useEffect } from "react"
import ReactDOM from "react-dom/client";
const url='http://api.github.com/users';

const UseEffectFetchData=()=>{
    const [users,setUsers]=useState([]);

    const getUsers=async()=>{
    const response=await fetch(url);
    const users=await response.json();
    setUsers(users);
    }
useEffect(()=>{
    getUsers();
},[]);
return(
    <>
    <h3>github users</h3>
    <ul className="users">
        {users.map((user)=>{
        const { id,login,avatar_url,html_url }=user;
        return(
            <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>profile</a>
                </div>
            </li>
         )
     })}
    </ul>
    </>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< UseEffectFetchData/>);
export default UseEffectFetchData;*/
/*import React, { useState, useEffect } from "react"; 
const UseEffectBasics = () => { 
    const [value,setValue] = useState(0); 
    useEffect(() => {
         console.log("call useEffect"); 
         if(value>0){ 
            document.title=`New Message(${value})`;
         } 
        }); 
            console.log("render component");
             return ( 
             <> 
             <h1>{value}</h1>
              <button className="btn" onClick={()=>setValue(value+1)}> 
              click me </button>
               </> 
               );
};
 /*export default UseEffectBasics;*/
 /*import React from 'react'
 import ReactDOM from 'react-dom/client'
 import ContextAPI from './context-api'
 const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(
    <React.StrictMode>
      <ContextAPI />
    </React.StrictMode>
 )*/
/*import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import UseRefBasics from './useRef-basics'
const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(
    <React.StrictMode>
      <UseRefBasics />
    </React.StrictMode>
 )


 







