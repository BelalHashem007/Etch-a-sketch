const container =document.querySelector('.container');

for (i=0; i<=15; i++) {
    for (j=0; j<=15; j++) {
        const sqrDiv = document.createElement('div');
        container.appendChild(sqrDiv);
        sqrDiv.addEventListener('mouseover', () => {
            sqrDiv.style.backgroundColor = '#a12828';
        })
    }
}
