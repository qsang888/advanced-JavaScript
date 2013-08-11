//draw a ball
var Shape = Shape || {}; 

Shape.Ball = function(spec){
   var x = 0,
       y = 0,
       radius = 40,
       rotation = 0,
       scaleX = 1,
       scaleY = 1,
       lineWidth = 1,
       color = "#ff0000";
        
//    init.getRadius = function(){
//        if (spec.radius === undefined) { spec.radius = 40; }
//        return spec.radius 
//    }
//    init.getColor = function(){
//        if (spec.color === undefined) {spec.color = "#ff0000"; }
//        return spec.color
//    }
 {
        draw: function(context){
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
        },
        
        update: function(update_rule){ 
            update_rule = update_rule.x || this.x
            update_rule = update_rule.y || this.y
    //        myBall.y = canvas.height / 2 + Math.sin(Math.PI*speed) * range; 
    //        myBall.x += .5  
    //        myBall.scaleX = centerScale + Math.sin(Math.PI*speed) * range;
                 
        },
        getLocation:function(){
            return {
                x:this.x,
                y:this.y
            }
        }
    }
}

//var mammal = function (spec){
//    var that = {}
//    that.get_name = function(){
//        return spec.name || ''
//    } 
//    that.says = function() {
//        return spec.saying || ''
//    }
//    return that
//}
//var myMammal_3 = mammal({name:'Jol'})
//
////step2: interitance 
//var cat = function(spec){
//    spec.saying = spec.saying || 'meow'
//    var that = mammal(spec)
//    that.purr = function(n){
//        var i,s = ''
//        for(i=0; i<n; i+=1){
//            if(s){
//                s+= '-'
//            }
//            s+='y'
//        }
//        return s
//    }
//    that.get_name = function(){
//        return that.says() + ' ' + spec.name + ' ' +that.says();
//    }
//    return that
//}  