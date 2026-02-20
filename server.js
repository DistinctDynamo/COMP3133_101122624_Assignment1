const express = require('express')
const mongoose = require('mongoose')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require("express-graphql")

const app = express()
const PORT = 5000

const userModel = require('./models/Users')
const employeeModel = require('./models/Employee')

const connectDB = async() => {
    try{
        console.log(`Attempting to connect to DB`);
        
        const DB_NAME = "comp3133_101122624_assignment1"
        const DB_USER_NAME = 'nguyensteven578_db_user'
        const DB_PASSWORD = 'KipuXKRBlZistryc' 
        const CLUSTER_ID = 'qnimjux'
        const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@clustercomp3123.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=clustercomp3123`

        mongoose.connect(DB_CONNECTION).then( () => {
            console.log(`MongoDB connected`)
        }).catch( (err) => {
            console.log(`Error while connecting to MongoDB : ${JSON.stringify(err)}`)
        });
    }catch(error){
        console.log(`Unable to connect to DB : ${error.message}`);
    }
}

app.listen(PORT, () =>{
    connectDB()
    console.log("GraphQL Server started")
    console.log("http://localhost:5000/graphql")
})