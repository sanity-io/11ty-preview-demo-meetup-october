# 11ty-preview-demo-meetup-october
Demo of kinda working previews on the 11ty meetup

## Setup

### Studio

1. Install the Sanity CLI with `npm i -g @sanity/cli`
1. You can run `sanity init` inside the studio to initiate your own project inside of it.
1. Create a read token for your project in the management dashboard (`sanity manage`). Add it to the Netlify dev environment
1. Run `sanity start` to run the studio locally


### Web

1. Run `npm install` to install dependencies
1. Change the config in `src/sanity.js` to your own projectId and dataset (you can find those inside of `/studio/sanity.json`
1. Run `npm run dev` or preferably `netlify dev` if you have the Netlify CLI (will deal with serverless functions and such)
