import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{ category.toUpperCase() }</Title>
            <CategoryContainer>
            {
                /* This ensures that this component is rendered only when we have some data in products array */
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
            </CategoryContainer>
        </Fragment>
        
    );
}

export default Category;