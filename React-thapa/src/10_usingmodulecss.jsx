import Netflixseries from "./components/Netflixserisloop";
import "./components/Netflix.module.css"; 

export const App = () => {
    return (
    <section className="container">
        <h1 className="card-heading">List of best Netflix Series</h1>
        <Netflixseries />
    </section>
    );
};