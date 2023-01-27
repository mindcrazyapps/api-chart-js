## chart-js-api
api http for chart-js

## API
#### .env
```ruby
ID_STRING= 'myChart'
TYPE_CHART= 'bar'
STRING_LABEL= '# of Votes'
ARRAY_LABELS= ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
ARRAY_DATA= [12, 19, 3, 5, 2, 3]
BORDER_WIDTH_NUMBER = 1
BEGIN_AT_ZERO = true
```

#### variables
```javascript
const idString = (parameter) => { return  document.getElementById(parameter) };  // const ctx = document.getElementById('myChart');
const stringChart = (parameter) => { return parameter };  // const ctx = document.getElementById('myChart');
const typeChart = (parameter) => { return stringChart(parameter); };  
const stringLabel = (parameter) => { return stringChart(parameter); };  
const arrayList = (...args) => { return args.reduce((acc) => { return [acc] } )}; 
const arrayLabel = (...args) => { return arrayList(args); };  
const arrayData = (...args) => { return arrayList(args); };  
const borderWidthNumber = (parameter) => { return stringChart(parameter); };
const valueBeginAtZero = (parameter) => { return stringChart(parameter); };
```

#### api-http
- get/post: `https://api-chart-js-express.netlify.app/id/type/data(array)/label(array)/data(array)/borderWidth(number)/scales/y/beginAtZero(true|false)/`

#### algorithm
```javascript
import dotenv
dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file) // require('dotenv').config();
const fs = require('fs');
const path = require('path');

app.get('/api/graph/id', function(req, res) {
    res.send(os.environ["ID_STRING"]);  // outputs: 'myChart'
});

app.get('/api/graph/typechart', function(req, res) {
    res.send(os.environ["TYPE_CHART"]);  // outputs: 'bar'
});

app.get('/api/graph/label', function(req, res) {
    res.send(os.environ["STRING_LABEL"]); // outputs: '# of Votes'
});

app.get('/api/graph/labels', function(req, res) {
    res.send(os.environ["ARRAY_LABELS"]); // outputs: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
});

app.get('/api/graph/arraydata', function(req, res) {
    res.send(os.environ["ARRAY_DATA"]); // outputs: [12, 19, 3, 5, 2, 3] 
});

app.get('/api/graph/borderwidth', function(req, res) {
    res.send(os.environ["BORDER_WIDTH_NUMBER"]);  // outputs: "1"
});

app.get('/api/graph/beginAtZero', function(req, res) {
    res.send(os.environ["BEGIN_AT_ZERO"]);  // outputs: "true"
});

app.post('/api/graph/id', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.id, os.environ["ID_STRING"]));  // outputs: 'myChart'
});

app.post('/api/graph/typechart', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.typechart, os.environ["TYPE_CHART"]));  // outputs: 'bar'
});

app.post('/api/graph/label', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.label, os.environ["TYPE_CHART"]));  // outputs: '# of Votes'
});

app.post('/api/graph/labels', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.labels, os.environ["ARRAY_LABELS"]));  // outputs: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
});

app.post('/api/graph/arraydata', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.arraydata, os.environ["ARRAY_DATA"]));  // outputs: [12, 19, 3, 5, 2, 3]
});

app.post('/api/graph/borderwidth', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.borderwidth, os.environ["BORDER_WIDTH_NUMBER"]));  // outputs: 1
});

app.post('/api/graph/beginAtZero', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.beginAtZero, os.environ["BEGIN_AT_ZERO"]));  // outputs: true
});

const responseAll = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8').match(/^[A-Za-z0-9_]+/gm); 

app.get('/api/graph/all', function(req, res) {
    res.send({responseAll});
});

app.get('/api/graph/:id/:typechart/:label/:labels/:arraydata/:borderwidth/:beginAtZero', function(req, res) {
    res.send({responseAll});
});

app.post('/api/graph/:id/:typechart/:label/:labels/:arraydata/:borderwidth/:beginAtZero', function(req, res) {
    const ID_STRING = dotenv.set_key(dotenv_file, req.params.id, os.environ["ID_STRING"]);
    const TYPE_CHART = dotenv.set_key(dotenv_file, req.params.typechart, os.environ["TYPE_CHART"]);
    const STRING_LABEL = dotenv.set_key(dotenv_file, req.params.label, os.environ["STRING_LABEL"]);
    const ARRAY_LABELS = dotenv.set_key(dotenv_file, req.params.labels, os.environ["ARRAY_LABELS"]);
    const ARRAY_DATA = dotenv.set_key(dotenv_file, req.params.arraydata, os.environ["ARRAY_DATA"]);
    const BORDER_WIDTH_NUMBER = dotenv.set_key(dotenv_file, req.params.borderwidth, os.environ["BORDER_WIDTH_NUMBER"]);
    const BEGIN_AT_ZERO = dotenv.set_key(dotenv_file, req.params.beginAtZero, os.environ["BEGIN_AT_ZERO"]);
    const obj = { id:req.params.id,
    typechart:req.params.typechart,
    label:req.params.label,
    labels:req.params.labels,
    arraydata:req.params.arraydata,
    borderwidth:req.params.borderwidth,
    beginAtZero:req.params.beginAtZero
    }
    res.send(obj);
});

app.get('/api/graph', function(req, res) {
    res.send('index.html');
});
```

#### output
![image](https://user-images.githubusercontent.com/123137817/214975123-1645c10e-9fbb-4c53-9003-b2e1180cb1df.png)

## About NextExperience

<img align="right" width="120" height="120" src="https://cdn-icons-png.flaticon.com/512/1600/1600856.png" hspace="50">

NextExperience is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [nextexperience.so](https://nextexperience.so) | [nextexperience.so/join](https://nextexperience.so/join) |[@nextexperience_team](http://twitter.com/nextexperience_team) | [@nextexperience_team](http://instagram.com/nextexperience_team/) |
