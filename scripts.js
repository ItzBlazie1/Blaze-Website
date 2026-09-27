// Function to copy Server IP to clipboard
function copyIP() {
  const ip = document.getElementById("serverIP").innerText;
  const port = document.getElementById("serverPort").innerText;
  const fullAddress = `${ip}:${port}`;

  navigator.clipboard.writeText(fullAddress).then(() => {
    const notice = document.getElementById("copyNotice");
    notice.style.display = "block";
    
    // Hide notice after 3 seconds
    setTimeout(() => {
      notice.style.display = "none";
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
