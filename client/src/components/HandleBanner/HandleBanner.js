import { useState } from 'react';
import bannerFrist from './img/banner-1.jpg';
import bannerSecond from './img/slider_1.webp';
import bannerThird from './img/slider_2.webp';

import classNames from 'classnames/bind';
import styles from './HandleBanner.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const containerBanner = [bannerFrist, bannerSecond, bannerThird];
var i = 0;
const cx = classNames.bind(styles);

function HandleBanner() {
    const [banner, setBanner] = useState(containerBanner[i]);
    // auto run slider
    // useEffect(() => {
    //     setTimeout(() => setBanner(containerBanner[i]), 5000);
    //     i++;
    //     if (i >= 3) {
    //         i = 0;
    //     }
    // });

    const handleBannerLeft = () => {
        if (i === 0) {
            i = 3;
        }
        i--;
        setBanner(containerBanner[i]);
    };

    const handleBannerRight = () => {
        if (i === 2) {
            i = -1;
        }
        i++;
        setBanner(containerBanner[i]);
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('arrow-left')} onClick={handleBannerLeft}>
                <ArrowBackIosIcon size="large" color="#000"></ArrowBackIosIcon>
            </button>
            <img className={cx('img-banner')} src={banner} />
            <button className={cx('arrow-right')} onClick={handleBannerRight}>
                <ArrowForwardIosIcon size="large" color="#000"></ArrowForwardIosIcon>
            </button>
        </div>
    );
}

export default HandleBanner;
