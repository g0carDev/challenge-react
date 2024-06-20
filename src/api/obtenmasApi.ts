import axios from "axios";
import { EnvConstants } from "@/constants";

export const obtenmasApi = axios.create({
    baseURL: EnvConstants.BACKEND.API,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
});