async function sendRequest(method:string, path:string, data:any = {}):Promise<RequestResult> {
    const backendUrl = 'http://127.0.0.1:8080/cinemon/api/v1';

    const options:RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'default',
    }
	if(data) {
		options.body = JSON.stringify(data);
	}

    const result = await fetch(`${backendUrl}/${path}`, options)
    
    if (result.status >= 300){
        return {
            data: await result.text(), 
            succes: false
        }
    } else {
        return {
            data: await result.json(), 
            succes: true
        }
    }
}

export interface RequestResult {
    data:string,
    succes:boolean
}

export function get(path:string) {
    return sendRequest("GET", path);
}

export function update(path:string, data:any) {
    return sendRequest("PUT", path, data);
}

export function remove(path:string) {
    return sendRequest("PUT", path);
}

export function create(path:string, data:any) {
    return sendRequest("PUT", path, data);
}