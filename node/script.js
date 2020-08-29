const form = document.getElementById('form');
const radius = document.getElementById('radius');
const circle = document.getElementById('circle');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(radius.value)

    axios.post('/calc', {
        radius: radius.value,
    })
        .then(function (response) {
            console.log(response);
            circle.style.height = parseInt(radius.value) * 2 + 'px';
            circle.style.width = parseInt(radius.value) * 2 + 'px';
            circle.style.borderRadius = parseInt(radius.value) + 'px';
            result.innerHTML = `this circle area is ${response.data}`;
        })
        .catch(function (error) {
            console.log(error);
        });
});