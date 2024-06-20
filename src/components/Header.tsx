'use client'

import { useTableBanksStore } from "@/stores"

export const Header = () => {
    const getAllBanks = useTableBanksStore((state) => state.getAllBanks)
    const banks = useTableBanksStore((state) => state.banks)

    return (
        <header style={{
            marginBottom: "30px",
        }}>
            <h1 style={{
                fontSize: "24px",
                fontWeight: "500",

            }}>Challenge React</h1>

            {
                banks.length == 0 && (
                    <button
                        type="button"
                        onClick={getAllBanks}
                        className="custom-button transition-colors">Get Banks</button>
                )
            }

        </header>
    )
}
