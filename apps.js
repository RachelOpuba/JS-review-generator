testimonials = [
    {
        img: 'images/image-tanya.jpg',
        name:'Tanya Sinclair',
        job:'UX Engineer',
        testimony:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
    },

    {
        img: 'images/image-john.jpg',
        name:' John Tarkpor',
        job:'Junior Front-end Developer',
        testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
        

    }
]


const person = document.querySelector('.name');
const job = document.querySelector('.job');
console.log(person.textContent)


const image = document.querySelector('.student');
const info = document.querySelector('.info');
console.log(info.textContent)






const nextBtn = document.getElementsByClassName('next-btn')[0];
const prevtBtn = document.getElementsByClassName('prev-btn')[0];
console.log(nextBtn)


window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

let random = Math.floor(Math.random()*testimonials.length);

 
nextBtn.addEventListener('click', function(){
    random++;
    if(random > testimonials.length-1){
        random = 0;
    }
    showPerson()
});

prevtBtn.addEventListener('click', function(){
    random--;
    if(random < 0){
        random = testimonials.length - 1;
    }
    showPerson()
})


function showPerson(){
    const item = testimonials[random]
    info.textContent = item.testimony
    person.textContent = item.name 
    job.textContent = item.job
    image.src = item.img 
};
console.log(testimonials[random].img )




