
document.addEventListener("click", function(e) {
  if(!e.target.classList.contains("submit")) {
    return;
  }

  var selection = document.getElementsByName('selection');
  var val;

  for (i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
      val = selection[i].value;
    }
  }

  browser.tabs.create({
    url: val
  });

  close();
});
