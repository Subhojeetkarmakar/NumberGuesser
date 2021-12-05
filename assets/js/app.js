
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var output = document.getElementById("output");
    var temp = Math.floor((Math.random() * 100) + 1);
    var pTag = document.getElementById("pTag");
    var output2 = document.getElementById("output2");
    var empty1 = 'Too High';
    var empty2 = 'Too Low';
    var empty3 = 'Correct Guess';

    submit.addEventListener("click", func);


    function func() {

        var new1 = document.createElement("p");
        var new2 = document.createElement("p");
        new1.innerHTML = input.value;
        output.appendChild(new1);
        new2.innerHTML = temp;
        pTag.appendChild(new2);

        if (new1.innerHTML > new2.innerHTML) {
            output2.innerHTML = empty1;
            pTag.style.display = "none";
        } else if (new1.innerHTML < new2.innerHTML) {
            output2.innerHTML = empty2;
            pTag.style.display = "none";
        } else {
            output2.innerHTML = empty3;
        }



    }
