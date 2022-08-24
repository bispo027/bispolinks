import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const colors = {
  brand: {
    100: '#00082F',
    200: '#364FC7',
    300: '#4263EB',
    400: '#EDF2FF',
    500: '#FFFFFF',
  },
}


const theme = extendTheme({ config, colors })

export default theme