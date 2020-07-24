#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let all = require('./boilerplate/all');

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const cdIntoAppDirectory = () => {
    return new Promise(resolve=>{
      shell.cd(appDirectory)
      resolve()
    })
};

const installPackages = () => {
    return new Promise(resolve=>{
      console.info("\n Installing redux, react-router-dom, react-redux, redux-thunk, eslint and typescript \n".cyan)
      shell.exec(`npm install -D redux react-redux redux-thunk react-router-dom eslint typescript`, () => {
        console.log("\n Finished installing packages\n".green)
        resolve()
      })
    })
};

const updateBoilerplate = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(all).forEach((fileName, i)=>{
        promises[i] = new Promise(resolve=>{
          fs.writeFile(`${appDirectory}/src/${fileName}`, all[fileName], function(err) {
              if(err) { return console.error(err) }
              resolve()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
};

const createReactApp = () => {
    return new Promise(resolve=>{
      if(appName){
        shell.exec(`create-react-app ${appName}`, (code) => {
          console.log("Exited with code ", code)
          console.info(`Created ${appName} react app`.green)
          resolve(true)
        })
      }else{
        console.log("\n No app name was provided.".red)
        console.info("\n Provide an app name in the below format: ")
        console.log("\n mytidbit-react-redux-app ", "your-app-name\n".cyan)
          resolve(false)
      }
    })
};

const start = async () => {
    let success = await createReactApp()
    if(!success){
      console.log('Something went wrong while creating a new react app'.red)
      return false;
    }
    await cdIntoAppDirectory()
    await installPackages()
    await updateBoilerplate()
    console.log("All steps completed successfully!".green)
};

start();