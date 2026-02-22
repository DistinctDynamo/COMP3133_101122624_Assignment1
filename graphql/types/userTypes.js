import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql'

const userType = new GraphQLObjectType({
    name: "user",
    description: "A user object",
    fields: ()=>({
        id:{type:GraphQLID},
        username:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        password:{type:GraphQLNonNull(GraphQLString)},
        created_at:{},
        updated_at:{}
    })
});

export default userType;