var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')

function button1() {
    btn1.style.display = 'block'
    btn1.style.border = ' 0px 0px 10px 10px'
    card2.style.height = '331px'
    card3.style.height = '331px'


}
function nobutton1() {
    btn1.style.display = 'none '


}
// ///////////
function button2() {
    btn2.style.display = 'block'
    btn2.style.border = ' 0px 0px 10px 10px'

    card1.style.height = '331px'
    card3.style.height = '331px'

}
function nobutton2() {
    btn2.style.display = 'none '

}
// /////////////////////
function button3() {

    btn3.style.display = 'block'
    btn3.style.border = ' 0px 0px 10px 10px'

    card2.style.height = '331px'
    card1.style.height = '331px'

}
function nobutton3() {

    btn3.style.display = 'none '

}