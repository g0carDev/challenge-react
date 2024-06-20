import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { BankService } from "@/services";
import { StoresNames } from "@/constants/stores.constants";
import type { Bank } from "@/interfaces";


export interface TableBankState {
    banks: Bank[];
    filterBanks: Bank[];
    searchValue: string;
    sortOrder: 'asc' | 'desc';
    withSearchResults: boolean;
    setSearchValue: (searchValue: string) => void;
    deleteBankByName: (bankName: string) => void;
    getAllBanks: () => void;
    sortedByKey: (key: SortKey) => void;
}

export type SortKey = 'bankName' | 'description' | 'age';

const storeApi: StateCreator<TableBankState> = (set) => ({
    banks: [],
    filterBanks: [],
    searchValue: '',
    sortOrder: 'asc',
    withSearchResults: false,
    setSearchValue: (searchValue: string) => {
        set({ searchValue })
        set((state) => {
            const filterBanks = state.banks.filter((bank) => bank.bankName.toLowerCase().includes(searchValue.toLowerCase()))
            return {
                filterBanks,
                withSearchResults: filterBanks.length > 0 ? true : false
            }
        })
    },
    deleteBankByName: (bankName: string) => {
        set((state) => {
            const banks = state.filterBanks.filter((bank) => bank.bankName !== bankName);
            return {
                filterBanks: banks,
                banks: banks
            }
        })
    },

    sortedByKey: (key: SortKey) => {
        set((state) => {
            const newOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            const sortedData = [...state.banks].sort((a, b) => {
                if (a[key] < b[key]) {
                    return newOrder === 'asc' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return newOrder === 'asc' ? 1 : -1;
                }
                return 0;
            });
            return { filterBanks: sortedData, sortOrder: newOrder };
        })
    },
    getAllBanks: async () => {
        set({ searchValue: '' });
        try {
            const banks = await BankService.getAllBanks();
            set({ banks, filterBanks: banks });
        } catch (error) {
            console.log(error)
        }
    }
});

export const useTableBanksStore = create<TableBankState>()(
    devtools(persist(storeApi, { name: StoresNames.TABLE_BANK }))
);