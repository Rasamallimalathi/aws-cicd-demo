const http = require("http");
http.createserver((req. res) => {
  res.end("Hello from AWS CI/CD");
}).listen(3000);
