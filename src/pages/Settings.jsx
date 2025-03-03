const Settings = () => {
  return (
    <div className="text-center">
      <h1>Settings Page</h1>
      <p>Configure your application preferences here.</p>
      
      <div className="content-card mt-6">
        <h2>Application Settings</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between p-2 border border-gray-700 rounded">
            <span>Dark Mode</span>
            <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700">
              Enabled
            </button>
          </div>
          
          <div className="flex items-center justify-between p-2 border border-gray-700 rounded">
            <span>Notifications</span>
            <button className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700">
              Disabled
            </button>
          </div>
          
          <div className="flex items-center justify-between p-2 border border-gray-700 rounded">
            <span>Language</span>
            <select className="px-3 py-1 bg-gray-800 rounded border border-gray-700">
              <option>English</option>
              <option>Portuguese</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
