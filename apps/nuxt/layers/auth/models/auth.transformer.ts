import type { UserId } from '@auth/models/current-user/currentUserId.model'
import type { RegisterDto } from '@auth/models/register/registerDto.model'
import type { RegisterForm } from '@auth/models/register/registerForm.model'
import type { User } from '@payload-types/payload-types'

import type { CurrentUser } from './current-user/currentUser.model'
import type { ForgotPasswordDto } from './forgot-password/forgotPasswordDto.model'
import type { ForgotPasswordForm } from './forgot-password/forgotPasswordForm.model'
import type { LoginDto } from './login/loginDto.model'
import type { LoginForm } from './login/loginForm.model'
import type { ResetPasswordDto } from './reset-password/resetPasswordDto.model'
import type { ResetPasswordForm } from './reset-password/resetPasswordForm.model'

export class AuthTransformer {
  static toCurrentUser(dto: User): CurrentUser {
    return {
      id: dto.id as UserId,
      email: dto.email,
      role: dto.role,
    }
  }

  static toForgotPasswordDto(form: ForgotPasswordForm): ForgotPasswordDto {
    return {
      email: form.email,
    }
  }

  static toLoginDto(form: LoginForm): LoginDto {
    return {
      password: form.password,
      username: form.email,
    }
  }

  static toRegisterDto(form: RegisterForm): RegisterDto {
    return {
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
    }
  }

  static toResetPasswordDto(form: ResetPasswordForm): ResetPasswordDto {
    return {
      email: form.email,
      password: form.password,
      passwordConfirmation: form.password,
      token: form.token,
    }
  }
}
