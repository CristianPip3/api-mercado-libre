
module.exports = {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false
  },
  baseUrlFront: process.env.FRONT_BASE_URL,
  authSecret: process.env.SECRET,
  authSession: {
    session: false
  },
  accountTwilioSid: process.env.TWILIO_ACCOUNT_SID_DEV,
  apiKeyTwilio: process.env.TWILIO_API_KEY_DEV,
  apiSecretTwilio: process.env.TWILIO_API_SECRET_DEV,
  chatServiceId: process.env.TWILIO_CHAT_SERVICE_SID_DEV,

  configStorageS3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.S3_BUCKET_NAME
  },
  configSenGrid: {
    isSend: process.env.SEND_EMAILS,
    apikeySendGrid: process.env.SENDGRID_API_KEY
  },
  configStripe: {
    keyPub: process.env.STRIPE_PUB,
    keySecret: process.env.STRIPE_SECRET
  },
  apiMercadoLibre: process.env.BASE_URL_API_MERCADO_LIBRE

}
