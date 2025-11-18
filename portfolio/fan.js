// fan.js
document.getElementById('sendFanMail').addEventListener('click', function () {
  const name = document.getElementById('fanName').value.trim() || "My Secret Admirer";
  const message = document.getElementById('fanMessage').value.trim() || "...loves Chandler very much";

  alert(`Message sent!\n\nDear ${name},\n\nChandler has received your message and is currently blushing in his apartment.\n\n"${message}"\n\nHe says: "Could I BE any more flattered?"\n\nHe will definitely reply... eventually.`);

  document.querySelector('.contact-form').reset();
});