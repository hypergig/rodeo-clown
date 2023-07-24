import {Box, CircularProgress, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box>
        <CircularProgress />
      </Box>
    </ThemeProvider>
  )
}

export default App
