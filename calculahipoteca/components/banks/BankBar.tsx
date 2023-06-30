import React from 'react'
import { banks } from '@/utils/constants'
import BankItem from './BankItem'

const BankBar = () => {
    return (
        // Create a bar with the bank icons and the selected one is highlighted
        <div className="flex gap-4">
            <div className="flex items-center gap-5">
                {banks.map((bank, i) => {
                    return (
                        <BankItem key={i} bank={bank.name} selected={false} onClick={() => { }} logo={bank.logo} />
                    )
                })}


            </div>

        </div>
    )
}

export default BankBar