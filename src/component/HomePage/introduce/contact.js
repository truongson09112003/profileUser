import styles from './intoduce.module.css'
import clsx from 'clsx'

const iconFace = "fa-brands fa-facebook"
const iconIns = "fa-brands fa-instagram"
const iconTik = "fa-brands fa-tiktok"
const iconGit = "fa-brands fa-github"

function Contact() {
    return (
        <div className={styles.contact}>
            <p className={styles.controls}>Email: </p>
            <p className={styles.description}>Truongsonpt.80@gamil.com</p>
            <p className={styles.controls}>Address: </p>
            <p className={styles.description}>Hương Lung - Cẩm Khê - Phú Thọ</p>
            <p className={styles.controls}>Living: </p>
            <p className={styles.description}>Trương Định - Hà Nội - Việt Nam</p>
            <p className={styles.controls}>Số Điện Thoại: </p>
            <p className={styles.description}>0869 224 813</p>
            <p className={styles.controls}>Ngày Sinh: </p>
            <p className={styles.description}>09 / 11 /2003</p>
            <p className={clsx(styles.controls, styles.controls_2)}>Mạng Xã Hội: </p>
            <div className={styles.flex}>
                <div className={styles.icon}>
                    <a className={styles.link_icon} href="https://www.facebook.com/profle.php.id.3107.100035504550108">
                        <i className={clsx(iconFace, styles.facebook)}></i>
                    </a>
                </div>
                <div className={styles.icon}>
                    <a className={styles.link_icon} href="https://www.instagram.com/truongson0911/">
                        <i className={clsx(iconIns, styles.intagram)}></i>
                    </a>
                </div>
                <div className={styles.icon}>
                    <a className={styles.link_icon} href="https://www.tiktok.com/@truongson09112003">
                        <i className={clsx(iconTik, styles.tiktok)}></i>
                    </a>
                </div>
                <div className={styles.icon}>
                    <a className={styles.link_icon} href="https://github.com/truongson09112003">
                        <i className={clsx(iconGit, styles.git)}></i>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Contact