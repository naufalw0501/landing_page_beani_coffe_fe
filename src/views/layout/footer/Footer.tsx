import { useLocation } from "react-router-dom";
import "./Footer.css";
import { IoMdSearch, } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import logoImage from "../../asset/image/logo_beanie.png"

function Footer(props: { [key: string]: any }) {
    //--------STATES VIEW--------//

    const location = useLocation()
    const navigate = useNavigate();

    //--------STATES VIEW--------//
    //---------FUNCTIONS---------//
    //---------FUNCTIONS---------//
    return (
        <>
            <div className="container-footer" style={{ display: "flex", flexDirection: "column", backgroundColor: "white", paddingTop: "3dvh" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start", width: "100%", padding: "0dvh 5dvw" }}>
                    <div style={{ flex: "25%", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <button>HOME</button>
                        <button>ABOUT</button>
                        <button>SHOP</button>
                    </div>
                    <div style={{ flex: "25%", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <button>SHOP SINGLE</button>
                        <button>BLOG</button>
                        <button>CONTACT</button>
                    </div>
                    <div style={{ flex: "25%", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <button>TERMS & CONDITION</button>
                        <button>SERVICES</button>
                        <button>PRIVACY POLICY</button>
                    </div>
                    <div style={{ flex: "25%", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <div>ADDRESS, LOCATION, 123</div>
                        <div>YOURINFO@GMAIL.COM</div>
                        <div>111 333 444 555</div>
                    </div>
                </div>
                <div style={{ borderTop: "2px solid var(--primary-color)", marginTop: "2dvh", padding: "1dvh 5dvw", textTransform: "capitalize" }}>
                    © 2025 Beanie. Designed by TemplatesJungle. Develop by Naufal Wijaya
                </div>
            </div>
        </>
    );
}

export default Footer;