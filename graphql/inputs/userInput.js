import {GraphQLInputObjectType, GraphQLString, GraphQLNonNull} from 'graphql'

const userInput = new GraphQLInputObjectType({
    name: "userInput",
    fields: ()=>({
        username:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        password:{type:GraphQLNonNull(GraphQLString)},
        created_at:{},
        updated_at:{}
    })
});

export default userInput;