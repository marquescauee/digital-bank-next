import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignUpDTO } from './dtos/signup.dto'
import { SignInDTO } from './dtos/signin.dto'
import { Response } from 'express'

@Controller('/api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() signUpData: SignUpDTO) {
    return this.authService.signUp(signUpData)
  }

  @Post('/sign-in')
  async signIn(@Body() signInData: SignInDTO, @Res() response: Response) {
    return await this.authService.signIn(signInData, response)
  }

  @Get('/refresh-token')
  async refreshToken(
    @Req() request: RequestWithCookies,
    @Res() response: Response,
  ) {
    return this.authService.refreshToken(request, response)
  }

  @Get('/validate-token')
  async validateToken(
    @Req() request: RequestWithCookies,
    @Res() response: Response,
  ) {
    const accessToken = request.cookies['accessToken']

    return this.authService.validateAccessToken(accessToken, response)
  }

  @Get('/logout')
  logout(@Res() response: Response) {
    return this.authService.logout(response)
  }
}
