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

## Demo
<p float="left">
  <img height="250" hspace="10" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/1336ff12-65a1-4ec5-ab62-bfb93966342b">
  <img height="250"  src="https://github.com/lizaebadi/HackerRoom/assets/111182585/722be085-77ed-4af3-964c-72c11efe36cb"><br/>
  <em>Sign up and login page which will notify you if the input password or email is incorrect</em>
</p>

<p float="left">
  <img  height="250" hspace="10" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/e2a5973e-9cd0-4023-82ed-f5b6759c2814" >
  <img height="250" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/71ece715-c250-4235-9779-25d1a78e73a5" ><br/>
   <em>Welcome message along with the map of the room</em>
</p>

<p float="left">
  <img  height="250" hspace="10" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/32a08b09-3a65-4b3b-b239-6e2413d11cfa" >
  <img height="250" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/d9e5aa3a-fb8a-438c-9f43-4c9b45a196eb" ><br/>
  <em>Example quiz topic and question</em>
</p>

<p float="left">
  <img  height="250" hspace="10" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/b04d29ff-3b99-4042-a3d9-3798153f7f37" >
  <img height="250" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/d6dc5e86-707f-46ff-9014-aed3d41d8267" ><br/>
  <em>In-browser code editor in use</em>
</p>

<p float="left">
  <img  height="250" hspace="10" src="https://github.com/lizaebadi/HackerRoom/assets/111182585/b6436399-57ec-4b23-ac24-39aec2a42cc0" ><br/>
  <em>Settings page where you can amend account details or delete your account which will remove it from the database</em>
</p>

## Contributing
If you'd like to contribute to HackerRoom, please follow these guidelines:

1. Fork the repository and create a new branch
2. Make your changes
3. Submit a pull request

## Acknowledgements
HackerRoom was built by Samuel Badru, Ayoub El-hamdoon, Liza Ebadi, and Destin Cleo Kouamba for the purpose of learning Python. We would like to thank Dilan Patel and Rebecca Monica Amanfo for their help with planning this project. We would also like to thank John Forster for their guidance and support. 
