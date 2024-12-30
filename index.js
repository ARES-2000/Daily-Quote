class quoteData{
   quote;
   author;
}

fetch("https://api.api-ninjas.com/v1/quotes?category=good",{
   headers :new Headers({
      "x-api-key" : "vRsHcNdviiqQppBMFG2Thw==aFMyzTMObfnsjjOn"
   })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      quoteData.quote = data[0].quote
      quoteData.author = data[0].author
  });
  setTimeout(()=>{
   console.log(quoteData.quote)
   console.log(`'${quoteData.author}'`)
   document.querySelector('.css-quote').innerText = `'${quoteData.quote}'`
   document.querySelector('.css-quote-author').innerText = `-${quoteData.author}-`
  },2000)

  





