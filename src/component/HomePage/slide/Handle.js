import styles from './slide.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import clsx from 'clsx'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OverView from './overView'
import { useState } from 'react'
import { data } from './index'

function Slide() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: '480px',
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
    };


    return (
        <div >
            <h3 style={{ paddingLeft: 6 }}>Thành viên trong gia đình: </h3>
            <Slider  {...settings} style={{ alignItems: 'center' }} >
                <div>
                    <div className={clsx(styles.imageItem)}
                    >
                        <div className={styles.image}>
                            <img className={styles.img} src='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/272557889_1065137117670259_5000299540954252750_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=5eBAXoyD3HkAX9k6VhV&tn=z8PMvBwwK8Jp-5yN&_nc_ht=scontent.fhan4-3.fna&oh=00_AT8Lo6ArFsJygTGouwQRTRzkPWAQw_m1HGyVIJd2rSwDrA&oe=6276F0EA' alt="Có lỗixảy ra" />
                        </div>
                        <a href="https://www.facebook.com/profle.php.id.3107.100035504550108" className={styles.LinkFace}>
                            <h3 className={styles.heading}>Trường Sơn</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div className={clsx(styles.imageItem)} >
                        <div className={styles.image}>
                            <img className={styles.img} src='https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/175628051_1444245082582446_7891566228467524_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=LHQd9wwYIjQAX9LscnY&tn=z8PMvBwwK8Jp-5yN&_nc_ht=scontent.fhan3-5.fna&oh=00_AT__fuKUnsIz8P7aEeICgVF_VBF5EPPdpw5bze6xzfipPw&oe=62987C21' alt="Có lỗixảy ra" />
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=100013235954408" className={styles.LinkFace}>
                            <h3 className={styles.heading}>Thu Hà</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div className={clsx(styles.imageItem)} >
                        <div className={styles.image}>
                            <img className={styles.img} src='https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/72583430_508466206670689_7604000926235361280_n.jpg?stp=c0.79.720.720a_dst-jpg_s851x315&_nc_cat=110&ccb=1-5&_nc_sid=da31f3&_nc_ohc=fREvGFl6lukAX9xO7u8&_nc_oc=AQk-5tnufHVE99fxLs2-2W_LUVokmqCzweu0GWli-5rLmi7sSjTCEGHw9M3xDNp5miZCtmVR8Qu7y0vXLzj4oz6N&_nc_ht=scontent.fhan3-5.fna&oh=00_AT_fnTz8mCmdg_YbQQTcofsYNvfa5gNnBV4ETz5448gHwg&oe=6297CF1F' alt="Có lỗixảy ra" />
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=100027051372928" className={styles.LinkFace}>
                            <h3 className={styles.heading}>Minh Thu</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div className={clsx(styles.imageItem)} >
                        <div className={styles.image}>
                            <img className={styles.img} src='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/273936358_1079422189575085_5193782632610686903_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SMO0-EYkUTEAX8Zynxd&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8CyI0LeS-b08ZGL_agMV4CSs2qAbXD8XAr_ZoY6C1XnQ&oe=6276C221' alt="Có lỗixảy ra" />
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=100025219418802" className={styles.LinkFace}>
                            <h3 className={styles.heading}>Hương Giang</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div className={clsx(styles.imageItem)} >
                        <div className={styles.image}>
                            <img className={styles.img} src='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/147492761_748364139387463_8436765876408352797_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DSHsyHGsAn0AX-pBkYg&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_BbEt_ZI_cbY9ZwwVSeijFzR9p_6NsBfhnUtkBFzoCBg&oe=6295A97C' alt="Có lỗixảy ra" />
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=100026416507159" className={styles.LinkFace}>
                            <h3 className={styles.heading}>Nguyễn Huy</h3>
                        </a>
                    </div>
                </div>



            </Slider >
        </div >
    )
}

export default Slide