import React, { useState, createContext } from 'react'

export const SubstanciasAPI = createContext()

export const SubstanciasProvider = propss => {
  const [substancias, setSubstancias] = useState('')

  return (
    <SubstanciasAPI.Provider value={{ substancias, setSubstancias }}>
      {propss.children}
    </SubstanciasAPI.Provider>
  )
}
