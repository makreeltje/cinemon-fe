const base = 'http://127.0.0.1:8080/cinemon/api/v1';

export function api(method: string, resource: string, data?: Record<string, unknown>) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json',
		},
		body: data && JSON.stringify(data),
	});
}