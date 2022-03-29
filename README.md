# api-ts_todo
NodeJS, ExpressJS , MySQL - RESTful API // adicionar manipular frases e seus autores CRUD / MVC

# Installation #

npm install
.env - config port 

# Start API #

npm run start-dev

# Routes #
<hr />
<br />

### Lists all tasks ###
GET - 127.0.0.1:2000/list
<br /> <br /> 

### Create a new task ###
POST - 127.0.0.1:2000/new

Pass the "title" key with the author name of the sentence
pass the "content" key with the content of the new task
<br /> <br /> 

### Edit a Task ###
PUT - 127.0.0.1:2000/edit/:id

Pass the "title" key with the author name of the sentence
pass the "content" key with the content of the new task
<br /> <br /> 

### Delete a Task from the database by id ###
DELETE - 127.0.0.1:2000/delete/:id
