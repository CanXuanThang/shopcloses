import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductByCategory } from '../../api/getProductByCategory';
import BestSeller from '../../layouts/BestSeller/BestSeller';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header';
import Content from './Conatiner/Content';
import MenuDetail from './MenuDetail/MenuDetail';

function Detail() {
    let { state } = useLocation();
    const category = state.id_category;
    const [productByCategory, setProductByCategory] = useState([]);
    useEffect(() => {
        getProductByCategory(category)
            .then((res) => setProductByCategory(res.data))
            .catch((err) => console.log(err));
    }, [category]);

    return (
        <div>
            <Header />
            <MenuDetail data={state} />
            <Content data={state} dl={productByCategory} />
            <BestSeller />
            <Footer />
        </div>
    );
}

export default Detail;
