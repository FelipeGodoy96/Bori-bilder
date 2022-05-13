import React, { useState, createContext } from 'react'

export const AplicacoesAPI = createContext()

export const AplicacoesProvider = props => {
  const [aplicacoes, setAplicacoes] = useState('')

  return (
    <AplicacoesAPI.Provider value={{ aplicacoes, setAplicacoes }}>
      {props.children}
    </AplicacoesAPI.Provider>
  )
}
