import 'primeicons/primeicons.css';
import logo from "../../imagens/logo.png";

const Header = () => {
    return (
        <>
        <div>
            <div>
                <section class="header-superior">
                    <img class="logo" src={logo} alt="Digital College Logo" />
                    <input type="text" class="input-busca" placeholder="Pesquise seu produto..." />
                    <a class="link-cadastro" href="" >Cadastre-se</a>
                    <button class="botao-entrar">Entrar</button>
                    <i className="pi pi-shopping-cart" style={{ fontSize: '1.25rem', color: '#C92071' }}></i>
                </section>

            </div>
            <div>
                <nav>
                    <ul class="bar">
                        <li class="bar-1" >Home</li>
                        <li class="bar-2" >Produtos</li>
                        <li class="bar-3" >Categorias</li>
                        <li class="bar-4" >Meus Pedidos</li>
                    </ul>
                </nav>
            </div>
            
        </div>
        </>
    );
}
 
export default Header;
