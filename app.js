var createError = require('http-errors'); //HTTPエラーの対処を行うもの
var express = require('express'); // Express
var path = require('path'); // File Path
var cookieParser = require('cookie-parser'); // Cokie Parse
var logger = require('morgan'); // Log for HTTP request

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var notesRouter = require('./routes/notes');
var catRouter = require('./routes/cat');
var giphyRouter = require('./routes/giphy');
var notes_from_bRouter = require('./routes/notes_from_b');

var app = express(); // Create express object

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/notes', notesRouter);
app.use('/cat', catRouter);
app.use('/giphy', giphyRouter);
app.use('/notes_from_b', notes_from_bRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err.message,
    error: err,
  });
});

module.exports = app;
