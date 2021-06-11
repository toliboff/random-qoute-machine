import React from 'react';
import {useState} from 'react';

export default function Board() {

  const [quote, setQuote] = useState({text:'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
                                      author:'John Lennon'});
                                      
  return (
    <div id='quote-box'>
      <p>
        {quote.text}
      </p>
      <span>{quote.author}</span>

      <div>
        <div className='social-media'>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-tumblr-square"></i>
        </div>
      </div>
    </div>
  )
}
