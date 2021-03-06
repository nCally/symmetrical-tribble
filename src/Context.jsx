
import React, { useState } from 'react';

export const AppContext = React.createContext({
  localGovt: [],
  saveLGA: () => { },

  population: [],
  savePopulation: () => { }

});

function AppProvider({ children }) {

  const [localGovt, setLGA] = useState([]);
  const [population, setPopulationData] = useState([])

  function saveLGA(lgas) {
    setLGA(lgas)
  }

  function savePopulation(data) {
    setPopulationData(data)
  }


  return (
    <AppContext.Provider
      value={{
        localGovt,
        saveLGA,
        population,
        savePopulation,

      }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;