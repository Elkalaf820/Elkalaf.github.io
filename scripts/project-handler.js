
let projectsDiv=document.getElementById("project3");


for(i=0;i<PROJECTS.length;i++){
    var currentProj = PROJECTS[i]

    //div
    var projectDiv = document.createElement("div");
    var divStyle = document.createAttribute("style");
    divStyle.value= "display:inline-block;width:300px;margen:10px;text-align: center;";
    projectDiv.setAttributeNode(divStyle);

    //h3
    var title = document.createElement("h3");
    var titleNode=document.createTextNode(currentProj.title);// ناديت علي العنوان الللي في الاوبجيكت وبعدين هاحطه في ال تايتل 
    title.appendChild(titleNode);

    //img
    var image = document.createElement("img");
    var srcImg = document.createAttribute("src");
    srcImg.value="./imgs/" + currentProj.img;
    image.setAttributeNode(srcImg);
    var imgStyle = document.createAttribute("style");
    imgStyle.value= " width: 180px; hight: 100px";
    image.setAttributeNode(imgStyle);

    //discription
    var p = document.createElement("p");
  
    var pText =document.createTextNode(currentProj.desc);
    p.appendChild(pText);

    projectDiv.appendChild(title);
    projectDiv.appendChild(image);
    projectDiv.appendChild(p);
    projectsDiv.appendChild(projectDiv);



}

