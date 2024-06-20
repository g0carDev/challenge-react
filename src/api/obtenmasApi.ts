import { EnvConstants } from "@/constants";
import axios from "axios";

export const obtenmasApi = axios.create({
    baseURL: EnvConstants.BACKEND.API,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
});