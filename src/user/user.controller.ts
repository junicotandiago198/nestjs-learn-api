import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
// import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    // users/me
    @Get('me')
    getMe(@GetUser() user: User) {
        // console.log({
        //     user: req.user,
        // });
        return user;
    }
    
    @Patch()
    editUser() {}
}
