
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
const get_pwat = function(H_env){
var pwat = 0;
let dZ = 2;

for (var i = 0; i < (H_env.length-1); i++) {
let dpwat = (.5*(H_env[i]+H_env[i+1])*dZ);
if (dpwat < 0){continue};

    pwat += dpwat;
};

return pwat;
};