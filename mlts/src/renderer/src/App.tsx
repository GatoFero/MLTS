import { Dashboard } from '@renderer/components/dashboard/Dashboard'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Pruebas } from '@renderer/components/dashboard/Pruebas'

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
    </HashRouter>
  )
}

export default App
