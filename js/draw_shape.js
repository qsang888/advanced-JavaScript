//draw a ball
var Shape = Shape || {}; 

Shape.Ball = function(){
   var init = {
       x:0,
       y:0,
       radius: 40,
       rotation:0,
       scaleX:1,
       scaleY:1,
       lineWidth:1,
       color:"#ff0000"
   }
        

    init.draw = function(context){
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.scale(this.scaleX, this.scaleY);
      
      context.lineWidth = this.lineWidth;
      context.fillStyle = this.color;
      context.beginPath();
      //x, y, radius, start_angle, end_angle, anti-clockwise
      context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
      context.closePath();
      context.fill();
      if (this.lineWidth > 0) {
        context.stroke();
      }
      context.restore(); 
    }
      return init
    
}


