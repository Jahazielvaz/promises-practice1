$(() => {
  let answerPromise = new Promise((resolve, reject) => {
    if($('#input1').val() === 'yes'){
      let myOutput = $('#output1').html('<img src="https://i.ytimg.com/vi/yXr3z7fOa7A/hqdefault.jpg"></img>')

      resolve(myOutput)
    } else {
      let accessDenied = new Error('Access Denied')

      reject(accessDenied)
    }

  })

  let promiseResolution = () => {
    answerPromise
    .then((res) => {
      $('#output1').text('It worked')
      $('#output1').html('<img src="https://i.ytimg.com/vi/yXr3z7fOa7A/hqdefault.jpg"></img>')
    })
    .catch((err) => {
      $('#output1').text('Program Broke')
      console.log(err.message)
    })
  }

  promiseResolution()



}) // End of jQuery
