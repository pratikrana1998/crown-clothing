const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Tiered Cakes',
    },
    {
      id: 2,
      title: 'Drinks',
    },
    {
      id: 3,
      title: 'Apparel',
    },
    {
      id: 4,
      title: 'Pastry',
    },
    {
      id: 5,
      title: 'Cakes',
    },
  ]

  return (
    /* There are five different category container with each different category at the home page */
    /* Iterating over the categories array to optimize the code (efficient adding of new categories) */

    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div className="background-image"></div>
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
