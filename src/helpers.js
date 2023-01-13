export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createUrl = (resource, id) => {
    return `https://swapi.dev/api/${resource.toLowerCase()}/${id}/`;
}