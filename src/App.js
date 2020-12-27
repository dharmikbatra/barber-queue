import React from 'react';
import FirstContainer from './Components/FirstPage/FirstContainer/FirstContainer.jsx';
import SecondContainer from './Components/FirstPage/SecondContainer/SecondContainer.jsx';
import ThirdContainer from './Components/FirstPage/ThirdContainer/ThirdContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return(
    <div>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
    </div>
  );
}

export default App;
