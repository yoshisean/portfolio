const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenEl = document.querySelectorAll(".hidden")
hiddenEl.forEach((el)=>observer.observe(el))