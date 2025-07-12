function plaindrome(){
    str=prompt("enter word to check plaindrome or not").toLowerCase()
    a= str.split('').reverse().join('');
    if(str==a){
        console.log("it is a plaindrome word");
    }else{
        console.log("it is not a plaindrome word");
        
    }
}