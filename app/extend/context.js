'use strict';
/*
 * @Author: liuzhenli02
 * @LastEditor: liuzhenli02
 * @LastEditTime: 2022-03-18 20:34:26
 * @FilePath: /interface/plugins/egg-vite-view/app/extend/context.js
 */
const path = require('path');
const fs = require('fs');

module.exports = {
  getTemplateFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(path.resolve(process.cwd(), 'public/index.html'), 'utf-8', (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  },
  async renderClient() {
    const env = this.app.config.env;
    if (env === 'local') {
      return this.transformHtml();
    }
    const template = await this.getTemplateFile();
    this.body = template;
    return;
  },

  async transformHtml() {
    const template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
    const viteSever = await require('vite').createServer();
    const content = await viteSever.transformIndexHtml(this.url, template);
    this.body = content;
    return;
  },
};
