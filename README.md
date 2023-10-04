## Setup Instructions

- [Project Repo](https://github.com/jamshaidazeem/web-integration-test-app) - clone project.

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- In project root directory type `nvm use` to select node version specified in .nvmrc file

- Install npm packages as per package.json file using `npm i`, to install project dependencies`

## Project Running

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation of design decisions and trade-offs made.

- Images from Figma design implementated using `Next Image` and available in application's public folder, icons from Figma design can be added using [material icons](https://mui.com/material-ui/) or other similar libraries for better `size` and `color` handling and variations, but as they are all not available so they are also added using `Next Image` and available in application's public folder

- Application UI design is implemented by smaller components rather than larger components to achieve code reusability, design changes, debugging and better code organization, but it comes with more files as each component code is organized into separate file.

- Application state management is achieved using `React context API`, this allows us to easily share state between components instead of passing props and callbacks from component to component

- Application mock data is declarative `.ts` file, rather than having in a json file, this provided us with object types, defining data once and use several times and easy to update with rather than making changes in json file.

## Additional Libraries

- [Material UI](https://www.npmjs.com/package/@mui/material)

- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast)
