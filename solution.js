function doubling (n){
  		return 2*n
     }

var array = [10,2,3,4]
output = {}
i = 0
while(i<array.length){
	output[array[i]] = doubling(array[i])
	i+=1
}
console.log('output:',output)