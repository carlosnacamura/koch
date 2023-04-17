const ulIco = document.querySelector("ul.ico")


for ( let i = 0; i < 31; i++) {
    
    const random= (min,max) => Math.random() * (max-min)+min
    const li = document.createElement("li")

    const size = Math.floor(random(10,30))

    const position = random(1,99);
    
    const delay = random(5,0.1)

    li.style.width =`${size}px`
    li.style.height =`${size}px`
    li.style.bottom =`-${size}px`

    li.style.left =`${position}%`
    li.style.animationDelay =`${delay}s`

    ulIco.appendChild(li)
}