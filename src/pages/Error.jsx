const Error = () => {
  return (
    <div className="text-center">
      <h1 className="text-red-500">Error Page</h1>
      <p>This is an example of an error page in the application.</p>
      
      <div className="content-card mt-6 border border-red-800">
        <div className="flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2>Error Details</h2>
        <div className="bg-red-900 bg-opacity-30 p-4 rounded mt-4 text-left">
          <p className="font-mono text-sm">
            Error Code: 500<br />
            Message: Internal Server Error<br />
            Location: /api/data<br />
            Time: {new Date().toLocaleTimeString()}
          </p>
        </div>
        
        <button className="mt-6 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
