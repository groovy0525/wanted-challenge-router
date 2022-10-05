import Router, { Route } from "./components/common/Router";
import HomePage from "./pages";
import AboutPage from "./pages/about";

import "./App.css";

function App() {
  /*
    window.location.pathname 은 state가 아니어서 
    화면이 리랜더링 되지 않음. => state 로 관리?
    내부적으로 state를 사용할 가능성이 있어 보인다.
    코드를 까보면 좋을 것 같다.
    
  */

  return (
    <Router>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Router>
  );
}

export default App;
