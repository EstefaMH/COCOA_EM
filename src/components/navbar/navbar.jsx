import './navbar.css'


import shopping_cart from '../../utils/img/shoppingCart.svg'


function navbar() {
    return(
         <nav>
            <ul>
                <li class="links active"><a href="../../../index.html">Inicio</a></li>
                <li class="links"><a href="homebakery.html">Información</a></li>
                <li class="links"><a href="galery.html" >Galería</a></li>
                <li class="links"><a href="desserts.html" >Postres</a></li>
                <li class="links"><a href="cakes.html">Tortas</a></li>
                <li class="links"><a href="cookies.html" >Galletas</a></li>
                <li class="cart"><a href="../shoppingCart.html"><img src={shopping_cart} alt=""/></a></li>
            </ul>
            <label id="icon">
                <i class="fa-solid fa-bars"></i>
            </label>
        </nav>
    );
}



    export default navbar;