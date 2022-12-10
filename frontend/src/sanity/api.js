import {useSanityClient} from 'astro-sanity'

export async function getAllQuotes() {
    const client = useSanityClient()
    const query = '*[_type == "quote"] | order(season asc, episode asc, sketch asc)'
    const quotes = await client.fetch(query)
    return quotes;
}