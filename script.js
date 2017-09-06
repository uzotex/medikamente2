// Code goes here
$(document).ready(function(){
$('#search').keydown(function(){
$.getJSON("pepper.json",function(data){
var search = $('#search').val();
var regex = new RegExp(search, 'i');
var output;
$.each(data, function(key, val){
if((val.id.search(regex) != -1 ) || (val.Name.search(regex) != -1)){
    output += "<tr>";
    output += "<td id='"+key+"'>"+val.id+"</td>";
    output += "<td id='"+key+"'>"+val.Name+"</td>";
    output += "<td id='"+key+"'>"+val.Substanzname+"</td>";
    output += "<td id='"+key+"'>"+val.Tagesdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Dosierung+"</td>";
    output += "<td id='"+key+"'>"+val.Startdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Dosisreduktion+"</td>";
    output += "<td id='"+key+"'>"+val.Tageshochstdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Nebenwirkungen+"</td>";
    output += "<td id='"+key+"'>"+val.Antidot+"</td>";
    output += "<td id='"+key+"'>"+val.Kommentarefix+"</td>";
    output += "<td id='"+key+"'>"+val.Kommentarejedes+"</td>";
    output += "</tr>";
  }
});
$('tbody').html(output);
});
});
});

