function myFunction(){

    var selectstate = ["California", "Arizona", "Florida", "New Mexico", "New York"];
    var arrCalifornia=["Sacramento"];
    var arrArizona=["Phoenix"];
    var arrFlorida=["Tallahassee"];
    var arrNewmexico=["Santa Fe" ];
    var arrNewyork=["Albany"];

    var selectoptions = (document.getElementById("state").value)
    var displaystates = document.getElementById("capital");

    document.getElementById("capital").innerHTML="";

    if(selectoptions =="California"){
        for(i=0;i<arrCalifornia.length;i++){
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrCalifornia[i];
            console.log(soptions.innerHTML);
            soptions.value=arrCalifornia[i];
            displaystates.appendChild(soptions);
        }
    }

    else if(selectoptions =="Arizona"){
        for(i=0;i<arrArizona.length;i++){
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrArizona[i];
            console.log(soptions.innerHTML);
            soptions.value=arrArizona[i];
            displaystates.appendChild(soptions);
        }
    }

    else if(selectoptions =="Florida"){
        for(i=0;i<arrFlorida.length;i++){
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrFlorida[i];
            console.log(soptions.innerHTML);
            soptions.value=arrFlorida[i];
            displaystates.appendChild(soptions);
        }
    }

    else if(selectoptions =="New Mexico"){
        for(i=0;i<arrNewmexico.length;i++){
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrNewmexico[i];
            console.log(soptions.innerHTML);
            soptions.value=arrNewmexico[i];
            displaystates.appendChild(soptions);
        }
    }

    else if (selectoptions =="New York") {
        for(i=0;i<arrNewyork.length;i++){
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrNewyork[i];
            console.log(soptions.innerHTML);
            soptions.value=arrNewyork[i];
            displaystates.appendChild(soptions);
        }
    }


}
