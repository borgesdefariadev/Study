const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
};

function addUser(newUser) {
    axios.post(url, newUser)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.error(error))
}

getUsers(1)

const newUser = {

        name: "Olivia Zars",
        avatar: "https://picsum.photos/200/300",
        city: "Rio de Janeiro",
    
}

// addUser()

function getUser() {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userID.textContent = data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

