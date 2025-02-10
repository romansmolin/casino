import { useState, useEffect } from "react";

type Country = {
    name: string;
    code: string;
};

const useAllCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                const formattedCountries = data.map((country: any) => ({
                    name: country.name.common,
                    code: country.cca2, // 2-letter country code
                }));
                setCountries(formattedCountries);
            } catch (err) {
                setError("Error fetching country list.");
            }
        };

        fetchCountries();
    }, []);

    return { countries, error };
};

export default useAllCountries;
