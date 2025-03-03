const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-500">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      
      <div className="content-card mt-6 border border-yellow-800">
        <div className="flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h2>Oops! We couldn't find that page</h2>
        <p className="mt-4">
          The page you're looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="mt-6 flex justify-center">
          <a href="/" className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
