const Footer = () => {
    return (
        <>
        <div className="footer-box">
        <div class="footer">
            <section className="footer-secao-1">
                <h1>Digital Store</h1>
                <p className="footer-paragrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </section>
            <section className="footer-secao-2">
                <nav>
                    <ul><h4 className="h4-footer">Informação</h4>
                        <li className="li-footer">Sobre Drip Store</li>
                        <li className="li-footer">Segurança</li>
                        <li className="li-footer">Wishlist</li>
                        <li className="li-footer">Blog</li>
                        <li className="li-footer">Trabalhe conosco</li>
                        <li className="li-footer">Meus Pedidos</li>
                    </ul>
                </nav>
            </section>
            <section className="footer-secao-3">
                <nav>
                    <ul><h4 className="h4-footer">Categorias</h4>
                        <li className="li-footer">Camisetas</li>
                        <li className="li-footer">Calças</li>
                        <li className="li-footer">Bonés</li>
                        <li className="li-footer">Headphones</li>
                        <li className="li-footer">Tênis</li>
                    </ul>
                </nav>
            </section>
            <section className="footer-secao-4">
                    <h4 className="h4-footer">Contato</h4>
                    <p className="footer-paragrafo">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>

                        
            </section>
        

        </div>
        <div style={{ 
            width: '95%', // Linha ocupando 85% da largura da tela
            borderTop: '1px solid white', 
            margin: '20px auto 0', // Centraliza a linha
            paddingTop: '20px'
        }} />
        <div style={{ 
           textAlign: 'center', 
            fontFamily: 'Inter', 
            fontSize: '13px', 
            fontWeight: '400', 
            lineHeight: '24px',
            opacity: '0.7' 
        }}>
            @ 2022 Digital College
        </div>
        </div>
        </>
    );
}
 
export default Footer;