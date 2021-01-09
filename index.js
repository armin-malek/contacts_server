const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function getjson() {
  return `
    {
        "data": [
          {
            "name": "علی فریدی",
            "number": "09142582558"
          },
          {
            "name": "حسن مرادی",
            "number": "09141456325"
          },
          {
            "name": "قربان مددی",
            "number": "09932541236"
          },
          {
            "name": "حسن کوهی",
            "number": "09931475682"
          },
          {
            "name": "مهدی قالی باف",
            "number": "09142586748"
          },
          {
            "name": "اکبر مرادیان",
            "number": "09141478558"
          },
          {
            "name": "علی حسینی",
            "number": "09192545558"
          },
          {
            "name": "اشکان فرجی",
            "number": "09302563214"
          },
          {
            "name": "میرمحمود کاظمی",
            "number": "09122582558"
          },
          {
            "name": "امیر قربانلو",
            "number": "09801453484"
          },
          {
            "name": "داوود نیک بخت",
            "number": "09137894561"
          },
          {
            "name": "احمد خویشوند",
            "number": "09125687412"
          },
          {
            "name": "مراد خوش بخت",
            "number": "09335241687"
          },
          {
            "name": "علی حسام",
            "number": "09122582551"
          },
          {
            "name": "نیما نامجو",
            "number": "09352576324"
          },
          {
            "name": "ناشناس",
            "number": "0914xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          },
          {
            "name": "داده تکراری",
            "number": "0935xxxxxxxx"
          }
        ]
      }
    `;
}

app.get("/", (req, res) => {
  res.status(200).send(getjson());
});
app.listen(port, () =>
  console.log(`Contacts Server listening on port ${port}`)
);
