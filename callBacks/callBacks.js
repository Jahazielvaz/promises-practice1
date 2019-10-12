$(() => {
  let display = $("#output");
  let button = $("#btn");

  const setText = (text) => {
    $(display).text(text)
  }

  const checkAuth = (cb) => {
    setText('Checking Auth...')
    setTimeout(() => {
      cb(true)
    }, 2000)
  }

  const checkUser = (usr) => {
    setText('Checking User...')
    setTimeout(() => {
      usr(true)
    }, 2000)
  }



  $(button).on('click', () => {
    checkAuth((auth) => {
      if(auth){
        checkUser((us) => {
          if(us){
            let user = {
              username: 'Jazzy'
            }

            setText(user.username[''])
          }
        })
      }
    })
  })



}) //End of jQuery
