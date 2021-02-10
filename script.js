


let outerdiv = document.createElement("div");
outerdiv.classList.add("outer-div")

document.querySelector("button").addEventListener("click",searchresult);

async function searchresult(e)
{
 
    e.preventDefault();
   let query=document.getElementById("showsearch").value;
   let url=`http://api.tvmaze.com/search/shows?q=${query}`;
   let response = await fetch(url);
   let data= await response.json();


   outerdiv.innerHTML="";
   data.forEach(ele=>{
   let newdiv = document.createElement("div");
   newdiv.classList.add("new-div");

    let childDiv1 = document.createElement("div");
    childDiv1.classList.add("child-Div1");

    let showtitle = document.createElement("h2");
    showtitle.innerHTML=`  ${ele.show.name}`;

    let showimage = document.createElement("img");
    showimage.classList.add("image")
    showimage.src=ele.show.image.medium;

    let childDiv2 = document.createElement("div");
    childDiv2.classList.add("child-Div2");

    let showgenres = document.createElement("p");
    showgenres.innerHTML=`Genres : ${ele.show.genres}`;

    let showpremierdate = document.createElement("p");
    showpremierdate.innerHTML=`premiered date : ${ele.show.premiered}`;

    let showscheduleday = document.createElement("p");
    showscheduleday.textContent= `schedule days : ${ele.show.schedule.days}`;

    let showscheduletime = document.createElement("p");
    showscheduletime.textContent= ` schedule time : ${ele.show.schedule.time}`;

    let showrating = document.createElement("p");
    showrating.innerHTML= `rating : ${ele.show.rating.average}`;

    let shownetwork = document.createElement("p");
    shownetwork.innerHTML=` streaming network : ${ ele.show.network.name}`;

    let shownetworkcountry = document.createElement("p");
    shownetworkcountry.innerHTML= ` country : ${ele.show.network.country.name}`;

    let showsummary = document.createElement("p");
    showsummary.classList.add("summarystyle")
    showsummary.innerHTML=` Summary : ${ele.show.summary}`;

    childDiv1.append(showimage,showtitle)
    childDiv2.append(showgenres,showpremierdate,
        showscheduleday,showscheduletime,showrating,shownetwork,shownetworkcountry,showsummary)
    newdiv.append(childDiv1,childDiv2);
    outerdiv.append(newdiv);
    document.body.append(outerdiv);
 

   })
        
        
        
        
       
        
}