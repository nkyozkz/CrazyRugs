import "./Navbar.css"
import CartWidget from "../CartWidget/Cartwidget";

const Navbar = () => {
    return (
    <div className="mb-5 header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-6">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#">Crazy Rugs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="index.html">Inicio</a>
                        <a className="nav-link" href="#">Productos</a>
                        <a className="nav-link" href="#">Contacto</a>
                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Info & Preguntas</a>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;