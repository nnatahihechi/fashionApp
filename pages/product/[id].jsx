import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from "react"
const Product = () => {
    const [size, setSize] = useState(0)
    const dress = {
        id: 1,
        image: "/image/twopices.jpeg",
        name: "Colored Piece",
        price: [19.4, 20.12, 40.78],
        desc: "This is a two piece set that consists of a top and trouser. It is made from 100% cotton. It has a bubble detailed effect on the sleeves and short with a stylish chest pocket.",
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={dress.image} alt="" layout="fill" />
                </div>
            </div>
            
{/* /* * begining of the rightside of the product page/ */ }
            <div className={styles.right}>
                <h1 className={styles.title}>{dress.name}</h1>
                <span className={styles.price}>${dress.price[size]}</span>
                <p className={styles.desc}>{dress.desc}</p>
                <h3 className={styles.choose}> Choose Your Size</h3>


                <div className={styles.sizes}>
                    <div className={styles.size}>
                        <Image src="/image/size.png" alt="" layout="fill" onClick={() => setSize(0)} />
                        <span className={styles.number}>Small</span>
                    </div>

                    <div className={styles.size}>
                        <Image src="/image/size.png" alt="" layout="fill" onClick={() => setSize(1)} />
                        <span className={styles.number}>medium</span>
                    </div>

                    <div className={styles.size}>
                        <Image src="/image/size.png" alt="" layout="fill" onClick={() => setSize(2)} />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Check out available colors </h3>
                <div className={styles.colors}>
                    <div className={styles.option}>
                        <input type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Other colors</label>
                    </div>

                    <div className={styles.option}>
                        <input type="checkbox"
                            id="teel"
                            name="teel"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Teel</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox"
                            id="white"
                            name="white"
                            className={styles.checkbox}
                        />
                        <label htmlFor="white">White</label>
                    </div>

                    <div className={styles.option}>
                        <input type="checkbox"
                            id="green"
                            name="green"
                            className={styles.checkbox}
                        />
                        <label htmlFor="green">Green</label>
                    </div>

                </div>
                <div className={styles.add}>
                    <input type="number" 
                    defaultvalue="1"
                    className={styles.quantity}
                    />
                    <button className={styles.button}>Add to Cart</button>

                    </div>

            </div>

        </div>
    )
}

export default Product