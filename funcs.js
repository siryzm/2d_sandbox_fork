// calculating convective available energy (CAPE)
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

// calculating precipitable water (PWAT)
const get_pwat = function(dewpoint){
var pwat = (.1*Math.exp((17.269*dewpoint)/(237.3+dewpoint)));
var pwat_inches = ((pwat*10)/2.54);

return pwat_inches;
};