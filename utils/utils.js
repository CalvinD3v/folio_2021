const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
async function fetchQuery(path, params = null) {
    let url
    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`
    } else {
        url = `${baseUrl}/${path}`
        console.log(url)
    }
    const response = await fetch(`${url}`)
    const data = await response.json()
    return data
}
export { baseUrl, fetchQuery }