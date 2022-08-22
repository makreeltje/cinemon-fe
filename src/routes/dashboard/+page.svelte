<script lang="ts">
	import type { PlexServer } from '$models/plex-server.model';
	import * as api from '$lib/api';

	export let data: any;

	console.log(data);

	let servers: any;

	async function handleSubmit(): Promise<PlexServer> {
		const response = await api.get('plex/servers');

		return response.data;
	}

	let selected: any;
</script>

<h1>Plex servers</h1>

<ul>
	<!-- {#each data.servers as server}
		<h3>{server.name}</h3>
		<li>{server.host}</li>
		<li>{server.address}</li>
		<li>{server.port}</li>
		<li>{server.machineIdentifier}</li>
		<li>{server.version}</li>
	{/each} -->
</ul>

<form on:submit={handleSubmit}>
	<!-- <select bind:value={selected}>
		{#each data.servers as server}
			<option value={server}>
				{server.name} ({server.address})
			</option>
		{/each}
	</select> -->

	<button type="submit"> Submit </button>
</form>
