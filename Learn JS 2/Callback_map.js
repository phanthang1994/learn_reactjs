// Array.prototype.map2 = function(callback) {
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callback(this[i], i);
//         console.log('result: ', result);
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });
// Array.prototype.forEach2 = function (cb) {
//     for (let i in this) {
//       if (!this.hasOwnProperty(i)) return;
//       cb(this[i], i, this);
//     }
//   };

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.forEach2(
//     function(course, index, array)
//     {
//         console.log(course, index, array);
//     }
// )

// Array.prototype.forEach2 = function (cb) {
//     for (let i in this) {
//       if (!this.hasOwnProperty(i)) return;
//       cb(this[i], i, this);
//     }
//   };


Array.prototype.filter2 = function (callback) {
    if (typeof callback === 'function') {
        var result = []

        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var condition = callback(this[index], index, this)
                if (condition) {
                    result.push(this[index])
                }
            }
        }
        return result
    }
}

var courses = [
    { id: 1, name: 'Javascript', coin: 250 },
    { id: 2, name: 'HTML, CSS', coin: 350 },
    { id: 3, name: 'Ruby', coin: 400 },
    { id: 4, name: 'PHP', coin: 0 },
    { id: 5, name: 'ReactJS', coin: 500 },
    { id: 6, name: 'Ruby', coin: 120 },
]

courses.length = 10

var filter = courses.filter(function (course,arr,brr) {
    console.log(typeof index)
    return course.coin <     400;
})
console.log(filter)

var filter2 = courses.filter2(function (course, index) {
    console.log(typeof index)
    return course.coin < 400;
})
console.log(filter2)