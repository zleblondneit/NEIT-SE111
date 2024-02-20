var hourpay = prompt ("what your hourly pay?: ")
var hourworked = prompt ("How many hours did you work? ")
var wage = hourpay * hourworked
var twage = wage * .2
var fwage = wage - twage
//== Log for output ==//
alert(`Total pay is: $\n${wage}\nAmount taxed is: $\n${twage}\nAmount after taxes taken out: $\n${fwage}`);