import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { IoMdSearch, } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import logoImage from "../../asset/image/logo_beanie.png"

function Navbar(props: { [key: string]: any }) {
    //--------STATES VIEW--------//

    const location = useLocation()
    const navigate = useNavigate();

    //--------STATES VIEW--------//
    //---------FUNCTIONS---------//
    //---------FUNCTIONS---------//
    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{position: "fixed", zIndex: "98", backgroundColor: "var(--light-color)", height: "17dvh", top: 0, width: "100%"}}> </div>
                <div className="container-navbar">
                    <div className="button-left">
                        <button>Home</button>
                        <button>Shop</button>
                        <button>Blog</button>
                        <button>Pages</button>
                    </div>
                    <div className="container-logo">
                        <img src={logoImage} />
                    </div>
                    <div className="button-right">
                        <div className="container-search">
                            <input placeholder="Search Here..." />
                            <IoMdSearch />
                        </div>
                        <FaRegHeart />
                        <IoBagOutline />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;