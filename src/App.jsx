import { useState } from 'react';
import './App.css'
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json"

const arrayColors = ["#68da3e","#00c6ab","#b38471","#ff5f7c","#9e6788","#6aa3b4",
"#b93af8","#ff8862","#009cff","#f4a32c","#00956a","#bf6b86"]



const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random()*quantityValues);
  return arrayElements[randomIndex];
}




function App() {
 const [quote, setQuote] = useState(getRandom(db));

const [color, setColor] = useState(getRandom(arrayColors));
  

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db));

  return (
    <div className="App" style={{backgroundColor: color}}>
    <QuoteBox
    quote = {quote} 
    newQuote = {newQuote} 
    color = {color} />
    </div>
  )
}

export default App
