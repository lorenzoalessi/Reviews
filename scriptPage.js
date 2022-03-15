const num = 3;

function previous(){
    let i = 1;
    let check = 0;
    while(i != num || check == 0){
        if(document.getElementById(i).hidden == false){
            document.getElementById(i).hidden = true;
            if(i == 1){
                document.getElementById(num).hidden = false;
                check = 1;
            } else{
                document.getElementById(i-1).hidden = false;
                check = 1;
            }
        }
        i++;
    }
}

function next(){
    let i = 1;
    let check = 0;
    while(i > num || check == 0){
        if(document.getElementById(i).hidden == false){
            document.getElementById(i).hidden = true;
            if(i == 3){
                document.getElementById("1").hidden = false;
                check = 1;
            } else{
                document.getElementById(i+1).hidden = false;
                check = 1;
            }
        }
        i++;
    }
}

function random(){
    var x = Math.floor(Math.random()*num +1);
    let i = 1;
    let check = 0;
    while(i > num || check == 0){
        if(document.getElementById(i).hidden == false){
            while(x == i){
                x = Math.floor(Math.random()*num +1);
            }
            document.getElementById(i).hidden = true;
            document.getElementById(x).hidden = false;
            check = 1;
        }
        i++;
    }
}