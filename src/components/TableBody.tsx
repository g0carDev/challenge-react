'use client'

import { Fragment } from "react"
import { useTableBanksStore } from "@/stores"
import { TableActions } from "./TableActions"
import Image from "next/image"

export const TableBody = () => {
    const banks = useTableBanksStore((state) => state.filterBanks)
    return (
        <Fragment>
            {banks.map((bank) => (
                <tr key={bank.bankName}>
                    <td>
                        <Image
                            style={{ borderRadius: "10px" }}
                            src={bank.url}
                            alt={bank.bankName}
                            width={50}
                            height={50}
                            priority
                        />
                    </td>
                    <td>{bank.bankName}</td>
                    <td>{bank.description}</td>
                    <td>{bank.age} años</td>
                    <td>
                        <TableActions bank={bank} />
                    </td>
                </tr>
            ))}
        </Fragment>
    )
}
