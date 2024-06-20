import { AxiosError } from 'axios';

export * from './cacheHandler'

export const handlerAxiosError = (error: unknown, serviceName: string) => {
    if (error instanceof AxiosError) {
        console.log(`[${error.config?.url}]`, error.response?.data)
        throw new Error(error.response?.data);
    }
    console.log(`[services/${serviceName}]`, error)
    throw new Error('Uncontroller Error');
}