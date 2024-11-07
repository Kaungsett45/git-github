import { useState, useEffect } from "react";

function getData() {
 console.log("Getting data...");
 return "data";
}

export default function App() {

 const [data, setData] = useState("");

 useEffect(() => {
    const items = getData();
    setData(items);
 }, []);

 return <div>
 <h1>Data: {data}</h1>
 </div>;

}