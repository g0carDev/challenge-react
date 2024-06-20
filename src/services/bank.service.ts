import { obtenmasApi } from "@/api"
import { Endpoints } from "@/constants"
import { StoresNames } from "@/constants/stores.constants"
import { handlerAxiosError } from "@/helpers"
import type { Bank } from "@/interfaces"


export class BankService {

    static getAllBanks = async (): Promise<Bank[]> => {
        const store = localStorage.getItem(StoresNames.TABLE_BANK)

        if(store){
            const banksStore = JSON.parse(store)
            if(banksStore.state.banks.length > 0){
                return banksStore.state.banks
            }
        }
      
        try {
            const { data: response } = await obtenmasApi.get<Bank[]>(Endpoints.banks.getAll)
            const sortedBanks = response.sort((a, b) => a.bankName.localeCompare(b.bankName))
            return sortedBanks
            
        } catch (error) {
            return handlerAxiosError(error, 'getAllBanks')
        }
    }
   
}