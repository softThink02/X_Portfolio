import { useEffect, useState } from "react";

function WelcomeUser() {
  const [location, setLocation] = useState('Detecting User Region...');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setLocation(data.city || data.region || data.country_name);
      } catch (err) {
        console.error("Location fetch failed:", err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="text-white text-lg font-semibold">
      {location.toLowerCase() !== "detecting user region..." ? (
        <p>Welcome from {location} 👋</p>
      ) : <p>{location}</p>}
    </div>
  );
}

export default WelcomeUser;
