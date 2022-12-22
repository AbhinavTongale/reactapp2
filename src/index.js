
import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import "./index.css";

ReactDOM.render( 
<>
  <Card 
    imgsrc = "images.jpg"
    title = " Youtube movies"
    sname = "Dhamaka"
    link = "https://youtube.com/watch?v=qRESnWFYYho&feature=shares"
  /> 
  <Card 
    imgsrc = "Thackeray.jpg"
    title = " Youtube movies"
    sname = "Thackery"
    link = "https://youtube.com/watch?v=Qqpl_sAcQF8&feature=shares"
  />
  <Card 
    imgsrc = "Godse.jpg"
    title = " Youtube movies"
    sname = "Godse"
    link = "https://youtube.com/watch?v=d0coKw8nheQ&feature=shares"

  />
  <Card 
    imgsrc = "sher.jpg"
    title = " Youtube movies"
    sname = "SherShivray"
    link = "https://www.youtube.com/watch?v=MJUxhDj9fjw"

  />
</>, 
document.getElementById("root"));