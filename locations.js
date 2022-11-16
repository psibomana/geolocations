const inside = (point, vs) => {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

var polygon = [
    [36.77106933192055,-1.282970707321179,1783.556325766623],
    [36.80769640872441,-1.349673651113456,1673.292119474939],
    [36.88650107402172,-1.333000491685257,1637.604391935567],
    [36.89411037272591,-1.261777330178326,1607.240022152507],
    [36.83688102160077,-1.244918596709801,1679.727619507885],
    [36.79031805081396,-1.259268291209623,1732.214952951877],
    [36.77106933192055,-1.282970707321179,1783.556325766623]
  ];


console.log("Is Social House In? ", inside([36.7711766, -1.2882616], polygon)); // Social House
console.log("Is Wilson Airport In? ", inside([36.8113668, -1.3179487], polygon)); // Wilson Airport
