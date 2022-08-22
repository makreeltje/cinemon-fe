<script lang="ts">
    import * as api from '$lib/api';
    let selected:any;

    async function getPlexServers() {
		const response = await api.get('plex/servers');

        return {
            servers: response.data,
        }
	}

    let promise = {};

    function handleClick() {
        promise = getPlexServers();
    }
</script>



<h1>Plex servers</h1>

<button on:click={handleClick}>Get Plex servers</button>

{#await promise}
    <p>...waiting</p>
{:then data}
<pre>
    {JSON.stringify(data)}
</pre>
    <!-- <form>
        <select bind:value={selected}>
            {#each data.data as server}
                <option value={server}>
                    {server.name} ({server.address})
                </option>
            {/each}
        </select>
        <p>{selected}</p>
    </form> -->
{:catch error}
	<p style="color: red">{error}</p>
{/await}

<!-- {:else}
    <form on:submit={getPlexServers}>
        <select bind:value={selected}>
            {#each data.data as server}
                <option value={server}>
                    {server.name} ({server.address})
                </option>
            {/each}
        </select>
        <p>{selected}</p>

        <button type=submit>Get Plex servers</button>
    </form>
{/if} -->

