#!/usr/bin/env node

const chalk = require('chalk');
const mdlinks = require('./mdLinks');
const { unique, broke } = require('./metodos-cli');

const dirRelative = 'pruebas';
const absolute = 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md';

const myargv = process.argv.slice(2);
if (myargv.length === 1) {
  mdlinks(myargv[0], false)
    .then((links) => {
      console.table(links);
    // => [{ href, text, file }]
    })
    .catch(console.error);
} if (myargv.length === 2) {
  switch (myargv[1]) {
    case '--validate':
      mdlinks(myargv[0], true)
        .then((links) => {
          console.table(links);
          // => [{ href, text, file }]
        })
        .catch(console.error);
      break;
    case '--stats':
      mdlinks(myargv[0], true)
        .then((links) => {
          console.log(`total:${chalk.yellow(links.length)}\nunique:${chalk.green(unique(links))}`);
          // => [{ href, text, file }]
        })
        .catch(console.error);
      break;
    default: console.log('Comando incorrecto pueba con --validate , --stats');
  }
} if (myargv.length === 3) {
  if (myargv[1] === '--stats' && myargv[2] === '--validate' || myargv[1] === '--validate' && myargv[2] === '--stats') {
    mdlinks(myargv[0], true)
      .then((links) => {
        console.log(`total:${chalk.yellow(links.length)}\nunique:${chalk.green(unique(links))}\nbroke:${chalk.red(broke(links))}`);
        // => [{ href, text, file }]
      })
      .catch(console.error);
  } else console.log('Comando incorrecto pueba con --validate --stats');
}

