# Backend

## Requirements
1. Make python virtual env and activate it;
2. Run `make setup` for installing dependencies and init mongodb from dump;

## Run backen
1. Run `make run` for running worksample and campaign apps  
angular app will be hosted on localhost:5000 and localhost:5001

# Frontend

## Dependencies

###Install nodejs >= 4.x and npm >= 3.x
1. Uninstall previous node, npm packages  
`sudo apt-get purge nodejs npm`
2. Install new packages  
`curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

## Run frontend
1. `cd frontend/`
2. `npm install`
3. `npm start`  
angular app will be hosted on localhost:3000