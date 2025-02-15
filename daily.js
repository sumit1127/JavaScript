let arr = [12, 35, 1, 10, 34, 1, 35]

let first = 0
let second = 0
let third = 0
function firstElement(){
    for(let i=0;i<arr.length;i++){
        if(first < arr[i]){
            first = arr[i]
        }
    }
    console.log(`the first element is ${first}`)
    for(let i=0;i<arr.length; i++){
        if(arr[i] > second && arr[i] < first){
            second = arr[i]
        }
    }
    console.log(`the second element is ${second}`)
    for(let i=0; i<arr.length; i++){
        if(third < arr[i] && arr[i] < second){
            third = arr[i]
        }
    }
    console.log(`the third element is ${third}`)
    
}
// firstElement()


let a = 10 
let b = 12
function swap(){
    a = a+b //10+12 = 22 
    b = a-b // 22-12 = 10
    a = a-b //22-10  = 12
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
}
// swap()


let n = 12345

function reverse(){
    let rev = 0
    
    while(n>0){
        let last = n%10
        rev = (rev*10) + last 
        n = (n - n%10) /10
    }
    return rev
}
// console.log(reverse())

let str = 'abcadblomdk'

function reverseStr(){
    let rev = ''
    for(let i=str.length-1; i>=0; i--){
        rev += str[i]
    }
    return rev
}
// console.log(reverseStr())

let array = [3,0,4,5,1]
function missing(){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    let n = 1
    for(let i=0; i<arr.length; i++){
        if(arr[i] == n){
            n++
        }
        return n
    }
}
//console.log(missing())

let str1= 'engineer'
let obj = {}
function frequency(){
    for(let i=0; i<str1.length;i++){
        if(obj[str1[i]]){
            obj[str1[i]]++
        }else{
            obj[str1[i]] = 1
        }
    }
    return obj
}
frequency()
let ans = ''
for(let t in obj){
    // if(obj[t] >=1){
        ans += `${t}${obj[t]}`
    // }
}
// console.log(ans)

let keys = Object.keys(obj)
for(let i=0; i<keys; i++){
    ans += `${keys[t]}${obj[keys[t]]}`
}
// console.log(ans)


let str2 = 'Helloworld'
let uppercount = 0
let lowercount = 0

function countStr(){
    for(let i=0; i<str2.length; i++){
        if(str2[i] == str2[i].toUpperCase()){
            uppercount++
        }
    }
    console.log(`uppercase = ${uppercount}`)
    
    for(let i=0;i<str2.length; i++){
        if(str2[i] == str2[i].toLowerCase()){
            lowercount++
        }
    }
    console.log(`lowercase = ${lowercount}`)
}
// countStr()

//check given string palindrome or not

let str3 = 'qwewq'

function palindrome(){
    let rev = ''
    for(let i=str3.length-1; i>=0; i--){
        rev += str3[i]
    }
    if(rev == str3){
        console.log('Palindrome')
    }else{
        console.log('Not palindrome')
    }
}
// palindrome()

// using recursion
function fibonacci(n){
    if(n <= 2) return n
    return fibonacci(n-2) + fibonacci(n-1) 
}
function print(n){
    for(let i=0; i<n; i++){
        process.stdout.write(fibonacci(i)+' ')
    }
}
// print(9)

// code to find even numebrs
let num = 1092456

function isEven(){
    let even = false
    while(num > 0){
        let last = num%10 //6
        if(last % 2 == 0){
            console.log(last)
            even = true
        }
        num = (num-num%10) / 10
    }
    if(!even){
        return -1
    }
}
isEven()











