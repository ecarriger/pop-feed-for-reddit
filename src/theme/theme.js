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
        background: {
            paper: '#FFF7FC'
        },
        error: {
            main: '#BA1A1A'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px'
                }
            }
        }
    }
});

export default theme;