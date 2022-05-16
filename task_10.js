function mygcd(x,y){
    var nod = 1;
    while(x >= 1 && y >=1){
        if(x > y ){
            if(x % y == 0){
                return nod = y;}
            if(x % y !=0 || y % x !=0){
                return }
            return nod = x % y;}
        if(x == y){
                return nod;
            }
        else
            return nod = y % x;
    }
}
console.log(mygcd(10927782,6902514));