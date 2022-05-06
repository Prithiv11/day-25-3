async function call(){
    try{
        var op = await fetch("https://api.thecatapi.com/v1/breeds");
        var data =await op.json()
        console.log(data);
        var parent = document.getElementById("main")
        for(objs of data) {
            var cont = document.createElement("div");
            cont.setAttribute("class","card")

            var img = document.createElement("img");

            switch(objs.name) {
                case "European Burmese":
                    img.src="https://www.petguide.com/wp-content/uploads/2013/07/european-burmese.jpg";
                  break;
                case "Malayan":
                    img.src="https://www.catbreedselector.com/wp-content/uploads/2016/11/Asian-Cat-Breeds.jpg";
                  break;
                  case "Persian":
                      img.src="https://easyscienceforkids.com/wp-content/uploads/2019/05/Persian-Cat-23-4-1-758x635.jpg";
                    break;
                default:
                    img.src=objs.image.url;
              }

            var h = document.createElement("h4");
            h.innerText = `Name : ${objs.name}`;

            var p = document.createElement("p");
            p.innerText = `Description :  ${objs.description}`;
            cont.appendChild(img);
            cont.appendChild(h);
            cont.appendChild(p);
            parent.appendChild(cont);
        }

    }
    catch{
        alert("something is wrong")
    }
}
call();