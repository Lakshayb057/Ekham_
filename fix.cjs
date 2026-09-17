const fs = require('fs');
const path = require('path');
const dir = 'src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    
    // Fix type: 'spring' or type: "spring" to type: "spring" as any
    c = c.replace(/type:\s*['"]spring['"]/g, 'type: "spring" as any');
    // We might double replace if we run it multiple times, but let's be careful.
    c = c.replace(/type: "spring" as any as any/g, 'type: "spring" as any');
    
    fs.writeFileSync(p, c);
  }
});
console.log('Fixed framer motion types.');
