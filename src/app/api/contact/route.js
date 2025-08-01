import { promises as fs } from 'fs'; 
import path from 'path';

export async function GET(request) {
    return new Response(JSON.stringify({msg: "getty"}),{
        status:200,
        headers: {
            'Content-Type': 'application/json',
        }
    }) 
}


export async function POST(request) {
    const data = await request.json()

    // for unqiue name of each contact js like 1,2 ,3 .....
    const dirPath = path.join(process.cwd(),'src','contactdata')
    let totDir = await fs.readdir(dirPath)
    
    const filePath = path.join(process.cwd(),'src','contactdata',`${totDir.length + 1}.json`);

    // Storing the contact data
    fs.writeFile(filePath, JSON.stringify(data,null,2), (err)=>{
        if(err){
            console.error('Error writing file: ',err);
        }else{
            console.log('File written successfully');
        }
    })

    return new Response(JSON.stringify(data),{
        status:200,
        headers:  {
            'Content-Type': 'application/json',
        }
    })
}