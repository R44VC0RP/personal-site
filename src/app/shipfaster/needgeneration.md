List of all the pages that need a little bit extra love:

Flow of the config setup:

"agent": "Hi there, welcome to ShipFaster, my name is SaaSquach, I am here to help you get your app up and running. What do you wanna call your app/website?"

response => config.appName

"agentRules": "Based off of the information given to you by the user for the app name (or possibly more) create 3 descriptions of the app/website that the user can choose from."

response[] => config.appDescription (user can choose one of the 3 descriptions)

"agentRules": "Ask the user what the domain of the app/website is going to be."

response => config.domainName

"agentRules": "Ask the user if they want to use Crisp for their support or if they just want to use an email address."

response<Boolean> => 

IF CRISP:

"agentRules": "Ask the user what the Crisp ID is going to be."

response => config.crisp.id

ELSE:

"agentRules": "Ask the user what the support email address is going to be."

response => config.resend.supportEmail


