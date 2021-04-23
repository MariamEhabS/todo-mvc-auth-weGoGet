exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 

    clientID: '8730505d-0f89-42ec-94ff-b3a19dad6a4e',
  
    clientSecret: 'Q3iEp2BT~6UEJ.4fB7m.UfLg7vu~OYjnTT', 
  
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: 'https://todo-mvc-auth-weGoGet.mariames.repl.co/auth/openid/return', 
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,
  
    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    cookieEncryptionKeys: [ 
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],
  
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  };
  
  exports.destroySessionUrl = 'https://todo-mvc-auth-weGoGet.mariames.repl.co';
  
  exports.useMongoDBSessionStore = false;
  
  exports.databaseUri = 'mongodb://localhost/OIDCStrategy';
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  
  