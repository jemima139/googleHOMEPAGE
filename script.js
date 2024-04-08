function popAlert() {
    let search = document.querySelector('#searchText').value;
  
    if (search) {
      alert(`You searched for: ${search}`);
      window.location.href = 'https://www.google.com/search?q=' + search;
      //The alert(search) is a function that will pop up a message box with the search query.)
    }
  }