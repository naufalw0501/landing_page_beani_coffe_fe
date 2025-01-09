import { useContext, useState } from 'react';
import css from './Home.module.css';
import { useNavigate } from "react-router-dom";
import AppContext from '../../../Context';
import product_1_image from "../../asset/image/product_1.png";
import product_2_image from "../../asset/image/product_2.png";
import product_3_image from "../../asset/image/product_3.png";
import product_4_image from "../../asset/image/product_4.png";
import motif_kanan from "../../asset/image/motif_kanan.png";
import motif_kiri from "../../asset/image/motif_kiri.png";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);
    const setContextUserEntity = context.setContextUserEntity;

    const [productIndex, setProductIndex] = useState(0);
    const products = [
        { id: 1, image: product_2_image, title: 'Caramelicious', price: '$29.00' },
        { id: 2, image: product_3_image, title: 'Hazelnut Heaven', price: '$29.00' },
        { id: 3, image: product_4_image, title: 'Maple Magic', price: '$29.00' },
        { id: 1, image: product_2_image, title: 'Caramelicious', price: '$29.00' },
        { id: 2, image: product_3_image, title: 'Hazelnut Heaven', price: '$29.00' },
        { id: 3, image: product_4_image, title: 'Maple Magic', price: '$29.00' },
        { id: 1, image: product_2_image, title: 'Caramelicious', price: '$29.00' },
        { id: 2, image: product_3_image, title: 'Hazelnut Heaven', price: '$29.00' },
        { id: 3, image: product_4_image, title: 'Maple Magic', price: '$29.00' },
        { id: 1, image: product_2_image, title: 'Caramelicious', price: '$29.00' },
        { id: 2, image: product_3_image, title: 'Hazelnut Heaven', price: '$29.00' },
        { id: 3, image: product_4_image, title: 'Maple Magic', price: '$29.00' },
        { id: 1, image: product_2_image, title: 'Caramelicious', price: '$29.00' },
        { id: 2, image: product_3_image, title: 'Hazelnut Heaven', price: '$29.00' },
        { id: 3, image: product_4_image, title: 'Maple Magic', price: '$29.00' },
    ];
    const testimonials = [
        {
            text: "“Habitant aliquet sed suspendisse lectus sit gravida sit morbi augue. Porta cursus diam sit velit mi. Maecenas scelerisque tellus nulla ut vitae amet morbi platea blandit vestibulum dignissim.”",
            name: "Sarah Anderson",
        },
        {
            text: "“Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.”",
            name: "John Smith",
        },
        {
            text: "“Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.”",
            name: "Emily Johnson",
        },
    ];

    const visibleProducts = 3;

    const handleArrowBackBestShop = () => {
        if (productIndex > 0) {
            setProductIndex((prev) => prev - 1);
        }
    };

    const handleArrowForwardBestShop = () => {
        if (productIndex < products.length - visibleProducts) {
            setProductIndex((prev) => prev + 1);
        }
    };

    const [currentIndexTestimoni, setCurrentIndexTestimoni] = useState(0);

    const handlePreviousTestimoni = () => {
        setCurrentIndexTestimoni((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextTestimoni = () => {
        setCurrentIndexTestimoni((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={css['container']}>
            {/* Cover Image Area */}
            <div className={css['container-cover-image']}>
                <img className={css['left-image']} src={product_1_image} />
                <div className={css['right-image']}>
                    <div className={css['title']}>
                        Special <span style={{ color: "var(--primary-color)" }}>Coffee</span>
                    </div>
                    <div>
                        Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas
                        vitae ut cras aenean enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl
                        faucibus.
                    </div>
                    <button>Order Now</button>
                </div>
            </div>

            {/* Welcoming Text Area */}
            <div className={css['container-welcoming']}>
                <img className={css['motif_kiri']} src={motif_kiri} />
                <img className={css['motif_kanan']} src={motif_kanan} />
                <div>
                    Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae
                    ut cras aenean enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl faucibus.
                </div>
            </div>

            {/* Shop Best Coffee Area */}
            <div className={css['container-shop-best-coffee']}>
                <div className={css['header']}>
                    <div className={css['title']}>SHOP BEST COFFEE</div>
                    <div className={css['scrolling']}>
                        <button className={css['view_all']}>VIEW ALL</button>
                        <button className={css['arrow']} onClick={handleArrowBackBestShop}>
                            <IoIosArrowBack />
                        </button>
                        <button className={css['arrow']} onClick={handleArrowForwardBestShop}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

                <div style={{maxWidth: "100%", overflow: "hidden"}}>
                    <div
                        className={css['products']}
                        style={{
                            transform: `translateX(-${productIndex * (100 / visibleProducts)}%)`,
                        }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className={css['card-product']}>
                                <img src={product.image} alt={product.title} />
                                <div className={css['title']}>{product.title}</div>
                                <div className={css['price']}>{product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className={css["container-testimoni"]}>
                <button className={css["arrow"]} onClick={handlePreviousTestimoni}>
                    <IoIosArrowBack />
                </button>
                <div key={currentIndexTestimoni}>
                    <div className={css["text"]}>{testimonials[currentIndexTestimoni].text}</div>
                    <div className={css["name"]}>{testimonials[currentIndexTestimoni].name}</div>
                </div>
                <button className={css["arrow"]} onClick={handleNextTestimoni}>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Home;
