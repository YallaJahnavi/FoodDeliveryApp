# FoodDeliveryApp 

# Project Structure: 
This project likely consists of the following components:
1. Frontend   : The client-side application which is responsible for user interaction. This is built using React Framework.
2. Backend    : This is server-side logic, data base integration & API connectivity. This is built by cloning swiggy API.
3. DataBase   : It is used for storing the user data, restaurant information, orders and other relevant data.

# Features:
This Food Delivery Application includes the following features:
1. User registration & login : Users can create accounts, log in and manage their profiles.
2. Restaurant Listings       : Users can browse restaurants, view menu and browse orders.
3. Order management          : Users can track their orders and administrators can manage orders and restaurant information.
4. Payment Integration       : Integrating with payment gateways to facilitate online payments.
5. Search & Filter           : Users can search for restaurants & filter results based on cuisine, location or ratings.
6. Restaurant Dashboard      : Restaurants can manage their menu's, orders and profiles.

# Frontend Functionality:
The frontend might include:
1. User interface            : A user-friendly interface for users to interact with the application.
2. Client-side validation    : Validation of user input to ensure data consistency & prevent errors.
3. API integration           : Integrated with backend API's to fetch and update data.

# Backend Functionality:
The backend might include:
1. API endpoints            : API's for user registration, login, restaurant listings, order management and payment processing.
2. Data base models         : Models for users, restaurants, orders and other relevant data.
3. Authentication & Authorization   : Implementation of authentication & authorization mechanisms to secure user data and ensure authorized access.

# Technologies Used:
The technologies utilized by the project include:
1. Programming languages        : Java Script, Java, HTML, CSS.
2. Framework and libraries      : React.js, Node.js

# Dependencies:
1. npm install react react-dom:
why   : React is the core library for composing your UI as components. React-dom is the bridge that mounts these components into browser & keeps the DOM in sync.
where : Throughout the application all the components use react only & react-dom puts them on web page.

2. npm install react-router-dom:
why   : Provides client-side routing so the URL changes without a full page refresh.
where : Used in App.js to set up all the routes using <route>, <outlet> etc. This let the food delivery app split into multiple screens (landing, login, body,              restaurantMenu, Track etc).

3. npm install react-redux:
why   : Centralized state management. Redux holds data that many components care about (Cart items, past orders etc). React-redux supplies the <provider> component         and the react hooks, so react components can read from and write to that store.
where : In components like Header.js, Cart.js and MyOrders.js to show or update cart/order information.

4. npm install lottie-react:
why   : Renders lottie JSON animations in react with a simple <Lottie/> component. This gives you smooth, vector based animations that are tiny compared with               GIF/MP4.
where : In Track.js to show the animated delivery progress.

# External libraries and intergrations:
#  1. Formspree (formspree.io):
Formspree is a free service that lets you handle form submissions without setting up a backend like (like Node.js or PHP).
It sends the form data directly to your email.
why          : I used this in Contact.js page to collect the user messages.
where        : In Contact.js there is a form with "<form action = "https://formspree.io/f/your-formid" method="POST">."
               This tells the formspree : when someone submits the form, send data to my email.
what happens : The user enters name, email and message. When they click on send, formspree collects and sends data to your configured email - no backend required.

PROCESS OF CREATING THE FORM & GETTING THE ID:
1. Visit formspree.io
2. Signin with gmail account to which you want to receive the data.
3. If you are new user, click on "register for an account".
4. Registration page is opened, enter all the details and click on register
Note: Make sure you remember the password, because at the time of deleting the account it asks for the password.
5. Answer all the questions, especially in the question "When do you need to forms to start collectiong responses, choose today/immediately".
6. Now dashboard will be displayed then go to account, it shows it is "disabled" click on "enable" option now automatically two factor authentication is sent to       your email.
7. Click on verify email and click on checkbox "I am not a robot".
8. You will be displayed a page with "email verified" and click "here" option in red at the end.
9. It will be redirected to Signin page then enter your email and password that you have entered during registration.
10. Now go to your browser and refresh.
11. Go to "forms" in the top nav bar.
12. Click on add new form in the left nav bar.
13. Enter your wished name to your form and click on create form.
14. You will displayed form end point, immediately copy it.
15. Paste that end point in Contact.js code in line number 25.

# 2. Lottie (lottie-react):
Lottie is a library that plays JSON based animations in your application.
They are light weight, smooth and look professional.
why          : To shown an engaging delivery animation on the track order page.
where        : In Track.js, lottie is imported and used like this 
               "import lottie from "lottie-react";
               import deliveryAnimation from "../assets/delivery.json";
               <lottie animationData = {deliveryAnimation} loop={true}/>"
what happens : When a user clicks on "Track Order" in "MyOrders.js" and "Order.js" it is redirected to "Track.js". They see a delivery animation like a person                     riding a scooter, making the experience fun and interactive.
      
PROCESS OF GETTING ANIMATED JSON INTO OUR PROJECT:
1. Visit lottiefiles.com
2. Signup with your google account.
3. Wait until the dashboard is rendered automatically, if not click on "Go to dashboard" in the top nav bar.
4. Open another browser page and visit the same "lottiefiles.com".
5. A page with your logged in account will be opened along with search bar.
6. Search for "delivery-man". choose an animation , open it and click on download option at the top, you will be shown some file structure just click on "save".
7. In the right nav bar choose "lottie JSON" click on download, an animated file with ".json" extension is downloaded.
8. Go to file explorer, in downloads change the name of your choice. I named as "delivery".
9. Now in visual studio code create a folder named "assets".
10. In file explorer copy the "delivery" file from downloads and paste it in the assets folder.
11. It will be directly displayed in visual studio code.
12. Hence when the user clicks on "Track Order" button in "MyOrders.js" and from "Order.js" the selected json animation from lottiefiles.com is displayed here.

# React hooks:
1. useState:
It is used to store and mange local state inside components.
It is used in:
Register.js       : to store the user input data.
EditProfile.js    : to store and update profile from fields.
Profile.js        : to hold the logged in user's data.
MyOrders.js       : (if customized, may be used for UI state like status).
Track.js          : (if you fetch or animated based on state).

2. useEffect:
It is used to perform side effects like fetching data, reading from the local storage or running code on mount.
It is used in:
EditProfile.js    : to prefill the form using local storage data when the component mounts
Profile.js        : to fetch the currently logged in user on load.

3. useNavigate: (from react-router-dom)
It is used to navigate programmatically between routes.
It is used in:
Register.js       : after successful registration.
Login.js          : after successful login.
EditProfile.js, Track.js etc : to redirect the user to different pages.

4. useParams: (from react-router-dom)
It is used to extract dynamic values (e.g. resId, orderId) from the URL.
It is used in:
RestaurantMenu.js    : to get the restaurant ID from the URL.
Track.js             : to get the order ID from the /track/:orderId route.

5. useContext:
It is used to access data from a global context like logged-in user information.
Used in Header.js, RestaurantCard.js, Profile.js etc.
Accesses UserContext to show user related data.

6. useSelector: (from react-redux)
It is used to access redux store data inside components.
It is used in:
Header.js            : to show cart item count.
Cart.js, MyOrders,js : to display cart or order details.

7. useDispatch: (from react-redux)
It is used to dispatch redux actions (e.g. add/remove items from the cart or orders)
It is used in:
MyOrders.js          : to cancel an order.
Cart.js              : to remove items from the cart.







