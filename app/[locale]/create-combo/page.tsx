'use client';

import ComboForm from '@/components/ComboForm/ComboForm'
import { FormProvider } from '@/components/FormContext'
import { FormStep } from '@/components/FormStep';
import React from 'react'

const CreateCombo = () => {
  return (
    <FormProvider>
      <FormStep />
    </FormProvider>
  )
}

export default CreateCombo
