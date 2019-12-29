// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-google-oauth20';
// import { environment } from '../../environments/environment';
// import { AuthService } from './auth.service';
// import { Provider } from './provider.enum';

// @Injectable()
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
//   constructor(private readonly authService: AuthService) {
//     super({
//       clientID: environment.clientID,
//       clientSecret: environment.clientSecret,
//       callbackURL: environment.callbackURL,
//       passReqToCallback: true,
//       scope: ['profile']
//     });
//   }

//   async validate(
//     request: any,
//     accessToken: string,
//     refreshToken: string,
//     profile,
//     done: Function
//   ) {
//     try {
//       console.log(profile);

//       const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
//       const user = { jwt };

//       done(null, user);
//     } catch (err) {
//       done(err, false);
//     }
//   }
// }
