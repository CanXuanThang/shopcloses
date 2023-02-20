import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import MenuItem from './MenuItem/MenuItem';

import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import config from '../../config';

const cx = classNames.bind(styles);

export default function Category({ data = [], handleOpenShow }) {
    return (
        <Container>
            <Box className={cx('app')} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {data.map((category) => {
                    let router;
                    if (category.link === 'men') {
                        router = config.routes.men;
                    } else if (category.link === 'woman') {
                        router = config.routes.woman;
                    } else if (category.link === 'jacket') {
                        router = config.routes.jacket;
                    } else if (category.link === 'accessory') {
                        router = config.routes.accessory;
                    }
                    return (
                        <MenuItem
                            key={category.id}
                            title={category.title}
                            to={router}
                            handle={handleOpenShow}
                            dl={category}
                        />
                    );
                })}
            </Box>
        </Container>
    );
}
