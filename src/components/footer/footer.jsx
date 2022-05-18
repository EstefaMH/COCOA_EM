import './footer.css'
import fb_icon from '../../utils/icons/bxl-facebook-circle.svg'
import ig_icon from '../../utils/img/instagram.svg'
import wa_icon from '../../utils/img/WhatsApp.svg'

function footer() {
    return (
        <footer>
            <div class="footer_social-media">
                <img src={fb_icon}/>
                <img src={ig_icon}/>
                <img src={wa_icon}/>
            </div>
        </footer>
    );
}

export default footer;
