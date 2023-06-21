import { FC } from 'react'


type InputFieldType = {}

interface Props {
    label: string
    type: "input" | "select" | "range"
    value: string | string[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputField: FC<Props> = ({ label, type, value, onChange }) => {
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
                    <input className="border border-gray-300 rounded-lg px-4 py-2" type="range" min="0" max="50" step="1" />
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