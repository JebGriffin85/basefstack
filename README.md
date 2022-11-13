# work in progress bro
sudo service postgresql start

npx dotenv sequelize db:drop
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

users cannot create acquisitions for projects they create
users cannot create more than one acquisition for the same project
