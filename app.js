// const hoverOnNAv=document.querySelector('.v');
// hoverOnNAv.addEventListener('mouseenter', function(){
// hoverOnNAv.style.backgroundColor='orange';
// });


const list=[

    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Invalid'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:"3 Days ago",
        Permission:'Valid'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:'3 Days ago',
        Permission:'Invalid'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:'1 Day ago',
        Permission:'Valid'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'1 Day ago',
        Permission:'Valid'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid'
    },

    {
        name:'Roger Carpenter',
        email:'RogerCarpenter@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid'
    }
]




let Tableheader=['Name','Email','Status','Role','Last login','Permission'];

const tableForUser=document.createElement('table')
tableForUser.className='table-for-user';
const tableHeaderForUser=document.createElement('tr');

Tableheader.forEach(headerText=>{
    let header=document.createElement('th');
    header.className="user-display-header";
    let text=document.createTextNode(headerText);
    header.appendChild(text);
    tableHeaderForUser.appendChild(header);
})

tableForUser.appendChild(tableHeaderForUser);
var t=document.getElementById('table-for-user').appendChild(tableForUser);

list.forEach(user =>{
    let row=document.createElement('tr');
    row.className='row';
    let count=0;
     Object.values(user).forEach( text=>{
         let rowdata=document.createElement('td');
         let textInSideTD=document.createTextNode(text);
         rowdata.className="user-row-data";
         if(count===0){
             let iconForUser=document.createElement('img');
             iconForUser.className="icon-for-user";
             iconForUser.src='img/user.png';
             rowdata.appendChild(iconForUser);
         }
         console.log(text);
         if(count===2){
             textInSideTD.textContent="";
            rowdata.className='status-column';
            let imgdata=document.createElement('img')
            if(text==='Active'){
                imgdata.src='img/brightActive.png'
                imgdata.className='status-image';
                rowdata.appendChild(imgdata);
            //    rowdata.style.webkitBoxShadow='3px solid rgb(0, 255, 255)';         
            }else{
                imgdata.src='img/editedInactive.png'
                imgdata.className='status-image';
                rowdata.appendChild(imgdata);
                // rowdata.style.border='3px solid rgb(200, 151, 151) ';
                // rowdata.style.color='gray';
            }
         }
         console.log(user+'PPrinting');
         count++;
         rowdata.appendChild(textInSideTD);
         row.appendChild(rowdata)
     } )
     tableForUser.appendChild(row);
} )