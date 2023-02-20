import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, title, size, data = [] }) {
    return (
        <Link to={to} state={data} className={cx('btn', size)}>
            {title}
        </Link>
    );
}

export default Button;
