## Implementation

1. What libraries did you add to the frontend? What are they used for?
axios - http client
vue-router - routing
pinia - state management
tailwindcss and tailwindcss/forms - styling
yup and vee-validate - form validation
testing-library/vue, @pinia-testing,@testing-library/user-event, @testing-library/jest-dom, @vitest/coverage-c8  - testing
fortawesome - icons

2. What would you change about your implementation if you had to handle thousands of items?
I will use pagination and lazy loading to handle thousands of items.


## General

1. If you had more time, what further improvements or new features would you add?
a. Finish the edit functionality
b. I will finish the unit testing - create and delete dish
c. I will work on the responsive design and pagination.
d. I will add vue-toastification for notifications
e. I will add a loader for the api calls and an empty state for the dishes list


2. Which parts are you most proud of? And why?
a. I'm proud of how i structured the project and the way i used the composition api(setup).
b. I'm proud of the unit testing i did. using @testing-library/user-event, @testing-library/jest-dom, @vitest/coverage-c to simulate user events,test the dom, and generate the coverage report.
c. I'm proud of the way i used the pinia state management library.
d. I'm proud of the way i used the tailwindcss library and it plugins for styling.
e. I'm proud of the way i used the yup and vee-validate libraries for form validation.
f. I'm proud of the way i used Modal component to create the Create/Edit Dish Form  and warning modals for delete.


3. Which parts did you spend the most time with? What did you find most difficult?
a. Setting up the project and the libraries for styling, testing, state management, and form validation.
b. Creating the reusable Modal component used for the Create/Edit Dish Form and delete warning.
c. Writing the unit tests for the, ListDish, ListDishItem and create dish functionality.

4. How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
a. The test was challenging and fun.
b. I had difficulties with the edit functionality and the unit testing for the create dish functionality(time constraints).
c. I would suggest to improve the http status and codes returned from the api calls.
