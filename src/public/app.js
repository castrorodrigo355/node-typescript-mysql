document.addEventListener("DOMContentLoaded", async () => {
  try {
    const url = "http://localhost:3000/api/v1/usersUrl";
    const res = await fetch(url);
    console.log("RES: ", res);
    const response = await res.json();
    console.log("RESPONSE: ", response);
  } catch (error) {
    console.log(error);
  }
});
