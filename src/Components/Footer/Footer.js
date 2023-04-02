import { 
    AiOutlineInstagram,
    AiOutlineWhatsApp
} from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='footer'>
            <p>Candel shop</p>
            <icon><AiOutlineInstagram/></icon>
            <icon><AiOutlineWhatsApp/></icon>
            <p>Call us: 79999999999</p>
            <p>Email: info@candels.com</p>
        </div> 
    )
}

export default Footer;