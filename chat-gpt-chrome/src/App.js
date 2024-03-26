// App.js
import React, { useState } from 'react';
import Generator from './component/Generator';
import Profile from './component/Profile';
import { ROUTES } from './utils/routes';

function App() {
  const [page, setPage] = useState();
  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage ={setPage}/>;
      
    case ROUTES.PROFILE:
      return <Profile setPage ={setPage}/>;
  
    default:
      return <Generator setPage ={setPage}/>;
  }
}

export default App;
