require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');

const { requestLogger, errorLogger } = require('./middleware/logger');
const { PORT, DATABASE_URL } = require('./config');

const ErrorHandler = require('./middleware/ErrorHandler');
const routes = require('./routes/index');

const { limiter } = require('./middleware/limiter');

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(helmet());
app.use(requestLogger);

app.use(routes);
app.use(errorLogger);
app.use(ErrorHandler);

app.use(errors());
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
