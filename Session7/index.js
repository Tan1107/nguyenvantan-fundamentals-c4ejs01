function hocBai(action) {
    console.log("hoc bai");
    return action
}
function diNgu() {
    console.log("di ngu");
    
}
function diCho(tacDuong) {
    return new Promise(function(resolve, reject){
        console.log("dang di cho");
        if(tacDuong == true) {
            reject("khong mua duoc")
        }else{
            resolve("rau")
        }
    })
}


let result = diCho(false).then(function(item) {
    console.log(item)
}).catch(function (reason) {
    console.log(reason);
    
});

async function getData() {
    try {
    const response = await fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members")
    const data = await response.json()
    console.log("await", data)
    }
 catch (err) {
     console.log(err);
     
 }   
}

async function updateData(id, data) {
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
    await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json"
        }
    })
}

async function deleteData(id, data) {
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
    await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json"
        }
    })
}

async function postData(data) {
    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/`;
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json"
        }
    })
}

async function main() {
    const data = {
        name: "van tan",
        gender: 1,
        role: "student"
    }
    postData(data)
    deleteData(14, data)
    updateData(18, data);
    getData();
    console.log("done");
}
