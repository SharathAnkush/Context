// import Context from "./Context";
// import Provider from './Provider';
import Hero from './Theme/Compo/Hero'
import React,{useState} from 'react';
import ThemeContext from './Theme/Context'

// function Agentbond(){
//   return(
//     <Context.Consumer>
//       {(context) => (
//         <h2>Mission Name : {context.data.mname}</h2>
//       )}
//     </Context.Consumer>
//   )
// }

function App() {
  const themeHook = useState('light');

  return (
    <div className="App">
      <ThemeContext.Provider value={themeHook}> 
          <Hero/>
      </ThemeContext.Provider>
          {/* <Provider>
            <Agentbond/>
          </Provider> */}
     </div>
  );
}

export default App;
