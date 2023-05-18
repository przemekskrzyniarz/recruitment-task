## Quickstart

```
npm install
npm run dev
```

## Overview

This project is investors database user can browse in order to find a match for their needs. Imagine a startup looking for potential Venture Capital investor.


## Tasks

Currently user has limited interaction abilities. We want them to be able to find investors better/easier, improve UX and make sure there are no bugs.

### Sort sectors at details page

At details page we list all sectors company is willing to invest. We want this list to be sorted alphabetically.


### Sort stages at details page

At details page we list all stages company is willing to invest. We want this list to be sorted in following order:

- pre-seed
- seed
- late-seed
- early growth
- growth
- maturity

### Allow to directly open details page

We've noticed that there is a bug in the system. If user clicks at any investor a details page shows up. This is fine. However,
if user would try to refresh page at this point, `No investor` message is shown. Detect and fix this bug.

### Show sectors and stages at list page

Currently list page only shows name of investor. We want to show there sectors and stages too. This data is already visible at
the details page. At list page however you need to decide if i.e. we want to show all sectors or all stages etc.

### Allow to filter by stage

Currently we can search database only by investor name. We want also to be able to search by stage.

## Notes

Here are screenshots of pages:

### Investor List Page (`/`)

<img width="1372" alt="image" src="https://github.com/vestbee/assignment/assets/190381/2c2015d8-2ddd-4d56-bf75-6264890d886e">

### Investor Details Page (`/investor/:id`)

<img width="1362" alt="image" src="https://github.com/vestbee/assignment/assets/190381/70092161-722d-4767-a0dd-80bc7dc8cd70">

