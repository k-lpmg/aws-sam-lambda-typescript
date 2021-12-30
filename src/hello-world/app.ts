import { APIGatewayEvent } from "aws-lambda";
import moment from "moment";

let response;

export const lambdaHandler = async (_: APIGatewayEvent) => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: moment.utc().toISOString(),
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
