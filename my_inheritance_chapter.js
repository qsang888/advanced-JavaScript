//Pseudoclassical example 
var Mammal = function(name){
    this.name = name 
}

Mammal.prototype.get_name = function(){
    return this.name
}

Mammal.prototype.says = function(){
    return this.saying || '';
}

//var myMammal = new Mammal('Herb the Mammal')
//var name = myMammal.get_name()

var Cat = function(name){
    this.name = name 
    this.saying = 'meow'
}
//inheritance 
Cat.prototype = new Mammal();
Cat.prototype.purr = function(n){   
    //Cat's new method purr
    var i,s = ''
    for (i=0; i<n; i+=1){
        if(s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}
Cat.prototype.get_name = function(){
    return this.says() + ' ' + this.name +' '+ this.says(); 
}
//test case
//var myCat = new Cat('Henrietta')
//var says  = myCat.says()
//var purr  = myCat.purr(5)
//var name  = myCat.get_name()



