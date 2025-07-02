// BookCard is a functional component that takes 'props' (data) from App.jsx
// It displays one book: cover, title, author, rating, and tag

export default function BookCard({title, author, cover, tag, googleRating}) {
  return (
    // Card container with white background, rounded corners, shadow, and padding
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col">

        {/* Image of the book cover (or placeholder if missing) */}
        <img 
          src={cover} // URL of the image to display
          alt={title} // Used by screen readers and for accessibility
          className="w-full h-60 object-cover rounded-md mb-4" // Styling: fixed height, rounded edges, spacing
        />

        {/* Title of the book, bold and large */}
        <h2 className="text-lg font-semibold mb-1">{title}</h2>

        {/* Author(s) displayed below the title */}
        <p className="text-sm text-gray-600 mb-2">{author}</p>

        {/* If a Google rating exists, display it */}
        {googleRating && (
          <p className="text-yellow-600 text-sm mb-2">⭐ {googleRating} / 5</p>
        )}

        {/* If a tag is provided (like 'Kindle', 'Read'), show it in a styled pill */}
        {tag && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full w-fit">
            {tag}
          </span>
        )}
    </div>
  );
}