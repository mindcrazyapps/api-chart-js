## chart-js-api
api http for chart-js

## API
#### environment
```ruby
//.env
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
require('dotenv').config();

new Chart(process.env.ID_STRING, {
    type: process.env.TYPE_CHART,
    data: {
        labels: process.env.ARRAY_LABELS,
        datasets: [{
            label: process.env.STRING_LABEL,
            data: process.env.ARRAY_DATA,
            borderWidth: process.env.BORDER_WIDTH_NUMBER
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: process.env.BEGIN_AT_ZERO
            }
        }
    }
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
