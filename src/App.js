import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Tiered Cakes',
      imageUrl: 'https://i.ibb.co/L1GVDPW/tieredcake.jpg',
    },
    {
      id: 2,
      title: 'Drinks',
      imageUrl: 'https://i.ibb.co/Wks6NcX/drinks.jpg',
    },
    {
      id: 3,
      title: 'Apparel',
      imageUrl: 'https://i.ibb.co/ZByJk1W/apparel.jpg',
    },
    {
      id: 4,
      title: 'Pastry',
      imageUrl: 'https://i.ibb.co/5vwGYtX/pastry.jpg',
    },
    {
      id: 5,
      title: 'Cakes',
      imageUrl: 'https://i.ibb.co/wLd79bP/cake.jpg',
    },
  ]

  return (
    /* There are five different category container with each different category at the home page */
    /* Iterating over the categories array to optimize the code (efficient adding of new categories) */

    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
