// your code here
const urlForm = document.getElementById("urlForm");
    const urlText = document.getElementById("url");
    
    urlForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = encodeURIComponent(document.getElementById("name").value);
      const year = encodeURIComponent(document.getElementById("year").value);
      
      const queryString = `?name=${name}&year=${year}`;
      const updatedURL = `https://localhost:8080/${queryString}`;
      
      urlText.textContent = updatedURL;
    });