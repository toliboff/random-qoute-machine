import React from 'react';
import {useState} from 'react';

export default function Board(props) {
   const [quote, setQuote] = useState(props.quoteList[0]);

  const styles={
    box:{
      color:props.color,
      backgroundColor:'#fff', 
      transition:'2s',
      width:'50%',
      padding:'3em',
      borderRadius:'15px',
      fontSize:'1.5em'
    },
    quote:{
      // color:'#fff'
    },
    socialMedia:{
      display:'flex',
      width:'85%',
      margin:'20px auto',
      fontSize: '0.8em'
    },
    social:{
      backgroundColor: props.color,
      color:'#fff',
      cursor: 'pointer',
      transition: '2s',
      width:'25px',
      padding:'0.5em 1em',
      margin:'0',
      borderRadius:'3px',
      marginRight:'10px',
      display:'flex',
      justifyContent:'center',
    },
    button:{
       backgroundColor: props.color,
       color:'#fff',
       cursor: 'pointer',
       transition: '2s',
       padding:'0.5em 1em',
       marginLeft: 'auto',
       borderRadius:'3px',
    },
    fadeOut:{
      // opacity:'100%',
      // transition:'1s'
    }
   
  }    
  const pickQuote=()=>{
    document.getElementById('quote').classList.add('fadeOut');
    setQuote(props.quoteList[Math.round(Math.random()*102)]);

  }     

  return (
    <div id='quote-box' style={styles.box}>
      <p style={styles.quote} id='quote'>
        {quote.quote}
      </p>
      <span>{quote.author}</span>

      <div style={styles.socialMedia}> 
        
        <span style={styles.social}><i className="fab fa-twitter"></i></span>
        <span style={styles.social}><i className="fab fa-tumblr"></i></span>
           
        <span onClick={()=>{props.changeColor(); pickQuote()}} style={styles.button}>New Quote</span>
      
      </div>
    </div>
  )
}
