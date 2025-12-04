import React from 'react'
import { createRoot, createElement } from 'react-dom/client'
import App from "./App";

//const myElement = React.createElement('h1', {}, 'Without JSX')
//const myElement = <h1>With JSX</h1>
//const myElement = <h1>With JSX {5+5}</h1>
// const myElement = (
//   <ul>
//     <li>aplees</li>
//     <li>bananas</li>
//     <li>apricos</li>
//   </ul>
// )
//const myElement = <input type='text' />;

//createRoot(document.getElementById('root')).render(
//  myElement
//);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
