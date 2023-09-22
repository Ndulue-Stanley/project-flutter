import React from 'react';
import { Mainrouter } from './MainRouter/Router';
import {RouterProvider} from 'react-router-dom'


function App() {
  return (
    <div>
      <RouterProvider router={Mainrouter}/>
    </div>
  );
}

export default App;
