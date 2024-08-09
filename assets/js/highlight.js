var style = document.createElement('style');
fetch('files/docs/names.txt')
    .then(response => response.text())
    .then(data => {
        var lines = data.split("\n");
        lines.forEach(elem => {
            style.innerHTML += `
            [class="${elem}"] {
                text-decoration-line: underline;
            }
            `;
        });
    })
    .catch(error => console.error('Error fetching the file:', error));
document.getElementsByTagName('head')[0].appendChild(style);