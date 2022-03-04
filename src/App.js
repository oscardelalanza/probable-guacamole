import { createContext, useContext } from 'react'

const Context = createContext('default value')

const Provider = ({ children }) => {
  return (
    <Context.Provider value={'my value 2'}>
      {children}
    </Context.Provider>
  )
}

const Content = () => {
  const ctx = useContext(Context);
  return (
    <div>{ctx}</div>
  )
}

function App() {
  return (
    <Provider>
      <Content />
    </Provider>
  )
}

export default App
