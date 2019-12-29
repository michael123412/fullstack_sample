// import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';

// import { AuthService } from './auth.service';
// import { get } from 'http';
// import { AuthGuard } from '@nestjs/passport';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Get('test')
//   getData(): string {
//     return 'test';
//   }

//   @Get('google')
//   // @UseGuards(AuthGuard('google'))
//   googleLogin(): void {}

//   @Get('google/callback')
//   // @UseGuards(AuthGuard('google'))
//   googleLoginCallback(@Req() req, @Res() res) {
//     const jwt: string = req.user.jwt;

//     if (jwt) {
//       res.redirect('http:localhost:4200/login/success/' + jwt);
//     } else {
//       res.redirect('http://localhost:4200/login/failure');
//     }
//   }

//   @Get('protected')
//     @UseGuards(AuthGuard('jwt'))
//     protectedResource()
//     {
//         return 'JWT is working!';
//     }
// }
