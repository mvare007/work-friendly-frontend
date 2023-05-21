import './App.css'
import Datatable from './components/Datatable'
import { ApiProvider } from './contexts/apiContext'

function App() {
  return (
    <>
      <Datatable url="users" />
    </>
  )
}

export default App;
