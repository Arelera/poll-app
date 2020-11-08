# poll-app

[Live demo](https://polllo.herokuapp.com/)  
A PERN stack poll app. Users can create public/private polls with a limit of 20 choices and vote on any public polls. A user must have access to the link of a private poll to be able to view them but if a user knows the id of a private poll, they can still access it by typing it in the url in the correct order.  
Which polls the user has voted on are kept track of in the localhost so how effective it is is debatable.

The PostgreSQL database is hosted on RDS and is just a single table storing polls. Each poll record has: id (serial primary key), question (varchar(500)), choices (varchar(4500)) stored in a string as json [["choice", votes], ["choice", votes]...], private (boolean), created_at (timestamp).

Used technologies include:

## Frontend

- ReactJS
- Styled components
- React router

## Backend

- Express
- pg
- Helmet
