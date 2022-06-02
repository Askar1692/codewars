const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}
    const copyUser = {...user, friends: [...user.friends], address: {...user.address}};

    console.log(user === copyUser);