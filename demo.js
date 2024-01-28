<script>
    let a = Math.floor(Math.random()*11)
    let b = Math.floor(Math.random()*11)
    document.write(a + "   +   " + b + "   =    ");
    document.write("<input type='number' name='ans' style='width: 15%;' class='ans' onInput='getValue()' id='ans'></br>");
    document.write("<button type='button' id='btn' style='color: white; background-color: rgb(99, 99, 242);'>SUBMIT</button>");
    let num = document.getElementById("ans");
    let btn1 = document.getElementById('btn');
    let output = document.getElementById('out');

    function fun(){
        if((a+b) == num.value)
        {
            alert("Hooraaayyyy!! Correct Answer")
        }
        else
        {
            alert("Poor guy...")
        }
    }
    btn1.addEventListener('click',fun);
</script>