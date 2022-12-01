#!/usr/bin/env node
const util = require('util')
const { exec } = require('child_process')
const execProm = util.promisify(exec)

async function run_shell_command(command) {
  try {
    return await execProm(command)
  } catch (err) {
    console.log(`%c${err.stderr}`, 'background: #2d2d2d; color: #F44336')
    process.exit({ code: -1 })
  }
}

const repoName = process.argv[2]

/*
 * 1° comando
 */
const gitCheckoutCommand = `git clone https://github.com/RaulSCoelho/create-base-ts-next-app.git ${repoName}`
console.log(`Cloning the repository with name ${repoName}`)
run_shell_command(gitCheckoutCommand).then(() => {
  /*
   * 2° comando
   */
  const deleteGitFolder = `rd /s /q "${repoName}/.git"`
  run_shell_command(deleteGitFolder).then(() => {
    /*
     * 3° comando
     */
    const getPackageJson = `powershell -Command "$content = Get-Content ${repoName}/package.json;echo $content"`
    run_shell_command(getPackageJson).then(({ stdout }) => {
      const packagejson = JSON.parse(stdout)
      delete packagejson.bin
      packagejson.name = repoName
      packagejson.version = '1.0.0'
      const packagejsonString = JSON.stringify(packagejson)
      /*
       * 4° comando
       */
      const changeVersion = `echo ${packagejsonString} > ${repoName}/package.json`
      run_shell_command(changeVersion).then(() => {
        /*
         * 5° comando
         */
        console.log(`Installing dependencies for ${repoName}`)
        const installDepsCommand = `cd ${repoName} && npm install`
        run_shell_command(installDepsCommand).then(() => {
          /*
           * Finalizado
           */
          console.log(
            'Congratulations! You are ready. Follow the following commands to start'
          )
          console.log(`cd ${repoName} && npm start`)
        })
      })
    })
  })
})
