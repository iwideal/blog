import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
    console.log(1111);


    // 内容目录
    const dirPath = path.join(process.cwd(), 'content/blog')

    const response = readJsonFiles(dirPath)
    console.log(response);


    return response
})

function readJsonFiles(dir) {
    let results = [];

    // 获取目录下的所有文件和子目录  
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const itemPath = path.join(dir, item.name); // 获取完整路径  

        if (item.isDirectory()) {
            // 如果是目录，递归调用  
            const nestedResults = readJsonFiles(itemPath);
            results = results.concat(nestedResults); // 合并结果  
        } else if (item.isFile() && item.name.endsWith('.json')) {
            // 如果是 JSON 文件，读取并解析  
            try {
                const data = fs.readFileSync(itemPath, 'utf-8');
                results.push({
                    file: itemPath,
                    content: JSON.parse(data), // 将文件内容解析为 JSON  
                });
            } catch (error) {
                console.error(`无法读取文件 ${itemPath}:`, error.message);
            }
        }
    }

    return results;
}  