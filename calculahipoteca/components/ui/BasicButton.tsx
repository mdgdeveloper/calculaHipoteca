import { FC } from "react"

interface Props {
    id: Number
    onClick: () => void
}


const BasicButton: FC<Props> = ({ id, onClick }) => {


    return (
        // Basic button using div, with border rounded and 400px width 
        <div className="w-24 h-24 rounded border border-gray-300 bg-white hover:bg-gray-50 cursor-pointer flex items-center justify-center p-1">
            <div className="text-gray-800 font-semibold">{id.toString()}</div>
        </div>
    )
}

export default BasicButton