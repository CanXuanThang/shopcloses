import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ srcMain, srcSub, size }) {
    return (
        <div className={cx('container')}>
            <img className={cx('img', size)} src={srcMain} />
            <img className={cx('img-1', size)} src={srcSub} />
        </div>
    );
}

export default Image;
