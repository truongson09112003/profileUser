import styles from './intoduce.module.css'

function Person() {
    return (
        <div className={styles.intoducePerson}>
            <h2 className={styles.perSon}>Nguyễn Trường Sơn</h2>
            <p className={styles.controls}>Học Vấn: </p>
            <p className={styles.description}>Trường Tiểu Học Hương Lung</p>
            <p className={styles.description}>Trường THCS Hương Lung</p>
            <p className={styles.description}>Trường THPT Cẩm Khê</p>
            <p className={styles.description}>Đại Học Kinh Tế Ký Thuật Công Nghiệp Hà Nội</p>
            <p className={styles.controls}>Mô Tả: </p>

            <p className={styles.description_introduce}>
                - Vui vẻ hòa đông mỗi tội hơi rụt rè sở thích đá bóng  cầu lông và một số môn thể thao khác
            </p>
            <p className={styles.description_introduce}>
                - Rất vui vì đã biết đến nghành IT , được sự hỗ trợ của ah Sơn Tại F8 mình đã hoàn thành khóa học HTML & CSS
                , JavaScript cơ bản và nâng cao và ngoài ra mình đã học song khóa ReactJS của anh sơn còn sự án Tik Tok vẫn đang cùng mọi người và anh Sơn làm và tìm hiểu
            </p>
            <p className={styles.description_introduce}>
                - Qua đây xin được cám ơn toàn thể và trang Web F8 đặc biệt là anh Sơn Đặng người truyền lửa IT
            </p>
            <p className={styles.description_introduce}>
                - Mình làm trang này bằng ReactJS nên chưa được tối ưu xin thông cảm...
            </p>

            <p className={styles.controls}>Thành tựu: </p>
            <a className={styles.link} href="https://fullstack.edu.vn/cert/nmmuf">Chứng chỉ HTML & CSS tại F8 ( click me )</a>
            <a className={styles.link} href="https://fullstack.edu.vn/cert/bk597">Chứng chỉ JavaScript cơ bản tại F8 ( click me )</a>
            <a className={styles.link} href="https://fullstack.edu.vn/cert/8ghn4">Chứng chỉ JavaScript nâng cao tại F8 ( click me )</a>
            <a className={styles.link} href="https://fullstack.edu.vn/cert/jc4ia">Chứng chỉ React JS tại F8 ( click me )</a>
        </div>
    )
}

export default Person
