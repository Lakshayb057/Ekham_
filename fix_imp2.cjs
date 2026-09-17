const fs = require('fs');
let w = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');
w = w.replace("} from 'lucide-react';\n\\n  Megaphone,", "  Megaphone,");
fs.writeFileSync('src/components/ProblemSection.tsx', w);
