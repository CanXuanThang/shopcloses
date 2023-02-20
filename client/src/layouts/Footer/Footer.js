import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container', 'img')}>
                <h3>BỘ SƯU TẬP 2023</h3>
                <h2>MIỄN PHÍ VẬN CHUYỂN</h2>
                <span className={cx('des-1')}>CHO ĐƠN HÀNG TRÊN 500K</span>
                <span className={cx('des-2')}>CHƯƠNG TRÌNH NÀY ĐƯỢC ÁP DỤNG TRÊN MỌI MẶT HÀNG CỦA CHÚNG TÔI</span>
            </div>
            <div className={cx('content')}>
                <Container>
                    <Box className={cx('container-item')}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <h4 className={cx('menu')}>Chính sách</h4>
                                <ul>
                                    <li href="/">Trang chủ</li>
                                    <li href="/">Giới thiệu</li>
                                    <li href="/">Sản phẩm</li>
                                    <li href="/">Liên hệ</li>
                                </ul>
                            </Grid>
                            <Grid item xs={3}>
                                <h4 className={cx('menu')}>Hướng dẫn</h4>
                                <ul>
                                    <li href="/">Trang chủ</li>
                                    <li href="/">Giới thiệu</li>
                                    <li href="/">Sản phẩm</li>
                                    <li href="/">Liên hệ</li>
                                </ul>
                            </Grid>
                            <Grid item xs={3}>
                                <h4 className={cx('menu')}>Liên hệ</h4>
                                <p className={cx('menu-item')}>
                                    <LocationOnIcon></LocationOnIcon>
                                    <span>Ao đình, làng Phú Ổ, Bình Phú, Thạch Thất, Hà Nội</span>
                                </p>
                                <p className={cx('menu-item')}>
                                    <LocalPhoneIcon></LocalPhoneIcon>
                                    <span>09610xxxx</span>
                                </p>
                                <p className={cx('menu-item')}>
                                    <EmailIcon></EmailIcon>
                                    <span>
                                        <a href="mailto:canxuanthang2001tt@gmail.com">canxuanthang2001tt@gmail.com</a>
                                    </span>
                                </p>
                            </Grid>
                            <Grid item xs={3}>
                                <h4 className={cx('menu')}>Theo dõi bản tin</h4>
                                <p className={cx('menu-item')}>
                                    <span>Nhận được thông tin mới nhất từ website</span>
                                </p>
                                <h4 className={cx('menu')}>Theo dõi bản tin</h4>
                                <div className={cx('icon-comu')}>
                                    <FacebookIcon className={cx('icon')}></FacebookIcon>
                                    <TwitterIcon className={cx('icon')}></TwitterIcon>
                                    <GoogleIcon className={cx('icon')}></GoogleIcon>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
