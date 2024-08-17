import React from "react"
import data from "./data"

export default function App()
{
  let [input,setInput] = React.useState(0)
  let [texts,setTexts] = React.useState([])

  function handleSubmit(e)
  {
     e.preventDefault();

     let amount = parseInt(input)
     
     if(amount <= 0)
     {
       amount = 1
     }
     if(amount > 8)
     {
       amount = 8
     }

     setTexts(data.slice(0,amount))
     console.log(texts)
  }

  function handleChange(e)
  {
     let value = e.target.value
     setInput(value)
  }

  let paragraphs = texts.map((item, index)=>{
    return (
      <p key={index}>{item}</p>
    )
  })

  return (
    <main>
      <div className="container">
      <h2>Tired of boring old lorem ipum</h2>
        
        <form onSubmit={handleSubmit}>
            <p>Paragraphs</p>
            <div>
            <input type="number" onChange={handleChange} value={input}/>
            <button>Generate</button>
            </div>
           
        </form>
       <div className="paragraphs">
          {paragraphs}
       </div>
      </div>
    </main>
  )
}