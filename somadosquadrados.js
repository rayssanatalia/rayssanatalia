function quadrado(a){
    return a*a;
}

function soma(a,b,c){
    return a > c && b > c
            ? quadrado(a) + quadrado(b)
            : a > b && c > b
            ? quadrado(a) + quadrado(c)
            : quadrado(b) + quadrado(c);
            
}