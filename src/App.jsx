// Import the useState hook from React
// useState allows your component to "remember" values between renders (like input text or results)

import { useState } from 'react';

// Import BookCard component from components folder
// This is used to display each book nicely in a card format
import BookCard from './components/BookCard';

function App() {
    // Define a state variable 'query' to store what the user types into the search browser
    // 'setQuery' is the function that updates the value of 'query'
    const [query, setQuery] = useState('');

    // Define another state variable 'books' to store the array of search results
    // This will be updated with the data returned from the Google Books API
    const [books, setBooks] = useState([]);

    // This function will run when the user submits the search form
    const searchBooks = async (e) => {
        e.preventDefault(); // Prevents the page from reloading (default behavior of a form submit)

        // If the user input is just spaces or empty, don't run the search
        if (!query.trim()) return;

        try {
            // Use fetch to call the Google Books API with the user's query
            // encodeURIComponent helps format spaces and special characters (e.g., 'Harry Potter' becomes 'Harry%20Potter')
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
            );

            // Convert the response to JSON (convert the http response into an usable format) so we can work with the data in JavaScript
            const data = await response.json();

            // Update the books state with the list of returned items (or an empty array if none)
            setBooks(data.items || []);
        } catch(error) {
            // If the fetch fails (e.g., no internet), log the error in the browser console
            console.error('Error fetching books:', error);

            // Reset books to empty so no old results are shown
            setBooks([]);
        }
    };

}