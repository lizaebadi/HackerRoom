# HackerRoom

HackerRoom is an RPG game built to help you learn Python. In this game, you control a character that can move around and interact with objects. Each object takes you to a learning resource, quiz or practice tool where you can practice your coding skills.

## Technologies
HackerRoom is built using the following technologies:

- MongoDB
- Express
- React
- Node.js
- CSS

## Getting started
To get started with HackerRoom, follow these steps:

1. Clone the repository
```bash
git clone
```
2. Install and start MongoDB:
```bash
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
```
3. Navigate to the repository and run the following:
```bash
cd frontend
npm install
cd ../api
npm install
```
4. Start the development server by running:
```bash
cd api
JWT_SECRET=SUPER_SECRET npm start
```
  *In another terminal*
```bash
cd frontend
npm start
```
5. Open http://localhost:3000 to view the game in your browser.

## Gameplay
In HackerRoom, you control a character that can move around the game using the arrow keys. You can interact with the objects in the room by moving to them and pressing the spacebar.

When you interact with an object, you'll be taken to a learning resource, quiz or practice tool where you can practice your Python skills. 

## Contributing
If you'd like to contribute to HackerRoom, please follow these guidelines:

1. Fork the repository and create a new branch
2. Make your changes
3. Submit a pull request

## Acknowledgements
HackerRoom was built by Samuel Badru, Ayoub El-hamdoon, Liza Ebadi, and Destin Cleo Kouamba for the purpose of learning Python. We would like to thank Dilan Patel and Rebecca Monica Amanfo for their help with planning this project. We would also like to thank John Forster for their guidance and support. 
