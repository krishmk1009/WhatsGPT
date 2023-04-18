import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static('dist'));

app.get('*', (req, res) => {
    const filePath = path.resolve(__dirname, 'public', 'page.html');
    res.sendFile(filePath);
    
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
