import core from "@actions/core"
import github from "@actions/github"

const username =core.getInput("username",{required:true})

console.log(`hello ${username}`)
const time =new Date().toTimeString()
core.setOutput("time",`time is ${time}`)

const payload = JSON.stringify(github.context.payload) 
console.log(`payload is :${payload}` )
core.notice('Something happened that you might want to know about.')

