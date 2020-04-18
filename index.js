//import all required modules
const fs = require('fs')
const path = require('path')

//set the source and destination paths.
const oldPath = process.env.USERPROFILE + '/downloads/'
const newPath = process.env.USERPROFILE + '/downloads'

//create directories automatically
fs.mkdir(oldPath + 'softwares', {recursive:true},(err)=>{
    if(err) throw err
})

fs.mkdir(oldPath + 'audio', {recursive:true},(err)=>{
    if(err) throw err
})

fs.mkdir(oldPath + 'compressed', {recursive:true},(err)=>{
    if(err) throw err
})

fs.mkdir(oldPath + 'videos', {recursive:true},(err)=>{
    if(err) throw err
})

fs.mkdir(oldPath + 'images', {recursive:true},(err)=>{
    if(err) throw err
})

fs.mkdir(oldPath + 'documents', {recursive:true},(err)=>{
    if(err) throw err
})



//function to move file from source folder to destination folder
const moveFile = (srcPath, destPath)=>{
    fs.rename(srcPath, destPath, (err)=>{
          if(err) throw err
        })
}

//check the files and move them to the appropriate folder
fs.readdir(oldPath,(err, files)=>{
    if(err) throw err
    let i = 0;
    for( let file of files){
        if(path.extname(file) == '.jpg' || path.extname(file) == '.png' || path.extname(file) == '.gif'){
            moveFile(oldPath + file,newPath +'/images/'+file); i++
        }else if(path.extname(file) == '.mp3' || path.extname(file) == '.wav'){
            moveFile(oldPath + file, newPath +'/audio/'+file); i++
        }else if(path.extname(file) == '.mp4' || path.extname(file) == '.avi'){
            moveFile(oldPath + file, newPath +'/videos/'+file); i++
        }else if(path.extname(file) == '.pdf' || path.extname(file) == '.doc' || path.extname(file) == '.docx'
                    || path.extname(file) == '.txt')
        {
            moveFile(oldPath + file, newPath +'/documents/'+file); i++
        }
        else if(path.extname(file)=== '.rar' || path.extname(file)=='.zip'){
            moveFile(oldPath + file, newPath +'/compressed/'+file); i++
        }
        else if(path.extname(file)=== '.exe' || path.extname(file)=='.msi'){
            moveFile(oldPath + file, newPath +'/softwares/'+file); i++
        }
    }
    console.log(i + ' files successfully moved to new location')
    
})