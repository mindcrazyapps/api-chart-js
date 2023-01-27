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
BORDER_WIDTH = 1
BEGIN_AT_ZERO = true
```

#### declaration, functions & variables
```javascript
import dotenv
dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file) // require('dotenv').config();
const fs = require('fs');
const path = require('path');
const jsStringify = require('js-stringify');
const responseAll = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8').match(/^[A-Za-z0-9_]+/gm); 
const idString = (parameter) => { return  document.getElementById(parameter) };  // const ctx = document.getElementById('myChart');
const stringChart = (parameter) => { return parameter };  // const ctx = document.getElementById('myChart');
const typeChart = (parameter) => { return stringChart(parameter); };  
const stringLabel = (parameter) => { return stringChart(parameter); };  
const arrayList = (...args) => { return args.reduce((acc) => { return [acc] } )}; 
const arrayLabel = (...args) => { return arrayList(args); };  
const arrayData = (...args) => { return arrayList(args); };  
const borderWidthNumber = (parameter) => { return stringChart(parameter); };
const valueBeginAtZero = (parameter) => { return stringChart(parameter); };
const changeFile = (keyParameter, keyFind) => { return dotenv.set_key(dotenv_file, keyParameter, os.environ[keyFind]); };
const generateChart = () => {
  return "<script> new Chart("+process.env.ID_STRING+", {"+"type:"+process.env.TYPE_CHART+","+"data: {"+"labels:"+ process.env.ARRAY_LABELS+","+"datasets:"+ "[{"+"label:"+ process.env.STRING_LABEL+","+"data:"+ process.env.ARRAY_DATA+","+"borderWidth:"+process.env.BORDER_WIDTH+"}]"+"},"+"options: {"+ "scales: { y: { "+ "beginAtZero:"+ process.env.BEGIN_AT_ZERO + "}"+ "}"+"}"+"}); </script>";
};
```

#### algorithm
```javascript

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
    res.send(os.environ["BORDER_WIDTH"]);  // outputs: "1"
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
    res.send(dotenv.set_key(dotenv_file, req.params.borderwidth, os.environ["BORDER_WIDTH"]));  // outputs: 1
});

app.post('/api/graph/beginAtZero', function(req, res) {
    res.send(dotenv.set_key(dotenv_file, req.params.beginAtZero, os.environ["BEGIN_AT_ZERO"]));  // outputs: true
});

app.get('/api/graph/all', function(req, res) {
    res.send({responseAll});
});

app.get('/api/graph/:id/:typechart/:label/:labels/:arraydata/:borderwidth/:beginAtZero', function(req, res) {
    res.send({responseAll});
});

app.post('/api/graph/:id/:typechart/:label/:labels/:arraydata/:borderwidth/:beginAtZero', function(req, res) {
    changeFile(req.params.id, os.environ["ID_STRING"]);
    changeFile(req.params.typechart, os.environ["TYPE_CHART"]);
    changeFile(req.params.label, os.environ["STRING_LABEL"]);
    changeFile(req.params.labels, os.environ["ARRAY_LABELS"]);
    changeFile(req.params.arraydata, os.environ["ARRAY_DATA"]);
    changeFile(req.params.borderwidth, os.environ["BORDER_WIDTH"]);
    changeFile(req.params.beginAtZero, os.environ["BEGIN_AT_ZERO"]);    
    const obj = { 
       id:req.params.id, 
       typechart:req.params.typechart,
       label:req.params.label,
       labels:req.params.labels,
       arraydata:req.params.arraydata,
       borderwidth:req.params.borderwidth, 
       beginAtZero:req.params.beginAtZero
    }
    res.send(obj);
});

app.get('/api/chart', (req, res) => {
  res.render('index.pug', {jsStringify, generateChart}); //, //{jsStringify, data});
});
```

#### api-http
- get/post: `https://api-chart-js-express.netlify.app/id/type/data(array)/label(array)/data(array)/borderWidth(number)/scales/y/beginAtZero(true|false)/`

#### output
![image](https://user-images.githubusercontent.com/123137817/214975123-1645c10e-9fbb-4c53-9003-b2e1180cb1df.png)

## About NextExperience

<img align="right" width="120" height="120" src="https://cdn-icons-png.flaticon.com/512/1600/1600856.png" hspace="50">

NextExperience is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [nextexperience.so](https://nextexperience.so) | [nextexperience.so/join](https://nextexperience.so/join) |[@nextexperience_team](http://twitter.com/nextexperience_team) | [@nextexperience_team](http://instagram.com/nextexperience_team/) |
