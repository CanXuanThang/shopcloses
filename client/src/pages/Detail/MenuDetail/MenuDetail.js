import { Link } from 'react-router-dom';
import config from '../../../config';
import classNames from 'classnames/bind';
import styles from './MenuDetail.module.scss';
import { Container } from '@mui/system';

const cx = classNames.bind(styles);

function MenuDetail({ data = [] }) {
    return (
        <Container className={cx('wrapper')} style={{ display: 'flex' }}>
            <Link to={config.routes.home}>
                <span>Trang chủ</span>
            </Link>
            <p>/</p>
            <Link to={config.routes.home}>
                <span>Category</span>
            </Link>
            <p>/</p>
            <p>{data.nameProduct}</p>
        </Container>
    );
}

export default MenuDetail;
