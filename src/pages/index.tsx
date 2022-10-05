import Link from "../components/common/Link";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <h1>root</h1>
      <Link to="/about">about</Link>
    </div>
  );
};

export default HomePage;
