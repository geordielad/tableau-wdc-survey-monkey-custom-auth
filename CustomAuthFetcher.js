import { Fetcher, FetchUtils, getAuthHeader } from '@tableau/taco-toolkit/handlers'

//  Specify the Tableau API version
const apiVersion = "3.19"
//  Define the default options object for urlFetch

const fetchOptions = (access_token) => x + y;

function getFetchOptions(access_token) {
  const fetchOptions = {
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token //MKGIdImxFYBgyHKOyrFs-PK-k4EsQ4G7YwMDq-1ybfnfUSnMIkPa-tKC.H9LtEWWr4FB5j3Q4spkAEiwucdzQNxbc2uRwg.1HYjYG14v6K6YPzP.GhITPdKf.JZw.HmG'
    }
  }

  return fetchOptions
}
/*
const fetchOptions = {
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer MKGIdImxFYBgyHKOyrFs-PK-k4EsQ4G7YwMDq-1ybfnfUSnMIkPa-tKC.H9LtEWWr4FB5j3Q4spkAEiwucdzQNxbc2uRwg.1HYjYG14v6K6YPzP.GhITPdKf.JZw.HmG'
  }
}
*/

/***********************************/
/*  CustomAuthFetcher              */
/*  Get an API token from Tableau  */
/***********************************/
export default class CustomAuthFetcher extends Fetcher {
  async *fetch({ handlerInput, secrets}) {

    const { access_token, expires_in } = secrets

    //  Define a set of headers to use for all future API calls
     let headers = Object.assign({}, getFetchOptions(access_token).headers);
    //headers['X-Tableau-Auth'] = token;

    const config = {
      "method": "GET",
      "headers": headers
    }

    //  Fetch data from the API
    //yield await FetchUtils.fetchJson(handlerInput.data.url, { headers })
    yield await FetchUtils.fetchJson(handlerInput.data.url, config)
  }
}