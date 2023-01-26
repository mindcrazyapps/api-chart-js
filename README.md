## chart-js-api
api http for chart-js

## API
#### variables
```javascript
const idString = (parameter) => { return  document.getElementById(parameter) };  // const ctx = document.getElementById('myChart');
const stringChart = (parameter) => { return parameter };  // const ctx = document.getElementById('myChart');
const typeChart = (parameter) => { return stringChart(parameter); };  
const stringLabel = (parameter) => { return stringChart(parameter); };  
const arrayList(...args) => { return args.reduce((acc) => { return [acc] } )}; 
const arrayLabel = (...args) => { return arrayList(args); };  
const arrayData = (...args) => { return arrayList(args); };  
const borderWidthNumber = 1;
const valueBeginAtZero  = true;
```

#### api-http
- get/post: `https://api-chart-js-express.netlify.app/id/type/data(array)/label(array)/data(array)/borderWidth(number)/scales/y/beginAtZero(true|false)/`

#### algorithm
```javascript
new Chart(idString('myChart'), {
    type: typeChart('bar'),
    data: {
        labels: arrayLabel('Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'), //  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        datasets: [{
            label: stringLabel('# of Votes'),
            data: arrayData(12, 19, 3, 5, 2, 3),
            borderWidth: borderWidthNumber // 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: valueBeginAtZero // true
            }
        }
    }
});
```

#### output

## About NextExperience

<img align="right" width="120" height="120" src="https://cdn-icons-png.flaticon.com/512/1600/1600856.png" hspace="50">

NextExperience is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [nextexperience.so](https://nextexperience.so) | [nextexperience.so/join](https://nextexperience.so/join) |[@nextexperience_team](http://twitter.com/nextexperience_team) | [@nextexperience_team](http://instagram.com/nextexperience_team/) |
