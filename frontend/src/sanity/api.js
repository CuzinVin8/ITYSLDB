import {useSanityClient} from 'astro-sanity'

export async function getAllQuotes() {
    const client = useSanityClient()
    const query = '*[_type == "quote"] | order(season asc, episode asc, sketch asc)'
    const quotes = await client.fetch(query)
    return quotes;
}


export async function getSketchList() {
    const client = useSanityClient()
    let sketchList = []
    const query = '*[_type == "quote"]{sketch} | order(sketch asc)'
    const quotes = await client.fetch(query)

    //push sketches to an array
    Object.keys(quotes).forEach(e => {
        sketchList.push(quotes[e].sketch)
    })
    //remove duplicates in the array
    let uniqueSketches = [...new Set(sketchList)];
    
    return uniqueSketches;
}