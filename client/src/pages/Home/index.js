import Product from '../../components/Product/Product';
import Banner from '../../layouts/Banner';
import BestSeller from '../../layouts/BestSeller/BestSeller';
import Category from '../../layouts/Category';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header';

import * as setProducts from '../../api/setProducts';
import { getCategory } from '../../api/setCategory';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductByCategory } from '../../api/getProductByCategory';

function Home() {
    const { state } = useLocation();
    const [page, setPage] = useState(1);
    const [bool, setBool] = useState(true);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [suggestedCategory, setSuggestedCategory] = useState([]);

    useEffect(() => {
        setProducts
            .getProduct({ page })
            .then((dl) => setSuggestedProducts((preProducts) => [...preProducts, ...dl]))
            .catch((err) => console.log(err));
    }, [page]);

    useEffect(() => {
        getCategory()
            .then((res) => setSuggestedCategory(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handlePage = () => {
        setPage(page + 1);
    };
    function seeMore() {
        setBool(false);
    }

    useEffect(() => {
        if (state !== null) {
            getProductByCategory(state.id)
                .then((res) => setProductByCategory(res.data))
                .catch((err) => console.log(err));
        }
    }, [state]);

    return (
        <div>
            <Header />
            <Banner />
            <Category data={suggestedCategory} handleOpenShow={seeMore} />
            {bool === true ? (
                <span>
                    <Product data={suggestedProducts} />
                    <div
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', cursor: 'pointer' }}
                        onClick={handlePage}
                    >
                        Xem them
                    </div>
                </span>
            ) : (
                <Product data={productByCategory} />
            )}
            <BestSeller />
            <Footer />
        </div>
    );
}

export default Home;
