import { Handler, Context } from "aws-lambda";

interface Response {
  statusCode: number;
  body: string;
}

const sns: Handler = async (event: any, context: Context) => {
  const response: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello SNS!"
    })
  };
  return response;
};

const sqs: Handler = async (event: any, context: Context) => {
  const response: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello SQS!"
    })
  };
  return response;
};



export { sns, sqs };