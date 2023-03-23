function calculate() {
  var sessionalOM = document.getElementById("sessional_om").value;
  var sessionalTM = document.getElementById("sessional_tm").value;
  var sessionalCal = ((sessionalOM / sessionalTM) * 100 * 25) / 100;

  console.log(sessionalCal);

  var midOM = document.getElementById("mid_om").value;
  var midTM = document.getElementById("mid_tm").value;
  var midCal = ((midOM / midTM) * 100 * 35) / 100;

  console.log(midCal);

  var finalOM = document.getElementById("final_om").value;
  var finalTM = document.getElementById("final_tm").value;
  var finalCal = ((finalOM / finalTM) * 100 * 40) / 100;

  console.log(finalCal);

  var totalCal = sessionalCal + midCal + finalCal;

  var remarks;

  if (totalCal >= 85) {
    remarks = "Theetay Bus Kar Dy";
  } else if (totalCal >= 80 && totalCal < 85) {
    remarks = "Itnay Marks Ly Ka Kaha Jao Gy";
  } else if (totalCal >= 75 && totalCal < 79) {
    remarks = "Zindagi Ho Tu Aesi";
  } else if (totalCal >= 70 && totalCal < 75) {
    remarks = "Tension Na Lo, Itnay Ma Viyah Ho Jaata Hai";
  } else if (totalCal >= 65 && totalCal < 70) {
    remarks = "Beta Tumharay Buray Din Shuru Hain";
  } else if (totalCal >= 60 && totalCal < 65) {
    remarks = "Padhai Likhai Mai Dhyaan Lagao IAS YAS Bano";
  } else if (totalCal >= 55 && totalCal < 60) {
    remarks = "Larki ka Chakal Babu Bhaiya";
  } else if (totalCal >= 50 && totalCal < 55) {
    remarks =
      "Museebat Taan Marda Te Paindi Rehndi Ae Dabi Na Tu Duniya Sawaad Laindi Ae";
  } else if (totalCal < 50) {
    remarks = "";
  }

  document.getElementById("text").innerHTML =
    totalCal.toFixed(2) + "% !!!" + " " + remarks;
}
