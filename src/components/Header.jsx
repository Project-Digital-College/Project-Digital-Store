const Header = () => {
    return (
        <>
        <div>
            <div>

                <img class="logo" src="https://media.licdn.com/dms/image/C4E0BAQGOBx_Tgf4xFA/company-logo_200_200/0/1656456553386/digitalcollegebr_logo?e=1729123200&v=beta&t=EP6-vkiEaIXSiL3cSbfsVWsfPwSDgUp7JnVvtk-nuks" alt="Digital College Logo" />

                <h1 class="title-header" >Digital Store</h1>
                <input type="text" placeholder="Pesquise seu produto..." />
                <button>Enviar</button> 

            </div>
            <div>
                <nav>
                    <ul class="bar">
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </nav>
            </div>
            
        </div>
        </>
    );
}
 
export default Header;
