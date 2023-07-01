"use client"
import ResultButtons from "@/components/ui/ResultButtons"
import Image from "next/image"

// Get the values passed as GET parameters
import { useSearchParams } from 'next/navigation'


const page = () => {
    // Get the values passed as GET parameters
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const bank = searchParams.get("bank")
    const bankArray: Number[] = bank ? [Number(bank)] : []

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