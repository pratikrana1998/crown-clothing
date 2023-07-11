import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
    /* Iterating over the categories array to optimize the code (efficient adding of new categories) */
    return (
        <div className="directory-container">
            {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;