// API call handling (Placeholder)
export const apiCall = (endpoint, method, body) => {
    return fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json());
};