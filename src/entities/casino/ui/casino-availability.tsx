"use client";

import useGeolocation from "@/shared/hooks/use-geolocation";
import Image from "next/image";
import React from "react";

const CasinoAvailability = ({ allowedCountries }: { allowedCountries: string[] }) => {
    const { location, error } = useGeolocation();
    const isAllowed = location ? allowedCountries.includes(location.country || "") : null;

    return (
        <div className="bento-block p-4!">
            {location ? (
                <div className="flex justify-between items-center md:justify-start gap-2">
                    {isAllowed !== null && (
                        <div className="flex justify-center items-center gap-4 md:gap-2">
                            <p>
                                {isAllowed ? "✅" : "❌"}
                            </p>
                            <p className={`text-lg max-w-[250px] font-bold ${isAllowed ? "text-green-500" : "text-red-500"}`}>
                                {isAllowed ? `Users from ${location.country} can play!` : `Users from ${location.country} are not allowed to play in this casino!`}
                            </p>
                        </div>
                    )}

                    <p className="block">
                        {location.countryCode !== "Unknown" && (
                            <Image
                                width={50}
                                height={50}
                                src={`https://flagcdn.com/w80/${location?.countryCode?.toLowerCase()}.png`}
                                alt={`${location.country} flag`}
                                className="inline-block w-9 h-7 rounded-[5px]"
                            />
                        )}
                    </p>
                </div>
            ) : error ? (
                null
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CasinoAvailability;
