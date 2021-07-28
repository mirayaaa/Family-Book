
var images=
["https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg","https://www.gannett-cdn.com/presto/2021/03/09/USAT/bb0b3368-6c5c-45cb-a392-000f7fcb2742-i-V4V6LGz-X3.jpg?width=300&height=450&fit=crop&format=pjpg&auto=webp","https://static.wikia.nocookie.net/mom-cbs/images/e/e9/Bonnie_Plunkett.jpg/revision/latest/scale-to-width-down/250?cb=20191103030947"]

var names= ["Miraya", "Vivek","Shikha"]

var i=0;
function update()
{
    i++
    var family_array= 3
    if(i> family_array)
    {
        i=0;    
    }
    var updateimages = images [i];
    var updatenames = names[i];
    document.getElementById("family").src=updateimages;
    document.getElementById("family_names").innerHTML=updatenames;
}
