import { useEffect, useState } from 'react'
import yelp from '../api/yelp';


export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const seachApi = async (searchTerm) => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'NYC'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        seachApi('pasta')
    }, [])

    return [seachApi, results, errorMessage];

}