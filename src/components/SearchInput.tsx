'use client'

import { useTableBanksStore } from '@/stores'

export const SearchInput = () => {
    const searchValue = useTableBanksStore((state) => state.searchValue)
    const setSearchValue = useTableBanksStore((state) => state.setSearchValue)
    const banks = useTableBanksStore((state) => state.banks)

    return (
        <section className='search-container transition-colors'>
            <input 
            disabled={banks.length === 0}
            className='search-input' placeholder='Search' type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
        </section>
    )
}
