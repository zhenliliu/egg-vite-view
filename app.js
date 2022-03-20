/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
/*
 * @Autor: liuzhenli
 * @Date: 2022-03-20 22:58:06
 * @LastEditors: liuzhenli
 * @LastEditTime: 2022-03-20 22:59:21
 * @FilePath: /interface/plugins/egg-vite-view/app.js
 */
const version = require('./package.json').version;
module.exports = app => {
  app.ready(() => {
    app.logger.info(`[egg-vite-view] egg-vite-view version v${version}`);
  });
};
