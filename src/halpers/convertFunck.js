export const convertFileToBase64 = (file) =>{
    return new Promise((res, rej)=>{
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () =>{
            const base64String = reader.result
            res(base64String)
        }

        reader.onerror = (err) =>{
            rej(err)
        }
    })
}