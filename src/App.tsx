import { useCallback, useState } from "react";
import Link from "./components/Link";
import "./App.css";

function App() {
  const [location, setLocation] = useState("/");

  const handleLocation = useCallback((path: string) => {
    setLocation(path);
  }, []);

  /*
    window.location.pathname 은 state가 아니어서 
    화면이 리랜더링 되지 않음. => state 로 관리?
    내부적으로 state를 사용할 가능성이 있어 보인다.
    코드를 까보면 좋을 것 같다.
    
  */

  if (window.location.pathname === "/about") {
    return (
      <div className="App">
        <h1>about</h1>
        <Link to="/" onClick={handleLocation}>
          go main
        </Link>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>root</h1>
      <Link to="/about" onClick={handleLocation}>
        about
      </Link>
    </div>
  );
}

export default App;
