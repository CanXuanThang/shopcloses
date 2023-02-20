import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Header from '../Header';
import classNames from 'classnames/bind';
import styles from './PayCart.module.scss';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Notification from '../../components/Notification/Notification';

const cx = classNames.bind(styles);

function PayCart() {
    let bool;
    const { state } = useLocation();
    const [data, setData] = useState({
        id_product: state.id,
        email: '',
        name: '',
        phone: '',
        address: '',
        total: state.price,
    });

    if (data.email === '' || data.name === '' || data.phone === '' || data.address === '') {
        bool = false;
    } else {
        bool = true;
    }

    const handlePay = () => {
        const formPay = document.forms['formPay'];
        if (formPay.pay.checked === true) {
            document.getElementById('id1').style.color = '#1990c6';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://127.0.0.1:8000/api/addbill', {
                id_product: data.id_product,
                email: data.email,
                name: data.name,
                phone: data.phone,
                address: data.address,
                total: data.total,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    };

    return (
        <Container>
            <Header />
            <form style={{ marginTop: '90px' }} name={'formPay'} onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className={cx('info')}>
                            <h3>Thông tin nhận hàng</h3>
                            <input
                                onChange={(e) => handle(e)}
                                id="email"
                                type={'email'}
                                value={data.email}
                                placeholder={'Email'}
                            />
                            <input
                                onChange={(e) => handle(e)}
                                id="name"
                                type={'text'}
                                value={data.name}
                                placeholder={'Họ và tên'}
                            />
                            <input
                                onChange={(e) => handle(e)}
                                id="phone"
                                type={'text'}
                                value={data.phone}
                                placeholder={'Số điện thoại'}
                            />
                            <input
                                onChange={(e) => handle(e)}
                                id="address"
                                type={'text'}
                                value={data.address}
                                placeholder={'Địa chỉ'}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Thanh toán</h3>
                        <div className={cx('pay')}>
                            <input type={'radio'} name={'pay'} onChange={handlePay} />
                            <span id="id1">Thanh toán khi nhận hàng</span>
                            <LocalAtmIcon className={cx('icon')} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            <h3>Đơn hàng</h3>
                            <hr></hr>
                            <div className={cx('product')}>
                                <img src={state.img} className={cx('img')} />
                                <span>{state.nameProduct}</span>
                                <span>{state.price}đ</span>
                            </div>
                            <hr></hr>
                            <span className={cx('total')}>
                                <p>Tổng cộng</p>
                                <p className={cx('price')}>{state.price}đ</p>
                            </span>
                            <div className={cx('submit')}>
                                <Notification bool={bool} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default PayCart;
