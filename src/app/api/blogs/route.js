import { promises as fs } from 'fs';
import path from 'path';

// GET: http://localhost:3000/api/blogs
export async function GET(request) {
  try {
    const dirPath = path.join(process.cwd(), 'src', 'blogdata');
    const files = await fs.readdir(dirPath); // Read all filenames

    const blogData = [];

    for (let index = 0; index < files.length; index++) {
      const item = files[index];
      const filePath = path.join(dirPath, item);
      

      const fileContent = await fs.readFile(filePath, 'utf-8');
    //   console.log(typeof fileContent);  //type of string
      blogData.push(JSON.parse(fileContent));
    }

    return new Response(JSON.stringify(blogData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Directory not found or failed to read' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
