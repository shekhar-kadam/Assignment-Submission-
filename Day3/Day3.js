// Write a JavaScript program to display the reading status (i.e. display book name, author name,

// const { isObjectBindingPattern } = require("typescript");

//     and reading status) of the following books.
        let library = [
        {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
        },
        {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
        },
        {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
        }];


    const getReadingSatus = (obj) => {
        let status = []
        for(let i= 0; i < obj.length; i++) {
            if(library[i].readingStatus === true) {
                status.push(`Already read ${library[i].author} ${library[i].title}`)
            } else if(library[i].readingStatus === false) {
                status.push(`You still need to read ${library[i].title} by ${library[i].author}.`)
            }
            // status.push(library[i].readingStatus);
        }
        return status.toString()
    }

    console.log(getReadingSatus(library))

// Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
// below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".


    let age = prompt("Enter your age here...")
    if(age >= 18) {
        alert("Drive Safe")
    } else if(age  < 18) {
        alert("Not legal age to drive")
    }
