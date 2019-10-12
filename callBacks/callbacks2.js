$(() => {
  let output = $("#message"),
  btn = $("#btn")

  const users = [
    {name: 'Jason', last: 'Miller', position: 'Data Analyst'},
    {name: 'Lisa', last: 'Washington', position: 'Lead Reach Specialist'},
    {name: 'Jahar', last: 'Mulepelo', position: 'CTO'},
    {name: 'Vincent', last: 'Valejuel', position: 'Network Engineer'},
    {name: 'Paul', last: 'Larsen', position: 'CFO'},
    {name: 'Jahaziel', last: 'Vazquez', position: 'CEO'},
    {name: 'Kaitie', last: 'Waters', position: 'Social Media Consultant'},
    {name: 'Hebel', last: 'Zek', position: 'Lead Marketing Specialist'}
  ]

  let displayText = (text) => {
    $("#message").text = text;
  }


  let userFetch = (...usr) => {
    displayText(usr)
  }

  let userReturn = () => {
    userFetch(user => {
      user = users;
    })
  }

  $("#btn").click(() => {
    userReturn()
  })



})//End of jQuery
