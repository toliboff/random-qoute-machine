import React from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import Board from './Components/Board';

function App() {
  const [quote, setQuote]=useState([]);
  const [quoteReady, setQuoteReady]=useState(false);
  const quotes='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
 

useEffect(()=>{
  const xhr=new XMLHttpRequest();
  xhr.open('GET', quotes);

  xhr.onload = ()=>{
   const data=JSON.parse(xhr.responseText);
   setQuote(data.quotes);
   setQuoteReady(true)
};
xhr.send();
},[])



  const [color, setColor]=useState('purple');
  const colors=['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple', 'brown', 'black'];

  const changeColor=()=>{
    const rndColor = Math.round(Math.random()*8);

    setColor(colors[rndColor]);
  }


  return (
    <div className="App" id="quote-box" style={{backgroundColor:color}}>
      {quoteReady?<Board changeColor={changeColor} color={color} quoteList={quote}/>:null}
      <div style={{color:'#fff', padding:'2em'}}>
        created by <a href='https://github.com/toliboff' target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'#ccc'}}>toliboff</a>
      </div>
      
    </div>
  );
}

export default App;
