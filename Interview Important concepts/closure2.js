function outerfuction(){

    var player="Anirudh"

    function innerfunction(){
        console.log(player);
    }
    return innerfunction;


}
let result  = outerfuction();

result();