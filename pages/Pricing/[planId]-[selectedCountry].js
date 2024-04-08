import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PricingPlanCountry = () => {
    const router = useRouter()
    const { planId, selectedCountry } = router.query

    useEffect(() => {
        // Use useEffect to perform actions when planId or selectedCountry changes
        if (planId && selectedCountry) {
            console.log(
                `Selected planId: ${planId}, Selected Country: ${selectedCountry}`
            )
            // Perform additional logic here based on planId and selectedCountry
        }
    }, [planId, selectedCountry])

    // Display loading or placeholder content while waiting for query parameters
    if (!planId || !selectedCountry) {
        return <p>Loading...</p> // You can customize this placeholder content
    }

    return (
        <div>
            <h1>Subscription Plan: {planId}</h1>
            <h2>Selected Country: {selectedCountry}</h2>
            {/* Add your component content here */}
        </div>
    )
}

export default PricingPlanCountry
