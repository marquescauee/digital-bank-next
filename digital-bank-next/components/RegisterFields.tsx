import React from 'react'
import CustomInput from './CustomInput'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import { applyCepMask } from '@/utils/form/applyPostalCodeMask'
import { applyCPFMask } from '@/utils/form/applyCPFMask'
import { applyDateMask } from '@/utils/form/applyDateMask'

const formSchema = authFormSchema('sign-up')

type RegisterFieldsProps = {
  control: Control<z.infer<typeof formSchema>>
}

const RegisterFields = ({ control }: RegisterFieldsProps) => {
  return (
    <>
      <div className="flex gap-4">
        <CustomInput
          control={control}
          name="firstName"
          label="Fist Name"
          id="firstName"
          inputPlaceholder="Enter your first name"
          type="text"
          key="firstName"
        />
        <CustomInput
          control={control}
          name="lastName"
          label="Last Name"
          id="lastName"
          inputPlaceholder="Enter your last name"
          type="text"
          key="lastName"
        />
      </div>
      <CustomInput
        control={control}
        name="address"
        label="Address"
        id="address"
        inputPlaceholder="Enter your address"
        type="text"
        key="address"
      />
      <CustomInput
        control={control}
        name="city"
        label="City"
        id="city"
        inputPlaceholder="Enter your city"
        type="text"
        key="city"
      />
      <div className="flex gap-4">
        <CustomInput
          control={control}
          name="state"
          label="State"
          id="state"
          inputPlaceholder="Ex: CA"
          type="text"
          key="state"
        />
        <CustomInput
          control={control}
          name="postalCode"
          label="Postal Code"
          id="postalCode"
          inputPlaceholder="Ex: 00000-000"
          type="text"
          key="postalCode"
          mask={applyCepMask}
        />
      </div>
      <div className="flex gap-4">
        <CustomInput
          control={control}
          name="dateOfBirth"
          label="Date of Birth"
          id="dob"
          inputPlaceholder="Ex: DD-MM-YYYY"
          type="text"
          key="dob"
          mask={applyDateMask}
        />
        <CustomInput
          control={control}
          name="cpf"
          label="CPF"
          id="cpf"
          inputPlaceholder="Ex: XXX.XXX.XXX-XX"
          type="text"
          key="cpf"
          mask={applyCPFMask}
        />
      </div>
    </>
  )
}

export default RegisterFields
