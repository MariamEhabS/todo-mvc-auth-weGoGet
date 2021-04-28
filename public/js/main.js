console.log('main.js is connected')

const deleteBtn = document.querySelectorAll('.del')
const postItem = document.querySelectorAll('span.not')
// const postComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePost)
})

// Array.from(postItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(postComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deletePost(){
    console.log("i'm trying to delete things!")
    const postId = this.parentNode.dataset.id
    try{
        const response = await fetch('posts/deletePost', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function markComplete(){
//     const postId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('posts/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'postIdFromJSFile': postId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const postId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('posts/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'postIdFromJSFile': postId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }