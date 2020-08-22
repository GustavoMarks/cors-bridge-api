const app = require('./src/app');

const port = normalizaPort(process.env.PORT || '3333');
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

app.listen(port, function () {
  console.log("*******************************************");
  console.log(`API em execução em >> http://localhost:${port}`);
  console.log("*******************************************");
});