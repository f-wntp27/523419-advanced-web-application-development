var expressFunction = require('express');
var expressApp = expressFunction();
expressApp.use(expressFunction.json());

const students = [
    { stdid: 'B6220709', name: 'Wanatthapong Wongbuthong' },
    { stdid: 'B62XXXXX', name: 'Firstname Lastname' },
]

expressApp.post('/api/resource/students', function (req, res) {
    const stdid = req.body.stdid;
    const name = req.body.name;

    if (stdid.length == 8) {
        const student = {
            stdid: stdid,
            name: name
        }
        students.push(student);
        res.status(200).send(student);
    } else {
        res.status(400).send('Error cannot add student!');
    }
});

/* additional (list all students) */
expressApp.get('/api/resource/students/all', function (req, res) {
    res.status(200).send(students);
});

expressApp.listen(3000, function () {
    console.log('Listening on port 3000');
});
