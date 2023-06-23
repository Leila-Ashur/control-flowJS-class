let num = [10,20,3,8,7,9,12]
for (let i=0; i<num.length;i++){
  
    console.log(num[i]);
    console.log(i);
}
//////


for(let i = 0; i <num.length; i++){
    console.log({i})
    if(i===3){
        break
    }
    
}
//////

for(let i = 0; i <num.length; i++){
    
    if(i===3){
        continue
    }
    console.log({"continue":i});
}
