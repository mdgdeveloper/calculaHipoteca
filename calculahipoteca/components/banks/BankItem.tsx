import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
    bank: string
    selected: boolean
    onClick: () => void
    logo: string
}

const BankItem: FC<Props> = ({ bank, selected, onClick, logo }) => {
    return (
        <div className="w-24 h-24 rounded-xl border-2 bg-white hover:border-blue-400 cursor-pointer flex items-center justify-center p-1">
            <Image src={logo} width={100} height={100} alt={bank} />
        </div>
    )
}

export default BankItem