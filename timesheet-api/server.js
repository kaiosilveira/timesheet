require('./_config/database')('mongodb://localhost:27017/timesheet');

const http = require('http'),
    app = require('./_config/express'),
    { usersRouter, periodsRouter, timesheetRouter } = require('./api/routes');

const port = 8080;

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/periods', periodsRouter);
app.use('/api/v1/timesheet', timesheetRouter);

http
.createServer(app)
.listen(port, () => console.log(`Server listening at ${port}`));