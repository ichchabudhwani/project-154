AFRAME.registerComponent("coins",{

    init: function(){
     for (var i=1;i <=10; i++) {
        const id= `coin${i}`;
        const posX=Math.random()*100+ -50;
        const posY=Math.random()*5+5
        const posZ=Math.random()*60+ -40

        const position={x:posX,y:posY,z:posZ};
        this.createCoins(id,position);

     }
    },
    createCoins:function(id,position){
        const tresureEntity=document.querySelector("#tresureCoins");
        var coinE1=document.createElement("a-entity");
        coinE1.setAttribute("id",id)
        coinE1.setAttribute("ppsition",position);
        coinE1.setAttribute("material","color" ,"#ff9100");

        coinE1.setAttribute("geometry",{primitive:"circle",radius:1});
        coinE1.setAttribute("animation-mixer",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            our:1000
        });
        tresureEntity.appendChild(coinE1)

    }
})