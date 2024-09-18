const getButtonColor=(colorStyle)=>{

    if(colorStyle==="primary"){
        return  "bg-blue-500";
    }
    if(colorStyle==="secondary"){
        return  "bg-gray-500";
    }
    if(colorStyle==="success"){
        return  "bg-green-500";
    }
    if(colorStyle==="error"){
        return  "bg-red-500";
    }

    if(colorStyle==="warning"){
        return  "bg-yellow-400";
    }
}

export default getButtonColor;