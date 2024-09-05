import { Routes, Route} from 'react-router-dom'

import FormTemplate from './components/FormTemplate'


import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route element={<FormTemplate/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Route>
    </Routes>
  )
}

export default App