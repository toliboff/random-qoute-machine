import logo from './logo.svg';
import './App.css';

function App() {

  const quote='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const xhr=new XMLHttpRequest();
  xhr.open('GET', quote);

  xhr.onload = ()=>{
   const data=JSON.parse(xhr.responseText);
   console.log(data.quotes);
};

xhr.send();
  
  
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
