import styles from './intoduce.module.css'
import Person from './person'
import Contact from './contact'

function Intoduce() {
    return (
        <div className={styles.intoduce}>
            <Person />
            <Contact />
        </div>
    )
}

export default Intoduce