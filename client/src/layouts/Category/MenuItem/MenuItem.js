import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, handle, dl = [] }) {
    return (
        <Link to={to} state={dl} className={cx('menu-item')}>
            <span className={cx('title')} onClick={handle}>
                {title}
            </span>
        </Link>
    );
}

export default MenuItem;
