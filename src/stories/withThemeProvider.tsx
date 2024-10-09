import React from 'react'
import AppThemeProvider from '../theme/appThemeProvider'
import { Story } from '@storybook/blocks'

const withThemeProvider = (Story:any) => {
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  )
}

export default withThemeProvider