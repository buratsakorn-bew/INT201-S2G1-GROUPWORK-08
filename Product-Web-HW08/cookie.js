export function getAllCookie(){
    let data = document.cookie;
    //data = "key=value;key=value;key=value;key=value;"
    let arrayOfCookie = data.split('; ');
    //arrayOfCookie = ["key1=value1","key2=value2","key=value","key=value"]
    return arrayOfCookie;
}

export function getKey(i = 0){
    let arrayOfKeyCookie = [];
    let index = 0;
    for(let i of getAllCookie()){
        //i = "key=value;"
        //i = ["key1" , "value1"] ["key1" , "value1"] ["key1" , "value1"] ["key1" , "value1"]
        let key = i.split('=');
        arrayOfKeyCookie[index++] = key[0];
    }
    return arrayOfKeyCookie[i];
}

export function getValue(key) {
    let keys = key;
    for(let i of getAllCookie()){
        //i = "key=value;"
        //i = ["key1" , "value1"]
        let key = i.split('=');
        if(key[0] == keys){
            return key[1];
        }
    }
}

export function deleteData(){
    for(let i = getAllCookie().length-1 ; i >= 0 ; i--){
        document.cookie = `${getKey(i)} = ${getValue(getKey(i))} ; expires= Thu, 21 Aug 2014 20:00:00 UTC`
    }
}
