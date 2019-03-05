require('./_config/database')('mongodb://localhost:27017/timesheet');

const http = require('http'),
    app = require('./_config/express'),
    { usersRouter, periodsRouter, timesheetRouter, authRouter } = require('./api/routes');

const port = 8080;

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/periods', periodsRouter);
app.use('/api/v1/timesheet', timesheetRouter);
app.use('/api/v1/auth', authRouter(app.get('privateKey')));

http
.createServer(app)
.listen(port, () => console.log(`Server listening at ${port}`));