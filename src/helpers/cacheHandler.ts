export interface CacheData {
    requests?: {
        [key: string]: any
    },
    inCache?: boolean
}

export interface ResponseData {
    inCache: boolean
    data?: any
}

const CACHE_KEY = 'cacheData'


export function getCache(endpoint: string): ResponseData {

    const cacheData: CacheData = JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'undefined')

    if (!cacheData) {
        let newCacheData: CacheData = {
            requests: {},
        }
        localStorage.setItem(CACHE_KEY, JSON.stringify(newCacheData))
        return {
            inCache: false,
            data: undefined,
        }
    }

    if (!cacheData.requests || !cacheData.requests[endpoint]) {
        return { inCache: false, data: undefined }
    }

    return {
        data: cacheData.requests[endpoint],
        inCache: true,
    }

}

export function setCache(endpoint: string, data: any) {
    const cacheData: CacheData = JSON.parse(localStorage.getItem(CACHE_KEY) ?? '{}')
    cacheData.requests = cacheData.requests ?? {}
    cacheData.requests[endpoint] = data
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
}