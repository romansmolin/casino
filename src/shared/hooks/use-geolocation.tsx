import { useEffect, useState } from 'react'

interface Location {
    latitude: number
    longitude: number
    country: string
    countryCode: string
}

const useGeolocation = () => {
    const [location, setLocation] = useState<Location | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch('https://ipapi.co/json/')
                const data = await res.json()

                if (!data || !data.latitude || !data.longitude) {
                    throw new Error('Invalid response from IP API')
                }

                setLocation({
                    latitude: data.latitude,
                    longitude: data.longitude,
                    country: data.country_name || 'Unknown Country',
                    countryCode: data.country_code || 'Unknown',
                })
            } catch (err) {
                setError('❌ Unable to retrieve location via IP.')
                console.error('Geolocation Error:', err)
            }
        }

        fetchLocation()
    }, [])

    return { location, error }
}

export default useGeolocation
