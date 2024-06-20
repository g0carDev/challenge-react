'use client'

import { Fragment } from 'react'
import { useTableBanksStore } from '@/stores'
import type { Bank } from '@/interfaces'
import { TrashIcon } from './icons'

interface Props {
  bank: Bank
}

export const TableActions = ({ bank }: Props) => {
  const deleteBank = useTableBanksStore((state) => state.deleteBankByName)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <button onClick={() => deleteBank(bank.bankName)}>
        <TrashIcon />
      </button>
    </div>
  )
}
