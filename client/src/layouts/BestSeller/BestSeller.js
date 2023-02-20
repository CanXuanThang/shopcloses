import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import classNames from 'classnames/bind';
import Image from '../../components/Images/Image';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MenuItem from '../Category/MenuItem/MenuItem';
import styles from './BestSeller.module.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

function BestSeller() {
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <Box className={cx('app')} sx={{ flexGrow: 1 }}>
                    <StarBorderIcon className={cx('icon')}></StarBorderIcon>
                    <MenuItem title="Sản phẩm bán chạy" />
                </Box>
                <Box className={cx('container-item')}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Item>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Image
                                            srcMain={
                                                'https://bizweb.dktcdn.net/thumb/large/100/113/556/products/glado-8540-679285-4.jpg?v=1470913500803'
                                            }
                                            srcSub={
                                                'https://bizweb.dktcdn.net/thumb/large/100/113/556/products/glado-8540-679285-3.jpg?v=1470913500803'
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={cx('detail')}>
                                            <span className={cx('title')}>Balo</span>
                                            <span className={cx('descript')}>Siêu bền, siêu rẻ, siêu đỉnh kout</span>
                                            <span className={cx('price')}>100</span>
                                            <Button to={'/'} title={'Chi tiết'} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default BestSeller;
