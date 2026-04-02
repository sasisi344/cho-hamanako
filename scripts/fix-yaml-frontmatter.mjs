import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const AFFILIATES_DIR = path.resolve('src/content/affiliates');

function walk(dir, yamlFiles = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, yamlFiles);
    } else if (item.endsWith('.yml') || item.endsWith('.yaml')) {
      yamlFiles.push(fullPath);
    }
  }
  return yamlFiles;
}

function run() {
  console.log('--- Fixing YAML Frontmatter ---');
  if (!fs.existsSync(AFFILIATES_DIR)) {
    console.log('No affiliates directory found.');
    return;
  }
  
  const yamlFiles = walk(AFFILIATES_DIR);
  
  for (const filePath of yamlFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 如果文件以 --- 开头，说明有不当添加的 frontmatter
    if (content.startsWith('---')) {
      const parsed = matter(content);
      
      // Original YAML data is in parsed.content because it wasn't parsed as frontmatter originally
      if (parsed.content && parsed.content.trim().length > 0) {
        fs.writeFileSync(filePath, parsed.content.trim() + '\n', 'utf-8');
        console.log(`Fixed: ${filePath}`);
      }
    }
  }

  console.log('--- Fixing YAML Frontmatter Completed ---');
}

run();
