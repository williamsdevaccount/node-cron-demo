/***
 * @file
 *
 * @module node-cron-demo/
 * @author William Stowers<william.stowers@soltech.net>
 *
 * @fileOverview This file is used to start a cron job
 *
 * */

const cron = require('node-cron');

const CRON_EXPRESSION = '*/5 * * * *';
let timesRan = 0;
const MESSAGE = (count)=> `Hello World, I have ran ${count} times`;

const onRun = ()=> {
  timesRan++;
  console.log(MESSAGE(timesRan));
};

cron.schedule(CRON_EXPRESSION,onRun,true);



