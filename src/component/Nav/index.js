import clsx from 'clsx'
import { Link } from 'react-router-dom'
import styles from './nav.module.css'

const iconHome = "fa-solid fa-house-user"
const productIcon = "fa-brands fa-product-hunt"

function Nav() {
    return (
        <>
            <div className={styles.iconHome}>
                <Link className={styles.HomeLink} to="/">
                    <i className={clsx(iconHome, styles.iconHome_1)}></i>
                </Link>
            </div>
            <div className={styles.iconHome_2}>
                <Link className={styles.HomeLink} to="/product">
                    <i className={clsx(productIcon, styles.iconHome_1)}></i>
                </Link>
            </div>
        </>
    )
}

export default Nav