import axios from 'axios';
import { handleErrors } from '../../frontend/ts/handleErrors.js'

interface NetlifyEvent {
    queryStringParameters: {
        userZip?: string;
    };
}

exports.handler = async function(event: NetlifyEvent) {
    const API_KEY = process.env.API_KEY as string;
    const userZip = event.queryStringParameters.userZip;
    try {
        let response = await axios.get(`https://api.api-ninjas.com/v1/weather`, {
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'identity',
                'X-Api-Key': API_KEY
            },
            params: { zip: userZip },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err: any) {
        handleErrors(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
