import Context from "./Context";
import Provider from './Provider';

function Agentbond(){
  return(
    <Context.Consumer>
      {(context) => (
        <h2>Mission Name : {context.data.mname}</h2>
      )}
  </Context.Consumer>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Context</h1>
          
             <Provider>
            <Agentbond/>
             </Provider>

           
      </header>
    </div>
  );
}

export default App;
