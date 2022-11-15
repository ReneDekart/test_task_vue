#!/bin/ash
npm install
if [ -n NODE_ENV ]
then
  if [ "$NODE_ENV" == "development" ]
  then
    echo "NODE_ENV is set to development"
    NODE_ENV=production npm run build
    npm run serve
    exit
  elif [ "$NODE_ENV" == "production" ]
  then
    echo "NODE_ENV is set to production"
    npm install -g serve
    serve -s dist -l 8080
    exit
  fi
else
  echo -e "NODE_ENV not set\n"
fi

