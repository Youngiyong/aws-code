import { Handler, Context } from "aws-lambda";
// import { requestGetSNSCheck } from './model'

interface Response {
  statusCode: number;
  body: string;
}


const snsEvent: Handler = async (event: any, context: Context) => {
  console.log('hi cold start test')
  setTimeout(async ()=>{
      console.log("setTimeout", await sns(event, context))
  }, 2000)
  console.log("snsEvent The End")
}


const sns: Handler = async (event: any, context: Context) => {
  console.log('hi cold start test')
  return "SNS 입니다."

};


const lambdaHook: Handler = function(event: any, context: Context){
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!')
  } else {
  
    console.log('hi cold start test')
    setTimeout(async ()=>{
      console.log("setTimeout", await sns(event, context))
    }, 3000)
  
    console.log("LambadHook The End")
  }

}
// const lambdaHook: Handler = async (event: any, context: Context) => {
// 	console.log('Function name: ', context.functionName)
// 	console.log('Remaining time: ', context.getRemainingTimeInMillis())

// 	context.callbackWaitsForEmptyEventLoop = false;

// 	// -------------------------------------------------------------------
// 	console.log("lambda Hook Start", event);

//     await setTimeout(async () =>  {
//        console.log("왜안돼?")
//        console.log("setTimeout", await sns(event, context))
//     }, 3000)
    
//     console.log("2",await sns(event, context))

//     await setTimeout(function () {
//       console.log("setTimeout2", sns(event, context))
//     }, 3000)

//     console.log("4",await sns(event, context))
//   // await setTimeout(async function() {
//   //   for(var i=0; i<10; i++){
//   //     console.log(i)
//   //     let data = null
//   //     await sns(event, Context).then((res)=>{
//   //       console.log(res)
//   //       data=res
//   //     }).catch((err)=> {
//   //       console.log(err)
//   //     })
//   //     console.log(data)
//       // await setTimeout(function() {
//       //   sns(event, Context)
//       //     .then((res)=> {
//       //     console.log("=========================> 1." , res)
//       //     }).catch((err)=> {
//       //     console.log("=========================> 2.", err)
//       //     })
//       // }, 30000); //wait 30 second
//     // }
//   // }, 30000); //wait 30 second


//   console.log("end lambdaHook")
  
// };


export { sns,  lambdaHook, snsEvent };