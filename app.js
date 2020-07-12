const hoverOnNAv=document.querySelector('.v');
hoverOnNAv.addEventListener('mouseover', function(){
hoverOnNAv.style.backgroundColor='orange';
});


const list=[

    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:2,
        Permission:'Invalid'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:3,
        Permission:'Valid'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:3,
        Permission:'Invalid'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:1,
        Permission:'valid'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:1,
        Permission:'valid'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:2,
        Permission:'valid'
    }
]




let Tableheader=['Name','Email','Status','Role','LastLogin','Permission'];

const tableForUser=document.createElement('table')
tableForUser.className='table-for-user';
const tableHeaderForUser=document.createElement('tr');

Tableheader.forEach(headerText=>{
    let header=document.createElement('th');
    header.className="user-display-header";
    let text=document.createTextNode(headerText);
    console.log(headerText);
    header.appendChild(text);
    tableHeaderForUser.appendChild(header);
})

tableForUser.appendChild(tableHeaderForUser);
var t=document.getElementById('table-for-user').appendChild(tableForUser);

list.forEach(user =>{
    let row=document.createElement('tr');
     Object.values(user).forEach( text=>{
         console.log(Object.keys(user))
         let rowdata=document.createElement('td');
         rowdata.className="user-row";
         let textInSideTD=document.createTextNode(text);
         rowdata.appendChild(textInSideTD);
         row.appendChild(rowdata)
     } )
     tableForUser.appendChild(row);
} )