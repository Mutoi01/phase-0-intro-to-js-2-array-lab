// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}


function appendCat(name){
    let allCats = [
        ...cats,(name) ];
          return allCats
}


function prependCat(name){
    let allCats = [
        (name),...cats ];
          return allCats
}

function removeLastCat(name){
    return cats.slice(0, cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1)
} 