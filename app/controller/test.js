// const graphql = require('graphql.js');

// let test = async () => {
//   var graph = await graphql("http://localhost:7002/graphql", {
//     method: "POST", // POST by default.
//     headers: {
//       // headers
//       "Access-Token": "some-access-token"
//       // OR "Access-Token": () => "some-access-token"
//     },
//     fragments: {
//       // fragments, you don't need to say `fragment name`.
//       auth: "on User { token }",
//       error: "on Error { messages }"
//     }
//   })
//   // console.log('graph', graph)
//   let a = await graph(`{
//     getMessage(id:"123"){
//       data{
//         id
//         title
//       }
//     }
//   }`)()
//   console.log('a', a.getMessage)
//   let b = await graph.query(`{
//     getMessage(id:"qwer"){
//       data{
//         id
//         title
//       }
//     }
//   }`)()
//   console.log('b', b)
// }
// test()
