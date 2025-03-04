const Home = () => {
  return (
    <div className="text-center">
      <h1>{process.env.RSBUILD_APP_TITLE || "Home Page"}</h1>
      <p>Welcome to our React Template application with Wouter routing.</p>
      
      <div className="content-card mt-6">
        <h2>Features</h2>
        <ul className="list-disc list-inside text-left mt-4">
          <li>Simple and efficient routing with Wouter</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Modern React practices</li>
          <li>Clean project structure</li>
        </ul>
      </div>

      <div className="content-card mt-6">
        <h2>Environment Variables Example</h2>
        <ul className="list-disc list-inside text-left mt-4">
          <li>App Title: {process.env.RSBUILD_APP_TITLE}</li>
          <li>API URL: {process.env.RSBUILD_API_URL}</li>
          <li>App Version: {process.env.RSBUILD_APP_VERSION}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
