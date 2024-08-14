export function isHide(elementHide, setelementHide){
    if(elementHide === true){
        setelementHide(false);
    }else{
        setelementHide(true);
    }
}