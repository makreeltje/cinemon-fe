<script lang="ts">
import type { PageData } from './$types'

    export let data:any;
</script>

<h1>Server Information</h1>
<ul>
    {#each data as server}
        <h3>{server.name}</h3>
        <li>{server.host}</li>
        <li>{server.address}</li>
        <li>{server.port}</li>
        <li>{server.machineIdentifier}</li>
        <li>{server.version}</li>
    {/each}
</ul>