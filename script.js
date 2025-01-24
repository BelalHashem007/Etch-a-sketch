const container = document.querySelector(".container");

for (i=0; i < 16 ; i++) {
    for(j=0; j <16 ; j++){
        const div = document.createElement('div');
        container.appendChild(div);
        hovering(div);
    }
}

function hovering(grid) {
    grid.addEventListener("mouseover", () => {
        grid.style.background = "blue";
    })
}





