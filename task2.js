// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function heightname(names){
    let small = names[0];
    // console.log(small)

    for (let nam of names){
        if(small.length > nam.length){
            small = nam;
        }
    }
    return small
}

let names =  ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let output = heightname(names)
console.log(output)