import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "eu-west-1" });

async function sendMail(event, context) {
  const params = {
    Source: "thomashutchinson450@gmail.com",
    Destination: {
      ToAddresses: ["thomashutchinson450@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Udemy",
        },
      },
      Subject: {
        Data: "Test Mail",
      },
    },
  };
  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export const handler = sendMail;
