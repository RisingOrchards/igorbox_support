# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern documentation website generator.

The site is hosted on Vercel at <https://help.igorbox.com>.

### Contributing Changes and Updates

This repository is open so _you_ can submit updates and fixes to the documentation. While we, at IgorBox, strive to keep the documentation accurate and up-to-date, sometimes we miss things or create typos. Therefore, you can submit fixes to us in two ways.

1. **Creating an Issue**
1. **Opening a Pull Request** (preferred)

#### Creating an Issue

If you find an error or omission, visit <https://github.com/RisingOrchards/igorbox_support/issues> and create an issue. Please include the url to page and a detailed description of the issue.

A member of the team will prioritize your changes and get it updated as soon as practical.

#### Submitting a Pull Request

This is by far the best way to get updates in as fast as possible.

You can do this using the standard GitHub flow of:

- fork the repository
- create a branch
- make your changes
- open a pull request of your branch to our main branch

A member of the team will review your changes and implement them as soon as practical.

Additionally, every page on the active site has an "edit this page" button that will take you to the source code of the page you're looking at to get you where you need to even faster!

![static/img/edit.png](static/img/edit.png)

### Local Development

Requires:

- nodejs 18+
- yarn

#### Install Dependencies

```
$ yarn
```

#### Local Development Server

```
$ yarn start
```

This command starts a local development server on port 4000 and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployments

Deployment to production <https://help.igorbox.com> is done off of the main branch automatically on Merge.

For each pull request, a preview site is created via Vercel to preview pending changes. A comment with the url is added to every Pull request.
