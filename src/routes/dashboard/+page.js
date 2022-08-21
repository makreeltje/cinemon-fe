export async function load({ fetch }) {
    const [ servers ] = await Promise.all([
        fetch(`http://127.0.0.1:8080/cinemon/api/v1/plex/servers`).then((r) => r.json())
    ]);
    console.log(servers);
    return { servers };
}