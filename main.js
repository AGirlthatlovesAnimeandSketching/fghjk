
var image = ["Appa.jpg","Amma.JPG","Molutty.jpg","Bebu.jpg"];

var i = 0;
function update()
{
    i++
    var numbers_of_family_member_in_array = 5;
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }

    var updateImage = image[i];
    document.getElementById("family_member_pic").src = updateImage;



}