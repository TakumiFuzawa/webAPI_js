const express = require('express');
const app = express();
const port = 3000;
let booklog = {};

app.use(express.json());

//JSONを記録
app.post('/booklog', (req, res) => {
    booklog = req.body

    if (!(booklog.name && booklog.text)) {
        return res.json({
            "OK": false,
            "error": "invalid parameter"
        });
    }

    res.json({
        "OK": true,
        "booklog":booklog
    })
});

//一覧の取得
app.get("/booklog", (req, res) => {
    res.json({
        "OK": true,
        "booklog": [
            booklog
        ]
    })
});

//サーバーの起動確認
app.listen(port, () => {
    console.log('App listening at http://localhost:${port}')
});
