import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import classNames from 'classnames/bind';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Content.module.scss';
import Button from '../../../components/Button/Button';
import StarIcon from '@mui/icons-material/Star';
import Image from '../../../components/Images/Image';
import config from '../../../config';

const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content({ data = [], dl = [] }) {
    const handleOnImg = () => {
        const onImg = document.getElementsByClassName(cx('img-big'));
        for (var i = 0; i < onImg.length; i += 1) {
            onImg[i].style.display = 'flex';
        }
    };

    const handleOffImg = () => {
        const onImg = document.getElementsByClassName(cx('img-big'));
        for (var i = 0; i < onImg.length; i += 1) {
            onImg[i].style.display = 'none';
        }
    };
    return (
        <Container className={cx('wrapper')}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Item className={cx('img')}>
                                <img src={data.img} />
                            </Item>
                            <div className={cx('list-img')}>
                                <div onClick={handleOnImg} className={cx('img-small')}>
                                    <img src={data.img2} />
                                </div>
                                <div className={cx('img-big')}>
                                    <img src={data.img2} />
                                    <div className={cx('icon')} onClick={handleOffImg}>
                                        <CloseIcon />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div>
                                <h1 className={cx('name')}>{data.nameProduct}</h1>
                                <span className={cx('price')}>Gia tien: {data.price}</span>
                                <span className={cx('ability')}>Size: {data.size}</span>
                                <p className={cx('description')}>{data.description}</p>
                                <form className={cx('form')}>
                                    <div>
                                        <label>So luong</label>
                                        <input
                                            type={'text'}
                                            title="Số lượng"
                                            defaultValue={'1'}
                                            maxLength={'3'}
                                            className={cx('quantity')}
                                        />
                                    </div>
                                    <Button title={'Mua hàng'} data={data} size={'s'} to={config.routes.paycart} />
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <div className={cx('title')}>
                        <StarIcon className={cx('icon')} />
                        <span>Sản phẩm liên quan</span>
                    </div>
                    <ul>
                        {dl.map((product) => (
                            <li key={product.id} className={cx('container-item')}>
                                <div className={cx('img-1')}>
                                    <Image size={'s'} srcMain={product.img} srcSub={product.img} />
                                </div>
                                <div className={cx('content')}>
                                    <h3>{product.nameProduct}</h3>
                                    <span>Gia: {product.price}</span>
                                    <Button data={product} title={'Chi tiết'} size={'h'} to={config.routes.detali} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </Grid>
                ;
            </Grid>
        </Container>
    );
}

export default Content;
