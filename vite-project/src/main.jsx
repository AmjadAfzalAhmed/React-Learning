import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const newUser = "Amjad Afzal Ahmed has created this line";


const createElement = React.createElement(
  'a',
  {href:'https://facebook.com',target:'_blank'},
  'click to visit facebook',
   "  ",
   newUser  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  createElement
)
