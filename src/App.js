import PinterestWidget from './PinterestWidget.js'
import {
  Link,
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<PinterestWidget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
