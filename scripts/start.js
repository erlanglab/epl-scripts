// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

process.env.NODE_ENV = 'development';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

const fs = require('fs');
const chalk = require('chalk');
/* const detect = require('detect-port');*/
/* const WebpackDevServer = require('webpack-dev-server');*/
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
/* const getProcessForPort = require('react-dev-utils/getProcessForPort');*/
/* const openBrowser = require('react-dev-utils/openBrowser');*/
/* const prompt = require('react-dev-utils/prompt');*/
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
/* const devServerConfig = require('../config/webpackDevServer.config');*/
const createWebpackCompiler = require('./utils/createWebpackCompiler');
/* const addWebpackMiddleware = require('./utils/addWebpackMiddleware');*/

const useYarn = fs.existsSync(paths.yarnLockFile);
const cli = useYarn ? 'yarn' : 'npm';
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

// TODO we're not running webpack development server, only webpack build
function run() {
  // Create a webpack compiler that is configured with custom messages.
  const compiler = createWebpackCompiler(
    config,
    function onReady(showInstructions) {
      if (!showInstructions) {
        return;
      }
      console.log();
      console.log(
        'The plugin is available to be tested with Erlang Performance Lab'
      );
      console.log();
      console.log(`info about unning locally`);
      console.log();
      console.log('Note that the development build is not optimized.');
      console.log(
        `To create a production build, use ${chalk.cyan(`${cli} run build`)}.`
      );
      console.log();
    }
  );

  compiler.watch(
    {
      /*options*/
    },
    (err, stats) => {} //console.log(stats)
  );
}

run();
