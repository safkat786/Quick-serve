import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Services from './pages/services'
import Form from './pages/Form'


function App() {
  return (

<Routes>
<Route path="/"element={
 <>
 <Home/>
 <Services/>
 <Form/>
 
  </>
  }
  />

 <Route
 path="/Services"
element={<Services />}
 /> 
 <Route
  path="/home"
element={<Home/>}
 />
 <Route path="/Form" element={<Form/>}/>
 
  </Routes>


  
);
}

 export default App;