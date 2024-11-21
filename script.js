let clubs=[{
    name:"AC Milan",
    link:"",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/256px-Logo_of_AC_Milan.svg.png",
    },
   { name:"Real Madrid",
    link:"",
    img:"https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg",
    },
    { name:"barcalona",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/fr/a/a1/Logo_FC_Barcelona.svg",
    },
    { name:"Manchester United ",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg",
    },
    { name:"Bayern Munich ",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg",
    },
    { name:" Arsenal",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg",
    },
    { name:"Liverpool",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/fr/5/54/Logo_FC_Liverpool.svg",
    },
    { name:"Chelsea",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg",
    },
    { name:"Juventus",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Juventus_FC_-_logo_black_%28Italy%2C_2017%29.svg",
    },
    { name:"Paris Saint Germain",
        link:"",
        img:"https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg",
    },
    
];
let leagues=[
   { 
    name:"Premier League",
    link:"",
    img:"https://upload.wikimedia.org/wikipedia/ar/7/72/Premier_league_logo.svg"
},{
    name:"La Liga",
    link:"",
    img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg",

},{
    name:"Serie A",
    link:"",
    img:"https://upload.wikimedia.org/wikipedia/ar/b/bf/Serie_A_TIM_-_Logo_%282019%29.svg",
},
{name:"Bundesliga",
link:"",
img:"https://upload.wikimedia.org/wikipedia/ar/d/df/Bundesliga_logo_%282017%29.svg",
},
{name:"Brasileirão",
link:"",
img:"https://upload.wikimedia.org/wikipedia/ar/3/33/Brasileir%C3%A3o.svg",
},
{name:"Ligue 1",
link:"",
img :"https://upload.wikimedia.org/wikipedia/fr/d/d9/Logo_Ligue_1_2024.svg" ,
}
]

 
clubs.forEach((club)=>{
    var div=document.createElement("div");
    div.className="club-item";
    div.innerHTML=`<a href=${club.link}><div class="club-circle"><img src=${club.img}> </div> <p class="button-link">${club.name}</p></a></div>`;

    
document.getElementsByClassName("club-container")[0].appendChild(div);
})
leagues.forEach((league)=>{
    var div=document.createElement("div");
    div.className="league";
    div.innerHTML=`<a href=${league.link}><img src=${league.img}> </div> <span>${league.name}</span></a></div>`;

    
document.getElementsByClassName("leagues")[0].appendChild(div);
})
