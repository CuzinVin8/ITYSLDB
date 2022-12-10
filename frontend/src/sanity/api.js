import {useSanityClient} from 'astro-sanity'

export async function getAllQuotes() {
    const client = useSanityClient()
    const query = '*[_type == "quote"]'
    const quotes = await client.fetch(query)
    return quotes;
}

export async function getSketches() {
    const client = useSanityClient()
    const query = '*[_type == "quote"]'
    const quotes = await client.fetch(query)
    return quotes;
}

export async function getSearchResults(search, sketch) {
    const client = useSanityClient()
    const query = `*[quote match '*${search}*']`
    const quotes = await client.fetch(query)
    return quotes;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//*[quote match "*tuna*"]  //quotes contain the word tuna
//*[_type == "quote"]   //all quote items