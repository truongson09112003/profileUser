import clsx from 'clsx'
import styles from './Product.module.css'
import Nav from '../Nav'
import ProductHistory from './productUser'


function Product() {
    return (
        <>
            <div className={clsx(styles.productHome, styles.flex_1)}>
                <div className={clsx('flex-der')}>
                    <Nav />
                </div>
                <div className={clsx(styles.home)}>
                    <div className={styles.flex_1}>
                        <p className={styles.des}>Một Số Sản Phẩm Từng Làm.....</p>
                    </div>
                    <div className={styles.flex}>
                        <ProductHistory />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product