function btnCopy() {
  const copyText = document.getElementById("result");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
}
