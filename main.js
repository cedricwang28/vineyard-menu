const none_home_items = document.querySelectorAll(".menu-list .nonhome")
const home = document.querySelector(".home")
const burger_menu = document.querySelector('.burger-menu')
const menu_list = document.querySelector('.menu-list')
const close_icon = document.querySelector('.close-icon')
const menu_panel = document.querySelector('.menu-panel')

home.addEventListener('click',function(){
    if(window.innerWidth>480){
        gsap.to(menu_panel,{
            duration:0.2,
            x:"0",
            ease:'ease-in'
        })
    }
})

for(let i of none_home_items){
    i.addEventListener('click',function(){
        if(window.innerWidth>480){
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
