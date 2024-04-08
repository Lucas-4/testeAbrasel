import "./home.css";
import "../../utils/center.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home center">
            <h1>
                Teste A<span className="green">b</span>
                <span className="yellow">r</span>asel
            </h1>
            <Link to={"/testes/1"}>Teste #1</Link>
            <Link to={"/testes/2"}>Teste #2</Link>
            <Link to={"/testes/3"}>Teste #3</Link>
            <Link to={"/testes/4"}>Teste #4</Link>{" "}
        </div>
    );
}

export default Home;
