export function getStrapiUrl(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
        }${path}`;
}
//Helper to make GET request to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiUrl(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}