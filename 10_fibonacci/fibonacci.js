const fibonacci = function(n) {
    const fib = [1,1];

    if(n == 0) {
        return 0;
    } else if ( n > 0) {
        for (let i = 2 ; i<n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }       
        return fib[n-1]
    } else {
        return "OOPS";
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
