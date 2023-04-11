const express = require("express");
var cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());

const projects = require("./Data/projects.json");
const leadership = require("./Data/leadership.json");
const certificates = require("./Data/certificates.json");
const acheivements = require("./Data/acheivements.json");
const works = require("./Data/works.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/projects", (req, res) => {
  res.send(projects);
});
app.get("/project/:id", (req, res) => {
  const id = req.params.id;
  const selectedProject = projects.find((projectItem) => projectItem.id === id);
  res.send(selectedProject);
});

app.get("/leadership", (req, res) => {
  res.send(leadership);
});

app.get("/leadership/:id", (req, res) => {
  const id = req.params.id;
  const selectedLeadership = leadership.find(
    (leaderShipItem) => leaderShipItem.id === id
  );
  res.send(selectedLeadership);
});

app.get("/certificates", (req, res) => {
  res.send(certificates);
});

app.get("/certificate/:id", (req, res) => {
  const id = req.params.id;
  const selectedCertificate = certificates.find(
    (certificateItem) => certificateItem.id === id
  );
  res.send(selectedCertificate);
});

app.get("/acheivements", (req, res) => {
  res.send(acheivements);
});

app.get("/acheivement/:id", (req, res) => {
  const id = req.params.id;
  const selectedAcheivements = acheivements.find(
    (acheivementItem) => acheivementItem.id === id
  );
  res.send(selectedAcheivements);
});

app.get("/works", (req, res) => {
  res.send(works);
});

app.get("/work/:id", (req, res) => {
  const id = req.params.id;
  const selectedWorks = works.find((workItem) => workItem.id === id);
  res.send(selectedWorks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
