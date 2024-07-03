import { useState } from 'react';

const SettingsPage = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SettingsPage;
