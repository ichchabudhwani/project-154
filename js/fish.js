AFRAME.registerComponent("fish_rotation",{

    init: function(){
     for (var i=1;i <=10; i++) {
        const id= `fish${i}`;
        const posX=Math.random()*100+ -50;
        const posY=Math.random()*5+5
        const posZ=Math.random()*60+ -40
       
        const position={x:posX,y:posY,z:posZ};
        this.createfishes(id,position);

     }
    },
    createFishes:function(id,position){
        
        var terrainEl = document.querySelector("#terrain");
        var fishE1=document.createElement("a-entity");
        fishE1.setAttribute("id",id)
        fishE1.setAttribute("position",position);
        fishE1.setAttribute("scale",{x:500,y:500,z:500})
        fish.setAttribute("gltf-model","assets/fish/scene.gltf")
        fishE1.setAttribute("animation-mixer",{})
        fishE1.setAttribute("material","color" ,"#ff9100");
        
        
       terrainEl.appendChild(fishE1);

    }
})