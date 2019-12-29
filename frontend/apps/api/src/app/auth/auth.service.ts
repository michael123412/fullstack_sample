// import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { sign } from 'jsonwebtoken';
// import { UserService } from '../user/user.service';
// import { environment } from '../../environments/environment';
// import { Provider } from './provider.enum';



// @Injectable()
// export class AuthService {
//   private readonly JWT_SECRET_KEY = environment.jwtKey;

//   constructor(private readonly userService: UserService) {}

//   async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
//   {
//       try 
//       {
//           // You can add some registration logic here, 
//           // to register the user using their thirdPartyId (in this case their googleId)
//           // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);
          
//           // if (!user)
//               // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
              
//           const payload = {
//               thirdPartyId,
//               provider
//           }

//           const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
//           return jwt;
//       }
//       catch (err)
//       {
//           throw new InternalServerErrorException('validateOAuthLogin', err.message);
//       }
//   }
// }
