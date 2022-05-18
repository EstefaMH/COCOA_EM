import './header.css'
import Navbar from '../navbar/navbar'

function header(){
    return(
        <header class="content header">
        <h1 class="title_nav"> <a href="./index.html"></a>Cocoa</h1>
        <div class="hamburger">
            <div class="_layer -top"></div>
            <div class="_layer -mid"></div>
            <div class="_layer -bottom"></div>
        </div>
        <Navbar />
        
    </header>
    );
}

export default header;