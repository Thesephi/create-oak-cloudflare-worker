#!/usr/bin/env node

/**
 * executed by calling `npm create <package_name>`
 */

const init = require('init-package-json')
const path = require('node:path')
const fs = require('node:fs')

// a path to a promzard module.  In the event that this file is
// not found, one will be provided for you.
const initFile = path.resolve(__dirname, '.npm-init')

// the dir where we're doin stuff.
const dir = process.cwd()

// extra stuff that gets put into the PromZard module's context.
// In npm, this is the resolved config object.  Exposed as 'config'
// Optional.
const configData = {}

// Any existing stuff from the package.json file is also exposed in the
// PromZard module as the `package` object.  There will also be three
// vars for:
// * `filename` path to the package.json file
// * `basename` the tip of the package dir
// * `dirname` the parent of the package dir

async function main() {

  try {
    const data = await init(dir, initFile, configData)
    // the data's already been written to {dir}/package.json
    // now you can do stuff with it

    fs.cpSync(
      path.join(__dirname, 'template'),
      dir,
      { recursive: true }
    )

    // @TODO prompt user to:
    // - run `npm i`
    // - run `npm run dev` to start the app
    // - run `CLOUDFLARE_API_TOKEN=<token> npm run deploy` to deploy to Cloudflare Workers
    console.log('\n' +
      'project scaffolded, you can now do the following:\n\n' +
      'npm i # or any other tool to install dependencies\n' +
      'CLOUDFLARE_API_TOKEN=<your-cloudflare-api-token> npm run deploy # to deploy the app\n'
    )

  } catch (e) {
    console.error('an error occurred', e.stack)
  }

}

main()