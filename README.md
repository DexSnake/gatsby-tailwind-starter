# Gatsby Tailwind Starter

## Development

##### 1. Install Gatsby CLI

Install the Gatsby CLI to your machine by running the following command:

```bash
npm install -g gatsby-cli
```

---

##### 2. Install Packages & Dependencies

To install all the required packages and dependencies in the main directory, open the terminal in your editor and run:

```bash
npm install
```

This will install all the necessary packages and dependencies.

---

##### 3. Start the Development Server

To start the development server, run the following in your terminal:

```bash
npm start
```

This will start the development server on port 8000 by default. In your browser, navigate to http://localhost:8000

---

## Scripts

There are a few other scripts that can be ran to perform different actions:

### Build

```bash
npm run build
```

This script will run build command and package all files into a deployable build in the public folder. Use this command before pushing commits to test if the build will pass.

### Serve

```bash
gatsby serve
```

This script will serve up the bundled build package on localhost/9000 for testing purposes

### Format

```bash
npm run format
```

This script will run the prettier extention and format ALL `js` `jsx` `json` `md` `mdx` and `scss` files in the repo.

### Clean

```bash
gatsby clean
```

This script will remove the `.cache` folder and the `public` folder from the repo. This is useful when you are sourcing new data from Contentful that might not be showing up right away.
