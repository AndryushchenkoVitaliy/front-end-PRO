import { Container, Typography, Box } from '@mui/material'

export default function AboutPage() {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          About this project
        </Typography>

        <Typography variant="body1" paragraph>
          This is a Booking application built with modern React stack.
        </Typography>

        <Typography variant="body1" paragraph>
          Technologies used:
        </Typography>

        <ul>
          <li>React + Hooks</li>
          <li>Redux Toolkit</li>
          <li>Redux-Saga</li>
          <li>React Router</li>
          <li>Material UI</li>
          <li>Axios</li>
        </ul>

        <Typography variant="body1" paragraph>
          The application allows users to search hotels by destination
          and view available options.
        </Typography>
      </Box>
    </Container>
  )
}