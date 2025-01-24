const container = document.querySelector(".container");
const btn = document.querySelector('#btn');

let numOfGrid=0;

btn.addEventListener("click",() => {
     numOfGrid = prompt("Write down the number of squares(x*x). Limit is 100.");
     if (numOfGrid <=100) {
        if (container.hasChildNodes()){
            container.textContent = "";
        }
        for ( let i=0; i < numOfGrid ; i++) {
            for(let j=0; j <numOfGrid ; j++){
                const div = document.createElement('div');
                div.classList.add('grid');
                const width = (960/parseInt(numOfGrid))-2;
                const height = (600/parseInt(numOfGrid))-2;
                div.setAttribute("style", "height:"+height+"px; width:"+width+"px;")
                container.appendChild(div);
                hovering(div);
            }
        }
    }
    else {
        alert("Error!, Please enter a number less or equal to 100")
    }
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function hovering(grid) {
    grid.addEventListener("mouseover", () => {
        let color = getRandomColor();
        grid.style.background = color;
    })
}









