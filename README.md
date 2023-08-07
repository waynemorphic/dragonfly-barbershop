# A BARBERSHOP WEB APPLICATION
DragonFly is a reknown babrbershop in Nairobi, Kenya with various branches in the city's suburban areas. The goal of the web application is to primarily enable a seamless booking experience for its customers. By managing the customer flow, the operations manager will be able to allocate the workload to the beauty experts efficiently and reduce waiting time for the customers in the shop.

## FEATURES
1. Homepage with a video courtesy of Savara
2. Booking page with several services offered
3. Checkout bar for user details

## TOOLS USED
1. Vite
2. React Js
3. JSX
4. CSS

## DEPENDENCIES
1. Axios
2. Swiper
3. React bootstrap
4. Bootstrap
5. React player
6. React router dom
7. React router hash link
8. MUI DatePickers
9. EmailJs
10. React hot toast
11. React spinners

## TESTING APP LOCALLY
1. Clone the repository

    `$ git clone git@github.com:waynemorphic/dragonfly-barbershop.git `

2. Switch to the repository directory

    `$ cd dragonfly-barbershop`

3. Install dependencies

   `$ npm install`

   Alternatively install one by one:

    `$ yarn add axios`

    `$ npm install swiper`

    `$ npm install react-bootstrap bootstrap`

    `$ yarn add bootstrap@v5.2.3`

    `$ yarn add react-calendar`

    `$ npm install react-player`

    `$ npm install react-router-dom`

    `$ npm install --save react-router-hash-link`

    `$ npm install @mui/x-date-pickers`

    `$ npm install dayjs`

    `$ npm install @mui/material @emotion/react @emotion/styled`

    `$ npm install @mui/material @mui/styled-engine-sc styled-components`

    `$ npm i emailjs`

    `$ npm install react-hot-toast`

    `$ npm install --save react-spinners`


5. Run the application

    `$ npm run dev`

6. Expose to network and external devices

    `$ npm run dev -- --host`

## DESIGN
Inspired by dribbble.com

## Contributing
We have curated ToDo's 🗒️ that might interest you. Check them out and create an issue, with the issue title being the particular list item in the ToDo list. That means you will have self assigned the issue. Happy hacking 💻

## TODO
- [x] Make the footer text to be always at the bottom of the page.
- [x] Cleanup CSS to avoid mixing with Bootstrap, Remove where font-family and colors are reused
- [x] Fix the overflow shadow in when the dropdown service in the Services menu has been selected
- [x] Ensure the application is mobile friendly / responsiveness
- [x] Fix the padding of lines class in the homepage
- [ ] Fix Calendar object: Inability to select dates
- [x] Fix bug in the Hover of the dropdown of Navigation Links
- [x] Validate user data ie email and phone number. React Form Hook may be used in place 
of the current form
- [x] Customer to unselect the selected input radio after user has selected in booking page.
- [ ] Add more details in the landing page. Could be cards that are descriptive of services 
offered. When an item in the services navbar is clicked, the screen automaticlly scrolls
down to the specific service description in the home page.
- [ ] Better footer section
- [ ] Resolve date booking bug in customer email notification
- [ ] Send Selected Form data and user data to the server on the onSubmit event
- [ ] Add mongoDB and mongoose to store customer data
- [ ] End to end tests of the application or alternatively unit tests per component if 
necessary. For end to end, Playwright framework will work while for unit tests, React 
Testing Library or jest.js should be reliable

## Pipeline Features
- [x] Customer email notifications after a booking
- [ ] Resolve images bug in gallery page in prod
 ```
Solution: Use cloudinary
```
- [ ] Admin dashboard
- [ ] Admin to view new bookings
- [ ] Admin to check web traffic
```
Solution: Google analytics or something else if google analytics is unavailable
```
- [ ] Admin to adjust menu prices
- [ ] Admin to add employees and assign tasks per booking made
      
      

## CONTRIBUTORS
[![GitHub Contributors](https://img.shields.io/github/contributors/waynemorphic/dragonfly-barbershop)](https://github.com/waynemorphic/dragonfly-barbershop/graphs/contributors)
