import app from './app.js'

const PORT = process.env.PORT ?? 3010;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });