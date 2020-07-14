let authDropdown=document.querySelector('.vertical-nav-auth-dropdown');

authDropdown.addEventListener('click', function(){
   if(document.getElementById('vertical-nav-dropdown-auth-block')===null){
        document.querySelector('.auth-drop-down').id='vertical-nav-dropdown-auth-block';
   }else{
    document.querySelector('.auth-drop-down').id='vertical-nav-dropdown-auth-display';
   }
})