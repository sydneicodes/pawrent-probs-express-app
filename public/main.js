var submit = document.getElementsByClassName('btn')
var edit = document.getElementsByClassName("fa-pencil");
var trash = document.getElementsByClassName("fa-trash");

Array.from(edit).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].innerText
        const msg = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText
        const input = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].value
        console.log(input)

        fetch('update', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name, 
            msg,
            input
          })
        }).then(function (response) {
          window.location.reload()
        })

    });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].innerText
        const msg = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
