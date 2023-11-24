// Sentence 
const jobTitles = ["Student", "Designer", "Developer", "Writer", "Artist", "Explorer"];
    let index = 0;
 function changeJobTitle() {
      const jobTitleElement = document.getElementById('dynamicJob');
      jobTitleElement.innerHTML = jobTitles[index];
      index = (index + 1) % jobTitles.length;
    }
    setInterval(changeJobTitle, 400);
// Resume
document.getElementById("viewResumeButton").addEventListener("click", function() {
  document.getElementById("resumeImage").style.display = "block";
  document.getElementById("viewResumeButton").style.display = "none";
  document.getElementById("closeResumeButton").style.display = "inline-block";
});

document.getElementById("closeResumeButton").addEventListener("click", function() {
  document.getElementById("resumeImage").style.display = "none";
  document.getElementById("viewResumeButton").style.display = "inline-block";
  document.getElementById("closeResumeButton").style.display = "none";
});