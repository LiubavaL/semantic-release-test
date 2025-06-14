export function sum(a:number, b:number){
    return a + b;
}

export function minus(a:number, b:number){
    return a - b;
}

export function multiply(a:number, b:number){
    return a * b;
}

export function divide(a:number, b:number){
    return a / b;
}

export function abs(a:number){
    return Math.abs(a);
}

export function print(a:number){
    return console.log(a);
}

export function alert(message: string = ""){
    return alert('Message: ' + message);
}
