import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Tiered Cakes',
      imageUrl: 'https://i.ibb.co/xKvKW1X/tieredcake.png',
    },
    {
      id: 2,
      title: 'Drinks',
      imageUrl: 'https://i.ibb.co/k8PHkDn/drinks.jpg',
    },
    {
      id: 3,
      title: 'Apparel',
      imageUrl: 'https://i.ibb.co/99hQ2PC/apparel.jpg',
    },
    {
      id: 4,
      title: 'Pastry',
      imageUrl: 'https://i.ibb.co/n6Wz846/pastry.jpg',
    },
    {
      id: 5,
      title: 'Cakes',
      imageUrl: 'https://i.ibb.co/ZhHH6M1/oreo.jpg',
    },
  ]

  return (
    /* There are five different category container with each different category at the home page */
    /* Iterating over the categories array to optimize the code (efficient adding of new categories) */

    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => (
        <div key={id} className="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
