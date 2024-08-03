import 'primeicons/primeicons.css';
import logo from "../../imagens/logo.png";

const Header = () => {
    return (
        <>
        <div>

            <div>
                <section className="header-superior">
                    <img className="logo" src={logo} alt="Digital College Logo" />
                    <input type="text" className="input-busca" placeholder="Pesquise seu produto..." />
                    <a className="link-cadastro" href="" >Cadastre-se</a>
                    <button className="botao-entrar">Entrar</button>
                    <i className="pi pi-shopping-cart" style={{ fontSize: '1.25rem', color: '#C92071' }}></i>
                </section>

            </div>
            <div>
                <nav>
                    <ul className="bar">
                        <li className="bar-1" >Home</li>
                        <li className="bar-2" >Produtos</li>
                        <li className="bar-3" >Categorias</li>
                        <li className="bar-4" >Meus Pedidos</li>
                    </ul>
                </nav>
            </div>

        </div>
        </>
    );
}

export default Header;




