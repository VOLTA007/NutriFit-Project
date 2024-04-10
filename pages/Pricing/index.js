import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDollarSign,
    faStairs,
    faTurnUp,
    faGear,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { RadioGroup, Radio } from '@nextui-org/react'

const Pricing = () => {
    const [isclicked, setisclicked] = useState(null)
    const [istrue, setistrue] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedPlan, setSelectedPlan] = useState(null)
    const router = useRouter()


    const handleCountrySelection = (countryCode) => {
        setSelectedCountry(countryCode)
    }

    const handleContinue = () => {
        if (selectedCountry && selectedPlan) {
            const queryParams = {
                planId: selectedPlan,
                selectedCountry,
            }

            router.push(
                {
                    pathname: `/Pricing/${selectedPlan}-${selectedCountry}`,
                    query: queryParams,
                },
                undefined,
                { shallow: true }
            )
        }
    }

    const handleShowModal = (planId) => {
        setSelectedPlan(planId)
        setistrue(true)
        setisclicked('ok')
    }

    return (
        <>
            
        </>
    )
}
export default Pricing
