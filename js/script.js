const buttonShortener = document.querySelector("#btn-shortener");
buttonShortener.addEventListener("click", function () {
  const url = document.querySelector("#url");
  fetch("https://rama-shortner-backend.herokuapp.com/url/short", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(url),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").value = data.data["key"];
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function btnCopy() {
  const copyText = document.getElementById("result");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
}
