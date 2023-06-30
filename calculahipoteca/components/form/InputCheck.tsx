import React, { FC } from 'react'


interface Props {
    label: string
    status: boolean
}

const InputCheck: FC<Props> = ({ label, status }) => {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" checked={status} />
            <label>{label}</label>
        </div>
    )
}

export default InputCheck