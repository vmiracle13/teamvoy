Information from the authors of React

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



Information from the author of the application

1. This application is performed accordingly to the provided designs and requirements.
2. It was possible to use CSS framework for the task like Material UI, however, it could be quite easy in this case.
3. The components Header and Footer are my initiave because it looks like a part of something, uncompleted work, in my opinion.
4. Structure of the application. 
The application has one page. It consists of Header, Footer and main parts. Main part includes filter, list and selected item.
Filter is set up to get all the types from server and filter the current list using all the possible types. There is one more idea to filter the current list just using the types of the loaded items. I chose the common approach in this task which is close to the real conditions, tasks and projects because it was not possible to implement two ideas at the same time.
By clicking on the item in the list you can view the specific parameters for a pokemon on the right. By clicking on this separated card you will hide it and unselect item.
By clicking on the LoadMore button you will get one more portion of the next 12 pokemons.
Regarding responsive layout, the decision to display the selected item in the bottom of the page, under the whole list is the easiest one in this case and due to the absence of any other requirements in this part. As for me it is better to show modal window with selected item on the mobile phones. But this approach was not impemented as the idea of adaptive styling highlighted in the task text.

As it was mentioned earlier by the authors of React to run the application you need to use script 'start' or the command in your console 'yarn start'.

That is all I wanted to describe.

Enjoy the application! :)