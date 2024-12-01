
import { logMessage } from './log.mjs';

export const handler = async (event) => {
    // TODO implement
    const returnMessage = JSON.stringify({message: 'Hello', data: event});

    logMessage(returnMessage);
    
    const response = {
      statusCode: 200,
      body: returnMessage,
    };
    return response;
};
  