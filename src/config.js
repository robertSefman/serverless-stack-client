const dev = {
  STRIPE_KEY: "pk_test_kt0azGnyVtnNXZTzC9LCzQg400mzoSON0P",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-dkopn53uyrpn",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://2yykmjuho7.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kspIoe6rY",
    APP_CLIENT_ID: "559ej9jlrt8iqnhv5eiv6707j9q",
    IDENTITY_POOL_ID: "us-east-1:d19ea821-bb3a-4632-a019-d82debea9744",
  },
}

const prod = {
  STRIPE_KEY: "pk_test_kt0azGnyVtnNXZTzC9LCzQg400mzoSON0P",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-5old8imtxdvj",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://hh75jfuxv0.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_S9xnA7qSV",
    APP_CLIENT_ID: "5767bopdkp7g83e54q4d5sr5nrk",
    IDENTITY_POOL_ID: "us-east-1:88915cf2-560f-4d17-b903-ea239fa5a318",
  },
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
}
