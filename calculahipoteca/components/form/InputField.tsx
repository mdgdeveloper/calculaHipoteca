'use client'
import { FC, useState } from 'react'
import styles from './InputField.module.css'

type InputFieldType = {}

interface Props {
    label: string
    type: "input" | "select" | "range"
    value: string | string[]
    max?: number
}


const InputField: FC<Props> = ({ label, type, value, max }) => {
    const [rangeValue, setRangeValue] = useState(value)
    const [realValue, setRealValue] = useState((Number(value) * Number(max) / 100).toString())

    // Handle Change for range input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.value)
        // Calculate real value and set it to state as integer
        const realValue = Number(event.target.value) * Number(max) / 100
        const realValueRounded = Math.round(realValue)
        const realValueToShow = pointInNumber(realValueRounded.toString())
        setRealValue(realValueToShow)
    }


    const styleRange = {
        backgroundSize: `${rangeValue}% 100%`,
    }

    const pointInNumber = (value: string) => {
        //  This function returns the number formatted including the point in thousands and millions
        //  Example: 1000000 -> 1.000.000

        // 1. Split the number in two parts: integer and decimal
        const [integer, decimal] = value.split(".")
        // 2. Format the integer part
        const integerFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        // 3. Return the formatted number
        return `${integerFormatted}`

    }


    return (
        <div className="flex flex-col w-full">
            <label className="text-gray-800">{label}</label>
            {
                type === "select" && (
                    <select className="border border-gray-300 rounded-lg px-4 py-2">
                        {Array.isArray(value) && value.map((v, i) => <option key={i} value={v}>{v}</option>)}
                    </select>
                )
            }
            {
                type === "range" && (
                    <div className="flex gap-1 items-center">
                        <input style={styleRange} type="range" min="0" max="100" value={rangeValue} step="1" onChange={handleChange} />
                        <div className="flex items-center justify-center w-20 text-md bg-white px-2 border-2 border-blue-500 rounded-md">
                            {realValue}
                        </div>
                    </div>
                )
            }

            {
                type === "input" && (
                    <input className="border border-gray-300 rounded-lg px-4 py-2" type="number" />
                )
            }

        </div>
    )
}

export default InputField