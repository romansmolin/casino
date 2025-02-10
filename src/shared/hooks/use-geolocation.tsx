import { useState, useEffect } from "react";

type Location = {
    latitude: number;
    longitude: number;
    country?: string;
    countryCode?: string; // ISO Code for flag
};

const useGeolocation = () => {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const { country, countryCode } = await fetchCountry(latitude, longitude);
                    setLocation({ latitude, longitude, country, countryCode });
                },
                (err) => {
                    if (err.code === 1) {
                        setError("❌ Location access denied. Please allow location access.");
                    } else if (err.code === 2) {
                        setError("❌ Location unavailable. Try again later.");
                    } else if (err.code === 3) {
                        setError("❌ Location request timed out.");
                    } else {
                        setError(`❌ Error getting location: ${err.message}`);
                    }
                }
            );
        } else {
            setError("❌ Geolocation is not supported by this browser.");
        }
    }, []);

    const fetchCountry = async (lat: number, lon: number): Promise<{ country: string; countryCode: string }> => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();
            return {
                country: data.address?.country || "Unknown Country",
                countryCode: data.address?.country_code?.toUpperCase() || "Unknown", // Convert to uppercase (e.g., 'US')
            };
        } catch {
            return { country: "Unknown Country", countryCode: "Unknown" };
        }
    };

    return { location, error };
};

export default useGeolocation;
