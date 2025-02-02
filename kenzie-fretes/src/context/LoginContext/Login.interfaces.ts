import { ReactNode } from "react"
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"

export interface ILoginProps {
  children: ReactNode
}

export interface ILoginProvider {
  emailError: boolean
  passError: boolean
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  register: UseFormRegister<ILoginData>
  handleSubmit: UseFormHandleSubmit<ILoginData>
  errors: FieldErrorsImpl<DeepRequired<ILoginData>>
  onSubmit: (data: ILoginData) => void
}

export interface ILoginData {
  email: string
  password: string
  type: string
}

export interface ILoginApi {
  accessToken: string
  user: {
    email: string
    id: number
    name: string
    typeUser: string
  }
}
