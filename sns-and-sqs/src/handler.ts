import { Handler, Context } from "aws-lambda";
// import { requestGetSNSCheck } from './model'

interface Response {
  statusCode: number;
  body: string;
}


const snsEvent: Handler = async (event: any, context: Context) => {
    const response  = {
          statusCode: 200,
          body: {
            message: "한안렬 븅신1234"
          }
        }
    console.log("snsEvent Check")
    return JSON.stringify(response)
}


const sns: Handler = async (event: any, context: Context) => {
  
  await snsEvent(event, context)

};



const lambdaHook: Handler = async (event: any, context: Context) => {
	console.log('Function name: ', context.functionName)
	console.log('Remaining time: ', context.getRemainingTimeInMillis())

	context.callbackWaitsForEmptyEventLoop = false;

	// -------------------------------------------------------------------
	console.log("lambda Hook Start", event);

  for(var i=0; i<10; i++){

    await setTimeout(function() {
      sns(event, Context)
        .then((res)=> {
        console.log("=========================> 1." , res)
        }).catch((err)=> {
        console.log("=========================> 2.", err)
        })
    }, 30000); //wait 30 second
  }

  console.log("end lambdaHook")
  
};


export { sns,  lambdaHook, snsEvent };