import { useEffect, useState } from 'react';
import css from './Home.module.css';
import product_1_image from "../../asset/image/product_1.png";
import category_1_image from "../../asset/image/category_1.png";
import category_2_image from "../../asset/image/category_2.png";
import category_3_image from "../../asset/image/category_3.png";
import category_4_image from "../../asset/image/category_4.png";
import service_1_image from "../../asset/image/Vector.png";
import service_2_image from "../../asset/image/Vector (1).png";
import service_3_image from "../../asset/image/Vector (2).png";
import service_4_image from "../../asset/image/Vector (3).png";
import motif_kanan from "../../asset/image/motif_kanan.png";
import motif_kiri from "../../asset/image/motif_kiri.png";
import instagram_1_image from "../../asset/image/instagram (1).png";
import instagram_2_image from "../../asset/image/instagram (2).png";
import instagram_3_image from "../../asset/image/instagram (3).png";
import instagram_4_image from "../../asset/image/instagram (4).png";
import instagram_5_image from "../../asset/image/instagram (5).png";
import instagram_6_image from "../../asset/image/instagram (6).png";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MenuInterface } from '../../../controller/menu/MenuDataInterface';
import { TestimoniInterface } from '../../../controller/testimoni/TestimoniDataInterface';
import { BlogInterface } from '../../../controller/blog/BlogDataInterface';
import { MenuService } from '../../../controller/menu/MenuService';
import { TestimoniService } from '../../../controller/testimoni/TestimoniService';
import { BlogService } from '../../../controller/blog/BlogService';

const Home = () => {

    //--------STATES VIEW--------//

    const [dataMenuTopOrders, setDataMenuTopOrders] = useState<MenuInterface[]>([]);
    const [dataMenuTopRelease, setDataMenuTopRelease] = useState<MenuInterface[]>([]);
    const [dataTestimoni, setDataTestimoni] = useState<TestimoniInterface[]>([
        { id: 0, customer: "", words: "" }
    ]);
    const [dataBlogTopRelease, setDataBlogTopRelease] = useState<BlogInterface[]>([]);

    const [productIndex, setProductIndex] = useState(0);
    const visibleProducts = 3;
    const [currentIndexTestimoni, setCurrentIndexTestimoni] = useState(0);
    //--------STATES VIEW--------//

    //---------FUNCTIONS---------//
    const handleArrowBackBestShop = () => {
        if (productIndex > 0) {
            setProductIndex((prev) => prev - 1);
        }
    };

    const handleArrowForwardBestShop = () => {
        if (productIndex < dataMenuTopOrders.length - visibleProducts) {
            setProductIndex((prev) => prev + 1);
        }
    };

    const handlePreviousTestimoni = () => {
        setCurrentIndexTestimoni((prevIndex) => (prevIndex === 0 ? dataTestimoni.length - 1 : prevIndex - 1));
    };

    const handleNextTestimoni = () => {
        setCurrentIndexTestimoni((prevIndex) => (prevIndex === dataTestimoni.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topOrders = await MenuService.getTopOrders();
                setDataMenuTopOrders(topOrders);

                const topRelease = await MenuService.getTopRelease();
                setDataMenuTopRelease(topRelease);

                const testimoni = await TestimoniService.getAllTestimoni();
                setDataTestimoni(testimoni);

                const topReleaseBlogs = await BlogService.getTopReleaseBlogs();
                setDataBlogTopRelease(topReleaseBlogs);
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    //---------FUNCTIONS---------//

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
                <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                    <div
                        className={css['products']}
                        style={{
                            transform: `translateX(-${productIndex * (100 / visibleProducts)}%)`,
                        }}
                    >
                        {dataMenuTopOrders.map((product) => (
                            <div key={product.id} className={css['card-product']}>
                                <img src={product.image_hd} alt={product.nama} />
                                <div className={css['title']}>{product.nama}</div>
                                <div className={css['price']}>{product.harga}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimoni Area */}
            <div className={css["container-testimoni"]}>
                <button className={css["arrow"]} onClick={handlePreviousTestimoni}>
                    <IoIosArrowBack />
                </button>
                <div>
                    <div className={css["text"]}>{dataTestimoni[currentIndexTestimoni].words}</div>
                    <div className={css["name"]}>{dataTestimoni[currentIndexTestimoni].customer}</div>
                </div>
                <button className={css["arrow"]} onClick={handleNextTestimoni}>
                    <IoIosArrowForward />
                </button>
            </div>

            {/* Category Area */}
            <div className={css["container-category"]}>
                <div className={css['card-image']}>
                    <img src={category_1_image} />
                </div>
                <div className={css['card']}>
                    <div className={css['line']}>
                        <div className={css['title']}>Instant Coffees</div>
                        <div className={css['description']}>Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.</div>
                        <button >SHOP CATEGORY</button>
                    </div>
                </div>
                <div className={css['card-image']}>
                    <img src={category_2_image} />
                </div>
                <div className={css['card']}>
                    <div className={css['line']}>
                        <div className={css['title']}>Coffee Makers</div>
                        <div className={css['description']}>Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.</div>
                        <button >SHOP CATEGORY</button>
                    </div>
                </div>
                <div className={css['card']}>
                    <div className={css['line']}>
                        <div className={css['title']}>Coffee Accessories</div>
                        <div className={css['description']}>Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.</div>
                        <button >SHOP CATEGORY</button>
                    </div>
                </div>
                <div className={css['card-image']}>
                    <img src={category_3_image} />
                </div>
                <div className={css['card']}>
                    <div className={css['line']}>
                        <div className={css['title']}>Coffee Gift Sets</div>
                        <div className={css['description']}>Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.</div>
                        <button >SHOP CATEGORY</button>
                    </div>
                </div>
                <div className={css['card-image']}>
                    <img src={category_4_image} />
                </div>
            </div>

            {/* Products Area */}
            <div className={css["container-products"]}>
                <div className={css["sort-category"]}>
                    <div className={css["title"]}>New Arrivals</div>
                    <div className={css["list-product"]}>
                        {dataMenuTopRelease.map((product, index) => (
                            <div key={index} className={css["card-product"]}>
                                <img src={product.image} alt={product.nama} />
                                <div className={css["text-container"]}>
                                    <div className={css["name"]}>
                                        <div className={css["sub-name"]}>{product.nama}</div>
                                        <div className={css["dots"]}>............................................................................................................................................................</div>
                                        <div className={css["price"]}>{product.harga}</div>
                                    </div>
                                    <div className={css["description"]}>{product.deskripsi}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button>View All</button>
                </div>
                <div className={css["sort-category"]}>
                    <div className={css["title"]}>Best Selling</div>
                    <div className={css["list-product"]}>
                        {dataMenuTopOrders.map((product, index) => (
                            <div key={index} className={css["card-product"]}>
                                <img src={product.image} alt={product.nama} />
                                <div className={css["text-container"]}>
                                    <div className={css["name"]}>
                                        <div className={css["sub-name"]}>{product.nama}</div>
                                        <div className={css["dots"]}>............................................................................................................................................................</div>
                                        <div className={css["price"]}>{product.harga}</div>
                                    </div>
                                    <div className={css["description"]}>{product.deskripsi}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button>View All</button>
                </div>
            </div>

            {/* Subscribe Area */}
            <div className={css['container-subscribe']}>
                <img className={css['motif_kiri']} src={motif_kiri} />
                <img className={css['motif_kanan']} src={motif_kanan} />
                <div className={css['title']}>Subscribe Us</div>
                <div className={css['description']}>Subscribe to our newsletter for discount codes and updates.</div>
                <div className={css['container-input']}>
                    <input placeholder='Write your email address here...' />
                    <button>SUBSCRIBE</button>
                </div>
                <div className={css['logos']}>
                    <div><FaFacebookF /></div>
                    <div><FaInstagram /></div>
                    <div><FaTwitter /></div>
                    <div><FaLinkedinIn /></div>
                    <div><FaYoutube /></div>
                </div>
            </div>

            {/* Service Area */}
            <div className={css['container-service']}>
                <div className={css['card']}>
                    <img src={service_1_image} />
                    <div className={css['title']}>Quick Delivery</div>
                    <div className={css['description']}>Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.</div>
                </div>
                <div className={css['card']}>
                    <img src={service_2_image} />
                    <div className={css['title']}>Pickup in store</div>
                    <div className={css['description']}>Orci dictumst ellentesque ut sem partu rient purus pulvinar feugiat.</div>
                </div>
                <div className={css['card']}>
                    <img src={service_3_image} />
                    <div className={css['title']}>No shipping charge</div>
                    <div className={css['description']}>Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.</div>
                </div>
                <div className={css['card']}>
                    <img src={service_4_image} />
                    <div className={css['title']}>Friendly Service</div>
                    <div className={css['description']}>Dictumst ellentesque ut sem purus pulvinar feugiat orci partu rient.</div>
                </div>
            </div>

            {/* Blogs Area */}
            <div className={css['container-blogs']}>
                <div className={css['header']}>
                    <div className={css['title']}>READ OUR BLOGS</div>
                    <div className={css['scrolling']}>
                        <button className={css['view_all']}>READ BLOG POSTS</button>
                    </div>
                </div>
                <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                    <div className={css['blogs']}>
                        {dataBlogTopRelease.map((blog) => (
                            <div key={blog.id} className={css['card-blog']}>
                                <img src={blog.image} alt={blog.title} />
                                <div className={css['title']}>{blog.title}</div>
                                <div className={css['desc']}>{blog.article}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instagram Area */}
            <div className={css['container-instagram']}>
                <div className={css['title']}>Follow our Instagram #Beanie</div>
                <div className={css['photos']}>
                    <img src={instagram_1_image} />
                    <img src={instagram_2_image} />
                    <img src={instagram_3_image} />
                    <img src={instagram_4_image} />
                    <img src={instagram_5_image} />
                    <img src={instagram_6_image} />
                </div>
            </div>
        </div>
    );
};

export default Home;
