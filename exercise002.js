import fetch from "node-fetch";

const jsonTypicode = "https://1jsonplaceholder.typicode.com/todos/1";

const getfetchData = async (apiEndPoint) => {
  try
  {
    let response =await fetch(apiEndPoint);
    let json = await response.json();
    console.log(json);
  } catch(error) {
    console.log(error)
  }
}

getfetchData(jsonTypicode);
