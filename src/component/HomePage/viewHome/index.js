import clsx from 'clsx'
import styles from './home.module.css'
import Avata from '../avata'
import Intoduce from '../introduce'
import Nav from '../Nav'
import Slide from '../slide'

function Home() {
    return (
        <div className={clsx(styles.flex, styles.char)}>
            <div className={clsx(styles.mobile)}>
                <Nav />
            </div>
            <div className={clsx(styles.home)}>
                <div className={styles.flex}>
                    <Avata />
                    <Intoduce />
                </div>
                <Slide />
            </div>
        </div>
    )
}


export default Home