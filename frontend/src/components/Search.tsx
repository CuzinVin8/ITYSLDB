import { useState } from 'react';
//import Card from './Card.js';

export default function Search(){
	const [quotes, setQuotes] = useState({});

    async function getSearchResults(search: string, sketch: string) {
        const client = useSanityClient()
        const query = `*[quote match '*${search}*']`
        const quotes = await client.fetch(query)
        return quotes;
    }

    // create a variable to store the timeout
    let timeout: number | undefined = undefined;

    // add an event listener to the textbox to detect when the user stops typing
    let st = (document.getElementById('searchTextbox') as HTMLInputElement);
    console.log(st);
    if(st !== null){
        st.addEventListener('keyup', function() {
        // clear the timeout if it is already set
            clearTimeout(timeout);

            // set the timeout to call the searchJson() function after 300 milliseconds
            timeout = setTimeout(function() {
                console.log(st.value);
                setQuotes(getSearchResults(st.value, ''));
            }, 300);
        });
    }

	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max">
            <pre>{JSON.stringify(quotes)}</pre>
		</ul>
	);
}