import * as api from '$lib/api';

export async function load() {
    const response =  await api.get('plex/servers');
    return {
        servers: response.data,
    }
}