import React, { useState, useEffect } from "react";

const Settings = ({ music }) => {
  const [volume, setVolume] = useState(0.5); // Initial volume state

  useEffect(() => {
    // Set the initial volume when the component mounts
    if (music) {
      music.volume = volume;
    }
    // Cleanup function
    return () => {
      // Reset volume when component unmounts
      if (music) {
        music.volume = 1; // Reset volume to default
      }
    };
  }, [music, volume]); // Dependency on music and volume

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (music) {
      music.volume = newVolume;
    }
  };

  return (
    <div>
      <h2>Another Component</h2>
      <label htmlFor="volume">Volume:</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default Settings;
