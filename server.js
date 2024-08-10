console.alert ('web not fully optimized ')
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Serve the index page
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    console.log(`Serving index page from: ${indexPath}`);
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error(`Error sending file: ${err}`);
            res.status(err.status).end();
        }
    });
});

// Serve the contact page
app.get('/contact', (req, res) => {
    const contactPath = path.join(__dirname, 'public', 'contact.html');
    console.log(`Serving contact page from: ${contactPath}`);
    res.sendFile(contactPath, (err) => {
        if (err) {
            console.error(`Error sending file: ${err}`);
            res.status(err.status).end();
        }
    });
});

// Serve the project page
app.get('/project', (req, res) => {
    const projectPath = path.join(__dirname, 'public', 'project.html');
    console.log(`Serving project page from: ${projectPath}`);
    res.sendFile(projectPath, (err) => {
        if (err) {
            console.error(`Error sending file: ${err}`);
            res.status(err.status).end();
        }
    });
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, email, message } = req.body;

    if (req.session.submitted) {
        console.log("You have already submitted the form.");
        res.send("You have already submitted the form.");
    } else {
        req.session.submitted = true;
        console.log(`Form submitted successfully:\nUsername: ${username}\nEmail: ${email}\nMessage: ${message}`);
        res.send("Form submitted successfully.");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
