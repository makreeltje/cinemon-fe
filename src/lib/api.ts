async function send(method: string, path: string, data?: any): Promise<RequestResult> {
	const base = 'http://127.0.0.1:8080/cinemon/api/v1';

	const options: RequestInit = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		// mode: 'no-cors',
		// cache: 'default',
	};

	if (data) {
		options.body = JSON.stringify(data);
	}

	const response = await fetch(`${base}/${path}`, options);

	if (response.status >= 300) {
		return {
			data: await response.text(),
			success: false,
		};
	} else {
		return {
			data: await response.json(),
			success: true,
		};
	}
}

export interface RequestResult {
	data: string;
	success: boolean;
}

export function get(path: string) {
	return send('GET', path);
}

export function update(path: string, data: any) {
	return send('PUT', path, data);
}

export function remove(path: string) {
	return send('DELETE', path);
}

export function create(path: string, data: any) {
	return send('POST', path, data);
}
