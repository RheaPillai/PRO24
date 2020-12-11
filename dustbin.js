class Dustbin{
      constructor(x,y){
            this.x=x;
            this.y=y;
            this.baseH=20;
            this.baseW=200;
            //base
            this.baseB=Bodies.rectangle(this.x,this.y,this.baseW,this.baseH,{isStatic:true})
            World.add(world,this.baseB)
            //left
            this.leftB=Bodies.rectangle(this.x-this.baseW/2,this.y-this.baseH/2,this.baseH,this.baseW,{isStatic:true})
           World.add(world,this.leftB)
           //right
           this.rightB=Bodies.rectangle(this.x+this.baseW/2,this.y-this.baseH/2,this.baseH,this.baseW,{isStatic:true})
           World.add(world,this.leftB)

      }



           display(){
                 var posB=this.baseB.position
                 var posL=this.leftB.position
                 var posR=this.rightB.position

                 fill("red")

                 rect(posB.x,posB.y,this.baseW,this.baseH)
                 rect(posL.x,posL.y,this.baseH,this.baseW)
                 rect(posR.x,posR.y,this.baseH,this.baseW)


      }


}




  
