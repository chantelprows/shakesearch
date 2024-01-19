# ShakeSearch Challenge

Welcome to the Pulley Shakesearch Challenge! This repository contains a simple web app for searching text in the complete works of Shakespeare.

## Prerequisites

To run the tests, you need to have [Go](https://go.dev/doc/install) and [Docker](https://docs.docker.com/engine/install/) installed on your system.

## Your Task

Your task is to fix the underlying code to make the failing tests in the app pass. There are 3 frontend tests and 3 backend tests, with 2 of each currently failing. You should not modify the tests themselves, but rather improve the code to meet the test requirements. You can use the provided Dockerfile to run the tests or the app locally. The success criteria are to have all 6 tests passing.

## Instructions

<img width="404" alt="image" src="https://github.com/ProlificLabs/shakesearch/assets/98766735/9a5b96b5-0e44-42e1-8d6e-b7a9e08df9a1">

*** 

**Do not open a pull request or fork the repo**. Use these steps to create a hard copy.

1. Create a repository from this one using the "Use this template" button.
2. Fix the underlying code to make the tests pass
3. Include a short explanation of your changes in the readme or changelog file
4. Email us back with a link to your copy of the repo

## Running the App Locally


This command runs the app on your machine and will be available in browser at localhost:3001.

```bash
make run
```

## Running the Tests

This command runs backend and frontend tests.

Backend testing directly runs all Go tests.

Frontend testing run the app and mochajs tests inside docker, using internal port 3002.

```bash
make test
```

Good luck!


## Changes made

To pass TestSearchCaseSensitive test, I changed the bytes stored in the SuffixArray to all be lowercase, since the "CompleteWorks" already stores the content in its original format. I also made the query string all lowercase to match the bytes that it is searching.

To pass the TestSearchDrunk test, I added an argument to the SuffixArray.Lookup method to limit the number of results returned, and also added the ability to pass in a page number to the Search function to help set the number that is passed in as the new SuffixArray.Lookup argument. The page number will come from a query param in the request url, or default to 1.

To pass the "Load More" frontend test, I added the load-more id to the button element in the html file, and then created an event handler for that button that calls the search endpoint. I modified the search request to include the page number in the query parameters. I also updated the form submit handler to make sure that a fresh search changes the page number back to 1.