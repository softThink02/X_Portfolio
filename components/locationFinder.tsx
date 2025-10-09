import { useEffect, useState } from "react";
import {LocalStorage} from '@/_lib/utils'

function WelcomeUser() {
  const [location, setLocation] = useState<string>(LocalStorage("get", { key: "location" }) || 'Detecting User Region...');

  useEffect(() => {
    if (location !== "Detecting User Region...") return;
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setLocation(data.city || data.region || data.country_name);
        LocalStorage("set", {
          key: "location",
          value: location,
          ttl: 1000 * 60 * 60 * 24
        });

      } catch (err) {
        console.error("Location fetch failed:", err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="text-white text-lg font-semibold">
      {location.toLowerCase() !== "detecting user region..." ? (
        <p>Welcome! from {location} 👋</p>
      ) : <p>Welcome! glad to have you</p>}
    </div>
  );
}

export default WelcomeUser;
