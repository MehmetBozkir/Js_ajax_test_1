var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
xhr.open('GET', 'detail.json', true);
xhr.send();

