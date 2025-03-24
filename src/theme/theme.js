import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#745086'
        },
        secondary: {
            main: '#68596D'
        },
        error: {
            main: '#BA1A1A'
        }
    }
});

export default theme;