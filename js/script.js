const buttonShortener = document.querySelector("#btn-shortener");
buttonShortener.addEventListener("click", function () {
  const url = document.querySelector("#url");
  fetch("https://rama-shortner-backend.herokuapp.com/url/short", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url.value,
    }),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#result").value = data.data["key"];
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function btnCopy() {
  const copyText = document.querySelector("#result");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
}
