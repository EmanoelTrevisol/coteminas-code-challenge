import app from './server';

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`Listening on port ${process.env.PORT}`);
});
