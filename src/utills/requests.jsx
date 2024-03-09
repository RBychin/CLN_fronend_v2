import {Config as cfg} from "./config";

export const getApiRequest = async (prefix, params_data) => {
    const params = new URLSearchParams(params_data)
    const response = await fetch(`${cfg.apiUrl}${prefix}/?${params}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Token ${cfg.apiToken}`,
                'Content-Type': 'application/json'
            }
        });
    return await response.json()
}


export const postApiRequest = async (prefix, params_data, data) => {
    const params = new URLSearchParams(params_data)
    const response = await fetch(`${cfg.apiUrl}${prefix}/?${params}`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Token ${cfg.apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    return await response.json()
}