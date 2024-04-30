import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import wingImage from './img/wing.png';

const Header = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const wingStyle = {
        width: '60px',
        height: '60px',
    };

    // Function to handle search query changes and fetch products
    const handleSearchChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        // Convert the query to lowercase to handle case-insensitive comparisons
        const lowerCaseQuery = newQuery.toLowerCase();
        
        // Define the API endpoint based on the query
        let endpoint;
        if (lowerCaseQuery.includes('women')) {
            endpoint = 'https://fakestoreapi.com/products/category/women\'s clothing';
        } else if (lowerCaseQuery.includes('men')) {
            endpoint = 'https://fakestoreapi.com/products/category/men\'s clothing';
        } else {
            // If the query does not match any category, return early without fetching
            setProducts([]);
            return;
        }

        // Fetch products from the endpoint
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    return (
        <>
            <header>
                <img src={wingImage} style={wingStyle} alt="logo" />
                <nav>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Search bar */}
                <div style={{ marginTop: '10px' }}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search for products..."
                    />
                </div>
            </header>

            {/* Display search results */}
            <div style={{ marginTop: '10px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <NavLink to={`/products/${product.id}`}>
                                <div>
                                    <img src={product.image} alt={product.title} style={{width: '100px', height: '100px'}}/>
                                    <h4>{product.title}</h4>
                                    <p>Price: ${product.price.toFixed(2)}</p>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default Header;
