const path = require('path');
const express = require('express');
const app = express();
const public_path = path.join(__dirname, '..', 'public');

app.use(express.static(public_path));

app.get('*', (req, res) => {
	res.sendFile(path.join(public_path, 'index.html'));
});

app.listen(3000, () => {
	console.log('Server is up');
});
