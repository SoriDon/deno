// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
// Refs: https://github.com/nodejs/node/issues/7342
const common = require('../common');
const assert = require('assert');
const exec = require('child_process').exec;

const command = common.isWindows ? 'dir' : 'ls';

exec(command).stdout.on('data', common.mustCallAtLeast());

exec('fhqwhgads').stderr.on('data', common.mustCallAtLeast((data) => {
  assert.strictEqual(typeof data, 'string');
}));