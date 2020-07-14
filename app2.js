let authDropdown=document.querySelector('.vertical-nav-auth-dropdown');

let authclick=authDropdown.addEventListener('click', function(){
   if(document.getElementById('vertical-nav-dropdown-auth-block')===null){
        document.querySelector('.auth-drop-down').id='vertical-nav-dropdown-auth-block';
        document.querySelector('.auth-drop-down').style.backgroundColor='#363A43';
   }else{
    document.querySelector('.auth-drop-down').id='vertical-nav-dropdown-auth-display';
    document.querySelector('.auth-drop-down').style.backgroundColor='rgb(161, 160, 161)';
}
})