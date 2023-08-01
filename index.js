import Connector from '@tableau/taco-toolkit'

const connector = new Connector(onInitialized)

function onInitialized() {
  const elem = document.getElementById('submitButton')
  elem.innerText = 'Get Data'
  elem.removeAttribute('disabled')
  setCredential()
  document.getElementById('accessToken').focus()
}

function setCredential() {
  if (!connector.secrets) return
  const { accessToken } = connector.secrets
  document.getElementById('accessToken').value = accessToken
  }

function submit() {
  const accessToken = document.getElementById('accessToken').value
 
  if (!accessToken) {
    return
  }

  connector.secrets = {
    expires_in: Date.now() + 60 * 60 * 1000, //expires in an hour
    access_token: accessToken,
  }

  //TODO: change the url to your api url
  connector.handlerInputs = [
    {
      fetcher: 'CustomAuthFetcher',
      parser: 'CustomAuthParser',
      data: {
        url: 'https://api.surveymonkey.com/v3/surveys',
      },
    },
  ]
 
  connector.submit()
}

window.addEventListener('load', function () {
  document.getElementById('submitButton').addEventListener('click', submit)
})