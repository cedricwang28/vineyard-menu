const none_home_items = document.querySelectorAll(".menu-list .nonhome")
const home = document.querySelector(".home")
const burger_menu = document.querySelector('.burger-menu')
const menu_list = document.querySelector('.menu-list')
const close_icon = document.querySelector('.close-icon')
const menu_panel = document.querySelector('.menu-panel')

const mobile_size = 480

document.addEventListener('click',function(e){
    if(window.innerWidth>mobile_size){
        if (!menu_panel.contains(e.target)) {
            gsap.to(menu_panel,{
                duration:0.2,
                x:"0",
                ease:'ease-in'
            })
        }
    }else{
        if (!menu_panel.contains(e.target)) {
            var tl = gsap.timeline();
            tl.to(menu_list,{
                duration:0.5,
                y:"100%",
            })
            tl.to(menu_list,{
                duration:0,
                width:"100vw",
                paddingLeft:'20px',
                ease:'ease-in'
            })
        }
    }
})

home.addEventListener('click',function(){
    if(window.innerWidth>mobile_size){
        gsap.to(menu_panel,{
            duration:0.2,
            x:"0",
            ease:'ease-in'
        })
    }
})

for(let i of none_home_items){
    i.addEventListener('click',function(){
        if(window.innerWidth>mobile_size){
            gsap.to(menu_panel,{
                duration:0.2,
                x:"-40vw",
                ease:'ease-in'
            })
        }else{
            gsap.to(menu_list,{
                duration:0.2,
                width:"40vw",
                paddingLeft:0,
                ease:'ease-in'
            })
        }
        
    })
}

burger_menu.addEventListener('click',function(){
    gsap.to(menu_list,{
        duration:0.5,
        y:0,
    })
})

close_icon.addEventListener('click',function(){
    gsap.to(menu_list,{
        duration:0.5,
        y:"100%",
    })
})
