# GNews API Crawler

A test wrapper to consume GNews API, crawl the articles outputted and return the content from within it.

## Get Started

```
$ npm i
```

Once it's installed, sign up to (GNews)[https://gnews.io/] and get your API token.

Create a `.env` file in your repo and add `GNEWS_TOKEN=<your token here>`. 

Then run:

```
$ npm run dev
```

Your URL will look like this:

`http://localhost:3030/api/search?term="example keyword"`