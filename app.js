const img = document.querySelector(".img")
const para = document.querySelector(".paragraphs")
const buttonn1= document.querySelector(".button1")
const button2= document.querySelector(".button2")
const button3 = document.querySelector(".button3")

buttonn1.addEventListener('click', ()=> {
    para.innerHTML= "   <h4>information</h4>Beauty is a quality that makes us feel a sense of pleasure It tells us that when we are able to see beauty in something or someone, we also feel positive feelings such as appiness and gratefulness"
    
    img.src="sa.jpg"
    
})

button2.addEventListener('click', ()=> {
    para.innerHTML= "  <h4>information</h4> Nature teaches us that beauty is hidden in everything, including hard rocks and wild weeds .Nature teaches us that beauty is hidden in everything, including hard rocks and wild weeds"
img.src="Tulip-Garden_-9.jpg"
    
})

button3.addEventListener('click', ()=> {
    para.innerHTML= "    <h4>information</h4>    quality in someone or something that makes it attractive and interesting in our eyes. The famous English saying goes, “Beauty lies in the eyes"
img.src="29JAN19U-scaled.webp"
    
})