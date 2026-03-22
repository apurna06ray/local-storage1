document.addEventListener("DOMContentLoaded", function () {
  let noteArea = document.getElementById("note");


  chrome.storage.local.get(["note"], function (result) {
    if (result.note) {
      noteArea.value = result.note;
    }
  });

 
  document.querySelector("button").addEventListener("click", function () {
    let note = noteArea.value;
    chrome.storage.local.set({ note: note }, function () {
      alert("Note saved!");
    });
  });
});