import React, { useState, useEffect } from 'react';
import './styles/quote.css';

const Quotes = () => {
  const [quotes, setQuote] = useState({ quote: [] });

  // generate random quote

  const randomQuote = () => {
    const fetchData = async () => {
      const res = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await res.json();
      setQuote({ ...quotes, quote: data });
    };
    fetchData();
  };

  useEffect(() => {
    randomQuote();
  }, []);

  const { author, quote } = quotes.quote;

  return (
    <div className="quoteWrapper">
      <div className="newQuote">{quote ? `${quote} - ${author}` : 'Loading ....' }</div>
      <button type="button" onClick={() => randomQuote()} className="getQuote"> New Quote</button>
    </div>
  );
};
export default Quotes;
