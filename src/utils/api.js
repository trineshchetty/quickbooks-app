


var http = require("axios").default;


const base_url = "https://api.nytimes.com"

async function apiRequest(endpoint)
{
    try {

        let url = base_url  + endpoint

        return await http.get(url, {
             params: {
                 "api-key":  "WoocePkgVWF5rXOEyJAm4uLgSvJ2AXHT"
             }
        })
    }
    catch(error)
    {
        console.log("API REQUEST ERROR->->->", error)
    }
}



export default apiRequest