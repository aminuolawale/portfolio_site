import Layout from "./containers/layout";
import Home from "./containers/home";
import "./sass/main.scss";
import About from "./containers/about";

function App() {
  return (
    <div>
      <Layout>
        <Home></Home>
        <About></About>
      </Layout>
    </div>
  );
}

export default App;
