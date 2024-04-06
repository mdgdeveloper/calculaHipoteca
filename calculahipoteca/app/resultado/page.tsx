"use client"
import ResultButtons from "@/components/ui/ResultButtons"
import Image from "next/image"

// Get the values passed as GET parameters
import { useSearchParams } from 'next/navigation'

// Resultado tipo test: 

const resultado = {
    "id": 1,
    "bank": 3,
    "interestRateType": 1,
    "interestRate": 1.5,
    "initialPayment": 50000,
    "totalPayment": 200000,
    "totalYears": 30,
}


const page = () => {
    // Get the values passed as GET parameters
    const searchParams = useSearchParams()
    // Parameters to be obtained 
    // 1. id
    // 2. bank
    // 3. interestRateType
    // 4. interestRate
    // 5. totalPayment
    // 6. initialPayment
    // 7. totalMonths

    const id = searchParams.get("id")
    const bank = searchParams.get("bank")
    const interestRateType = searchParams.get("interestRateType")
    const interestRate = searchParams.get("interestRate")
    const totalPayment = searchParams.get("totalPayment")
    const initialPayment = searchParams.get("initialPayment")
    const totalYears = searchParams.get("totalYears")

    const bankArray: Number[] = bank ? [Number(bank)] : []


    // Calculate the monthly payment based on the data provided
    const monthlyPayment = () => {
        // 1. Calculate the interest rate per month
        const interestRatePerMonth = Number(interestRate) / 12 / 100
        // 2. Calculate the number of months
        const numberOfMonths = Number(totalYears) * 12
        // 3. Calculate the monthly payment
        const monthlyPayment = (Number(totalPayment) - Number(initialPayment)) * interestRatePerMonth * Math.pow(1 + interestRatePerMonth, numberOfMonths) / (Math.pow(1 + interestRatePerMonth, numberOfMonths) - 1)

        return monthlyPayment
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-1/2 h-1/2 bg-gray-50 rounded-lg shadow-md p-10">
                {/* Header */}
                <div className="flex gap-8">
                    {/* Heading */}
                    <div className="basis-4/5">
                        <h1 className="text-xl font-semibold text-gray-800">Informe hipotecario</h1>
                        {(bankArray) && <ResultButtons id={bankArray} />
                        }
                    </div>
                    <div className="basis-1/5">
                        <div className="flex justify-end items-center">
                            <Image src="/img/logo_base.png" width={100} height={100} alt="logo" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page