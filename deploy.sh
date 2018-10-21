cd client
npm run build
cp -r build/ ../server/src/main/resources/static/
cd ..
git subtree push --prefix server heroku master
