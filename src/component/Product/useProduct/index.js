import clsx from 'clsx'
import styles from './style.module.css'
import shoppeImg from './img/shoppe.jpg'
import todoImage from './img/todo.png'
import musicImg from './img/music.jpg'
import fbImg from './img/fb.png'


function Production() {
    return (
        <>
            <div className={clsx(styles.flex, 'row')}>
                <a className={clsx(styles.link, ' col l-3 c-6')} href="https://truongson09112003.github.io/Demo-Shop_1/">
                    <div className={styles.useProduct}>
                        <div className={styles.productImage}>
                            <div
                                className={styles.image}
                                style={
                                    {
                                        backgroundImage: `url('${shoppeImg}')`
                                    }
                                }
                            ></div>
                            <p className={styles.hiden}>Nhấn xem sản phẩm</p>
                        </div>
                        <p className={styles.description}>Shoppe hoàn tiền không giới hạn</p>
                    </div>
                </a>
                <a className={clsx(styles.link, ' col l-3 c-6')} href="https://truongson09112003.github.io/TodoList/">
                    <div className={styles.useProduct}>
                        <div className={styles.productImage}>
                            <div
                                className={styles.image}
                                style={
                                    {
                                        backgroundImage: `url('${todoImage}')`
                                    }
                                }
                            ></div>
                            <p className={styles.hiden}>Nhấn xem sản phẩm</p>
                        </div>
                        <p className={styles.description}>Todolist quản lí thời gian</p>
                    </div>
                </a>
                <a className={clsx(styles.link, ' col l-3 c-6')} href="https://truongson09112003.github.io/MUSIC_DONE_BY_TRUONGSON/">
                    <div className={styles.useProduct}>
                        <div className={styles.productImage}>
                            <div
                                className={styles.image}
                                style={
                                    {
                                        backgroundImage: `url('${musicImg}')`
                                    }
                                }
                            ></div>
                            <p className={styles.hiden}>Nhấn xem sản phẩm</p>
                        </div>
                        <p className={styles.description}>Âm nhạc không giới hạn</p>
                    </div>
                </a>
                <a className={clsx(styles.link, ' col l-3 c-6')} href="https://truongson09112003.github.io/h-cnhom/">
                    <div className={styles.useProduct}>
                        <div className={styles.productImage}>
                            <div
                                className={styles.image}
                                style={
                                    {
                                        backgroundImage: `url('${shoppeImg}')`
                                    }
                                }
                            ></div>
                            <p className={styles.hiden}>Nhấn xem sản phẩm</p>
                        </div>
                        <p className={styles.description}>Shoppe hoàn tiền không giới hạn</p>
                    </div>
                </a>
                <a className={clsx(styles.link, ' col l-3 c-6')} href="https://truongson09112003.github.io/for-Join/">
                    <div className={styles.useProduct}>
                        <div className={styles.productImage}>
                            <div
                                className={styles.image}
                                style={
                                    {
                                        backgroundImage: `url('${fbImg}')`
                                    }
                                }
                            ></div>
                            <p className={styles.hiden}>Nhấn xem sản phẩm</p>
                        </div>
                        <p className={styles.description}>Domian đăng ký</p>
                    </div>
                </a>


            </div>
        </>
    )
}

export default Production