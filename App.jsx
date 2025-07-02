import React, { useContext, useEffect } from "react";
import { DataContext } from "./Component/DataProvider/DataProvider.jsx";

import { useState } from 'react';
import './App.css';
import Routing from './Routing.jsx';
import { Type } from "./Utility/action.jsx";
import { auth } from "./Utility/firebase.jsx";

function App() {
  const [count, setCount] = useState(0);
  
  const { state, dispatch } = useContext(DataContext); // ✅ Correct destructuring
  const { user } = state;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER, // ✅ use lowercase "type"
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Optional: unsubscribe on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
