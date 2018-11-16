function addAsync(a ,b,phonenumber)
{
    console.log("Started ....");

    setTimeout(function(){
        console.log("Calculating ...");
        var c=a+b;
        phonenumber(c);
    },2000);

    console.log(" Ended ....");

}

function callback(result){
    console.log(result);
}
addAsync(20,30,callback); //or add anonymous func
