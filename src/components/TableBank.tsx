'use client'

import React, { useEffect } from 'react'
import { SortKey } from "@/stores";
import { TableBody } from "./TableBody";
import { ImageMessage } from '@/components'
import { EmptyImage, SearchImage } from '@/components/images'
import { DropdownIcon } from "./icons";
import { useTableBanksStore } from '@/stores'

export const HEADERS = [
    {
        label: 'Bank Name',
        key: 'bankName'
    },
    {
        label: 'Description',
        key: 'description'
    },
    {
        label: 'Age',
        key: 'age'
    }
]

export const TableBank = () => {
 
    const getAllBanks = useTableBanksStore((state) => state.getAllBanks)
    const filterBanks = useTableBanksStore((state) => state.filterBanks)
    const sortedByKey = useTableBanksStore((state) => state.sortedByKey)
    const searchValue = useTableBanksStore((state) => state.searchValue)
    const withSearchResults = useTableBanksStore((state) => state.withSearchResults)

    useEffect(() => {
        getAllBanks()
    }, [])

    if (!searchValue && filterBanks.length === 0) {
        return (
            <ImageMessage image={<EmptyImage />} message="There are no banks to display" />

        )
    }
    if (searchValue && !withSearchResults) {
        return (
            <ImageMessage image={<SearchImage />} message="No search results found" />
        )
    }


    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 8px 16px 0px #C8C8C840",
            }} >
            <div
                style={{
                    overflowX: "auto",
                }}>
                <div
                    style={{
                        display: "inline-block",
                        minWidth: "100%",
                        alignItems: "middle",
                    }}
                >
                    <div
                        style={{
                            overflowX: "hidden",
                        }}>
                        <table
                            style={{
                                captionSide: "bottom",
                                fontSize: "0.875rem",
                                width: "100%",
                            }}
                        >
                            <thead>
                                <tr className="transition-colors">
                                    <th></th>
                                    {
                                        HEADERS.map((header) => (
                                            <th key={header.key}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "1rem",
                                                        alignItems: "center",
                                                    }}>
                                                    {header.label}
                                                    <DropdownIcon
                                                        onClick={() => sortedByKey((header.key as SortKey))}
                                                        style={{ color: '#A41D36', cursor: 'pointer' }} />
                                                </div>
                                            </th>
                                        ))
                                    }
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableBody />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
