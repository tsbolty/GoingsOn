import React, { createContext } from 'react';

const BusinessInfoContext = createContext({
    _id: "", 
    email: "",
    businessName: "",
    businessAddress: "",
    businessType: "",
    businessHeadline: "",
    mapsLink: "",
    weeklySpecials: [],
    daySpecials: []
})


export default BusinessInfoContext;