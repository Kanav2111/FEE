const obj = Object();
obj.name = 'Kanav';
console.log(obj);


const user =
{
    name: 'Kanav',
    age: 20,
    class: 'FEE'
};
console.log(user);


const users = 
{
    user1: {
        name: 'Kanav',
        age: 20
    },
    user2: {
        name: 'Kannan',
        age: 19
    },
    user3: {
        name: 'Mridul',
        age: 19
    }
};

console.log(users);
console.log(users.user1);
console.log(users.user3.name);
users.user3.name="kavish";  //for updating value in object
console.log(users);

// const user = {
//     user1: {
//         name: 'mridul',
        

//     }
// }