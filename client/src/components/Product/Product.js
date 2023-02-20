import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Container } from '@mui/system';
import Image from '../Images/Image';
import Button from '../Button/Button';
import config from '../../config';

const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Product({ data = [] }) {
    return (
        <Container className={cx('wrapper')}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {data.map((product) => (
                        <Grid item xs={3} key={product.id}>
                            <Item className={cx('container')}>
                                <div className={cx('container-item')}>
                                    <Image srcMain={product.img} srcSub={product.img2} />
                                    <span className={cx('title')}>{product.nameProduct}</span>
                                    <span className={cx('price')}>{product.quantity}</span>
                                    <Button data={product} to={config.routes.detali} title={'Chi tiết'} />
                                </div>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
