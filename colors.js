const gradients = {
    temps : [[Value = -30,Color = [161,194,161]],
            [Value = -20,Color = [119,120,120]],
            [Value = -10,Color = [193,201,209]],
            [Value = 0,Color = [205,113,119]],
            [Value = 10,Color = [199,4,237]],
            [Value = 20,Color = [20,9,210]],
            [Value = 30,Color = [0,229,221]],
            [Value = 40,Color = [0,174,99]],
            [Value = 50,Color = [132,193,0]],
            [Value = 60,Color = [255,226,0]],
            [Value = 70,Color = [255,143,0]],
            [Value = 80,Color = [255,0,0]],
            [Value = 90,Color = [150,0,0]],
            [Value = 100,Color = [200,0,145]],
            [Value = 110,Color = [230,105,245]],
            [Value = 120,Color = [255,255,255]]],
    
    dews : [[Value = -20,Color = [134,99,72]],
            [Value = -10,Color = [121,92,68]],
            [Value = 0,Color = [99,81,64]],
            [Value = 10,Color = [77,66,55]],
            [Value = 20,Color = [135,130,121]],
            [Value = 30,Color = [190,190,190]],
            [Value = 40,Color = [202,235,202]],
            [Value = 50,Color = [95,196,95]],
            [Value = 60,Color = [97,163,175]],
            [Value = 70,Color = [103,102,154]],
            [Value = 80,Color = [155,105,124]]],
    
    rainfall : [[Value = 0,Color = [74,209,247]],
                [Value = .1,Color = [105,159,208]],
                [Value = .25,Color = [59,74,172]],
                [Value = .5,Color = [59,247,74]],
                [Value = 1,Color = [59,179,70]],
                [Value = 1.5,Color = [59,134,67]],
                [Value = 2,Color = [247,248,59]],
                [Value = 3,Color = [250,222,136]],
                [Value = 4,Color = [247,172,59]],
                [Value = 5,Color = [247,59,59]],
                [Value = 6,Color = [190,59,59]],
                [Value = 8,Color = [153,59,59]],
                [Value = 10,Color = [247,59,247]],
                [Value = 15,Color = [153,115,228]],
                [Value = 20,Color = [224,224,224]]],     
    }
    
    const lerp_rgb = function(color1,color2,rate) {
    const r = ((color1[0]*(1-rate))+(color2[0]*rate));
    const g = ((color1[1]*(1-rate))+(color2[1]*rate));
    const b = ((color1[2]*(1-rate))+(color2[2]*rate));
    return 'rgb('+r+','+g+','+b+')';
    }
    
    const get_gradient = function(range,value){
    var count = 1;
    var length = range.length;
    
    var min = range[0];
    var max = range[length-1];
    
    if (value <= min[0]){return 'rgb('+min[1][0]+','+min[1][1]+','+min[1][2]+')'};
    if (value >= max[0]){return 'rgb('+max[1][0]+','+max[1][1]+','+max[1][2]+')'};
    
    for (var i = 0; (i < length); i++) {
    var g1 = range[i];
    var g2 = range[i+1];
    
    if ((g1[0] <= value) && (g2[0] >= value)){
    var difference = ((value-g1[0])/(g2[0]-g1[0]));
    
    return lerp_rgb(g1[1],g2[1],difference)};
    }};