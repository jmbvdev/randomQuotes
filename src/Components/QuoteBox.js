import React, { useState } from 'react';
import quotes from "../quotes.json"
import Button from './Button';

const QuoteBox = () => {
    const colors=["#5b446a","#4c9173","#a21232","#3f3b3b","#ff0000","#183661","#fe4e6e","#393e46"]

    const getNumber=(max)=>Math.floor(Math.random()*max)

    const background= colors[getNumber(colors.length)]

    const [quote, setQuote]= useState(quotes[0])

    const getRandomQuote=()=>{
        setQuote(quotes[getNumber(quotes.length)])
    }
    document.body.style= `background: ${background}`

    return (
        <div className='quote'>
            <p style={{color: background}}><i class="fa-solid fa-quote-left"></i>{quote.quote}</p>
            <h4 style={{color: background}}>{quote.author}</h4>
            <Button getRandomQuote={getRandomQuote} background={background}/>
        </div>
    );
};

export default QuoteBox;