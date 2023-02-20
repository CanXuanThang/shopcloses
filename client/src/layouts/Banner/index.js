import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import HandleBanner from '../../components/HandleBanner/HandleBanner';
import routes from '../../config/routes';

function Banner() {
    return (
        <div>
            <Container fixed>
                <Link to={routes.home}>
                    <HandleBanner />
                </Link>
            </Container>
        </div>
    );
}

export default Banner;
