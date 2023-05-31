import { Route, Routes } from 'react-router-dom'
import { ErrorPage, Home } from './modules'
import { Layout } from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App