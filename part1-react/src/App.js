import './App.css';

import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>
    Esta es mi app
    </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='pink' message='Estamos trabajando'/>
      <Mensaje color='blue' message='En un curso'/>
      <Mensaje color='red' message='De React'/>
      <Description/>
    </div>
  );
}

export default App;
