import { handleError } from '@/utils/auth/handleError'
import axios from 'axios'

export const register = async (
  values: AuthUserData,
): Promise<AuthApiResponse> => {
  try {
    const updatedValues = {
      ...values,
      postalCode: values?.postalCode?.replace(/\D/g, '').slice(0, 8),
      dateOfBirth: new Date(values.dateOfBirth ?? '').toISOString(),
      cpf: values?.cpf?.replace(/\D/g, ''),
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-up`,
      updatedValues,
    )

    return {
      message: response.data.message,
      statusCode: response.status,
    }
  } catch (error: unknown) {
    return handleError(error)
  }
}

export const login = async (values: AuthUserData): Promise<AuthApiResponse> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-in`,
      {
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: true,
      },
    )

    return {
      message: response.data.message,
      statusCode: response.status,
    }
  } catch (error) {
    return handleError(error)
  }
}

export const validateToken = async (): Promise<AuthApiResponse> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate-token`,
      {
        withCredentials: true,
      },
    )

    return {
      message: response.data.message,
      statusCode: response.status,
    }
  } catch (error) {
    return handleError(error)
  }
}

export const refreshToken = async (): Promise<AuthApiResponse> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh-token`,
      {
        withCredentials: true,
      },
    )

    return {
      message: response.data.message,
      statusCode: response.status,
    }
  } catch (error) {
    return handleError(error)
  }
}

export const logout = async (): Promise<AuthApiResponse> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
      {
        withCredentials: true,
      },
    )

    return {
      message: response.data.message,
      statusCode: response.status,
    }
  } catch (error) {
    return handleError(error)
  }
}
