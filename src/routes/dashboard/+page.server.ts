import { api } from './api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, Action } from './$types';

type PlexServer = {
	name: string;
	host: string;
	address: string;
	port: number;
	machineIdentifier: string;
	version: string;
};

export const load: PageServerLoad = async () => {
    const response = await api('GET', 'plex/servers');

    if (response.status === 404) {
        return {
            plexServers: [] as PlexServer[],
        };
    }

    if (response.status === 200) {
        return {
            plexServers: (await response.json()) as PlexServer[],
        };
    }

    throw error(response.status);
}

// export const GET: Action = async () => {
//     await api.get('plex/servers');
// };
