import * as api from '$lib/api';

export async function load() {
    return await api.get('plex/servers');
}