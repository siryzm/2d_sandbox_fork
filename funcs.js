const get_cape = function(T_parcel,T_env){
var cape = 0;
let dZ = 2;

for (var i = 0; i < T_parcel.length; i++) {
let dCAPE = ((T_parcel[i]-T_env[i])*dZ);

if (dCAPE < 0){continue};
    cape += dCAPE;
};

return cape;
};