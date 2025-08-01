import { promises as fs } from 'fs'; 
import path from 'path';
// http://localhost:3000/api/getblog?slug=how-to-learn-flask&kalu=hehe

export async function GET(request) {
    // http://localhost:3000/api/getblog?slug=how-to-learn-flask
    // for '?' we have to do
    // other wise GET(request,{params})  can also be done
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    
    const slug = searchParams.get('slug');

    if(!slug){
        return new Response(JSON.stringify({ error: "Missing slug" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const filePath = path.join(process.cwd(),'src','blogdata',`${slug}.json`);
        const fileContents = await fs.readFile(filePath,'utf-8');
        const data = JSON.parse(fileContents);

        return new Response(JSON.stringify(data),{
            status:200,
            headers:{'Content-Type' : 'application/json'}
        });
        
    } catch (error) {
        return new Response(JSON.stringify({error: `File not found for ${slug}`}),{
            status:404,
            headers:{'Content-Type' : 'application/json'}
        })
    }
}