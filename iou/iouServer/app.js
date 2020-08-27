const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
//const uuid = require("uuid");

let ious = [
  {
    iouid: "9781593275846",
    name: "James Tiller",
    debtor: "Henry Osz",
    amount: "400",
    due_date: "2020-12-14",
  },
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/iou", (req, res) => {
  const iou = req.body;

  // output the iou to the console for debuggsing
  console.log(iou);
  ious.push(iou);

  res.send("iou is added to the database");
});

app.get("/iou", (req, res) => {
  res.json(ious);
});

app.get("/iou/:iouid", (req, res) => {
  // reading iouid from the URL
  const iouid = req.params.iouid;

  // searching ious for the iouid
  for (let iou of ious) {
    if (iou.iouid === iouid) {
      res.json(iou);
      return;
    }
  }

  // sending 404 when not found something is a good practice
  res.status(404).send("iou not found");
});

app.delete("/iou/:iouid", (req, res) => {
  // reading iouid from the URL
  const iouid = req.params.iouid;

  // remove item from the ious array
  ious = ious.filter((i) => {
    if (i.iouid !== iouid) {
      return true;
    }

    return false;
  });

  // sending 404 when not found something is a good practice
  res.send("iou is deleted");
});

app.post("/iou/:iouid", (req, res) => {
  // reading iouid from the URL
  const iouid = req.params.iouid;
  const newiou = req.body;

  // remove item from the ious array
  for (let i = 0; i < ious.length; i++) {
    let iou = ious[i];

    if (iou.iouid === iouid) {
      ious[i] = newiou;
    }
  }

  // sending 404 when not found something is a good practice
  res.send("iou is edited");
});

app.listen(port, () =>
  console.log(`Hey Friend app listening on port ${port}!`)
);
