const fs = require('fs');
let lines = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8').split('\n');
lines = [
  "import React from 'react';",
  "import { motion } from 'framer-motion';",
  "import {",
  "  ArrowRight,",
  "  Minus,",
  "  X as XIcon,",
  "  FileText,",
  "  Database,",
  "  BarChart3,",
  "  Unlink,",
  "  TrendingDown,",
  "  Megaphone,",
  "  CreditCard,",
  "  Table2,",
  "  Mail,",
  "  Heart,",
  "  Users,",
  "  FileCheck2,",
  "  Send,",
  "  LineChart",
  "} from 'lucide-react';",
  "",
  ...lines.slice(22)
];
fs.writeFileSync('src/components/ProblemSection.tsx', lines.join('\n'));
