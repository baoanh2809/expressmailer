
for(let i =1; i < 30; i++){
  let time = document.getElementById('time'+i)
  if(time != null){
    console.log(i)
    const timeDate = document.getElementById('time'+i).getAttribute('data-date');
    console.log(timeDate)
    const countDownDate = new Date(timeDate);   
    let hour = countDownDate.getHours();
    let minute = countDownDate.getMinutes(); 
    let day = countDownDate.getDate();
    let month = countDownDate.getMonth() + 1; 
    let year = countDownDate.getFullYear();
    document.getElementById('time'+i).innerHTML = hour + ':' + minute + ' ' + day + "/" + month + "/" + year;
    // var timeSend = hour + ':' + minute + ' ' + day + "/" + month + "/" + year;  
  }
}

// In ra giá trị giờ và phút
for(let i = 1; i < 30; i++){
var checkbox = document.getElementById('checkBox'+i);
  if(checkbox != null){
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // do this
      checkbox.setAttribute ("value", "true")
    } else {
          // do that
          checkbox.setAttribute ("value", "false")
    }
  })
  }

}