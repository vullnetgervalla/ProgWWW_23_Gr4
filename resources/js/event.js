let date = new Date();
let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0');
let year = date.getFullYear();

let hours = date.getHours();
let minutes = String(date.getMinutes()).padStart(2, '0');
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;

let strTime = hours + ':' + minutes + ' ' + ampm;
let strDate = day + '/' + month + '/' + year;

document.getElementById('firstDiv1-time').textContent = strDate + ' - ' + strTime;