// Div 
let box = document.querySelector('.box');
let area_div = document.querySelector('.area');
let area = document.querySelector('#text_area');
let style_box = document.querySelector('.change_style');
let square = document.querySelector('.square');
let square_bg = document.querySelector('.square_bg');
let choose = document.querySelector('.choose');
let cr_element = document.querySelector('.create_element');
let cr_list = document.querySelector('.create_list')
// Square-colors
let red = document.querySelector('.red');
let orange = document.querySelector('.orange');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let aqua = document.querySelector('.aqua');
let blue = document.querySelector('.blue');
let pink = document.querySelector('.pink');
let fiolet = document.querySelector('.fiolet');
let grey = document.querySelector('.grey');
//  Square-colors_bg
let red_bg = document.querySelector('.red_bg');
let orange_bg = document.querySelector('.orange_bg');
let yellow_bg = document.querySelector('.yellow_bg');
let green_bg = document.querySelector('.green_bg');
let aqua_bg = document.querySelector('.aqua_bg');
let blue_bg = document.querySelector('.blue_bg');
let pink_bg = document.querySelector('.pink_bg');
let fiolet_bg = document.querySelector('.fiolet_bg');
let grey_bg = document.querySelector('.grey_bg');
// p
let p = document.getElementsByClassName('paragraf');
// Button
let btn_edit = document.querySelector('.btn-warning');
let btn_style = document.querySelector('.btn-primary')
let btn_save = document.querySelector('.btn-success');
let btn_group_second = document.querySelector('.text_btt');
let btn_text_color = document.querySelector('.btn_text_color');
let btn_bg_color = document.querySelector('.btn_bg_color');
let btn_add = document.querySelector('.btn-danger');
let btn_group_first = document.querySelector('.butt');
let btn_creat = document.querySelector('.btn-info');
let btn_cr_list = document.querySelector('.btn-dark')
// Radio
let radio_text = document.getElementsByName('customRadioInline1');
let radio_table = document.getElementsByName('customRadioInline2')
// Checkbox
let ch_bold = document.querySelector('#customCheck1');
let ch_italic = document.querySelector('#customCheck2');
// Form
let f1 = document.forms['f1'];
let f2 = document.forms['f2'];
// Select
let select = document.querySelector('#inputGroupSelect01');
let select_color_table = document.getElementById('inputGroupSelect03');
let select_type_brd = document.getElementById('inputGroupSelect02');
let select_type_list = document.getElementById('inputGroupSelect04');
// Input
let input_TD = document.querySelector('.input_TD');
let input_TR = document.querySelector('.input_TR');
let input_wd_TD = document.querySelector('.input_wd_TD');
let input_hg_TD = document.querySelector('.input_hg_TD');
let input_brd = document.querySelector('.input_brd');
let input_cn_li = document.querySelector('.input_cn_li')


console.log(select)
console.log(input_wd_TD)
console.log(input_hg_TD)
console.log(input_TR)
console.log(input_brd);
console.log(select_color_table);
console.log(select_type_brd);


btn_edit.addEventListener('click',function(){

    area.value = box.innerHTML;
    area.style.display = 'flex';
    btn_group_second.style.display = 'block';
    style_box.style.display = 'none';
})


btn_save.addEventListener('click',function(){
    
    box.innerHTML = area.value;
    area.style.display = 'none';
    btn_group_second.style.display = 'none';
})


btn_style.addEventListener('click',function(){
    style_box.style.display = 'block';
    area.style.display = 'none';
    btn_group_second.style.display = 'none';
})


f1.addEventListener('change',function(){
    for (let i = 0; i < radio_text.length; i++){
        if (radio_text[i].checked==true){
            for(j=0; j < p.length; j++)
            p[j].style.fontSize = radio_text[i].value + 'px';
            break;
            }
        }
})


select.addEventListener('change',function(){
    for(let i = 0; i < p.length; i++){
    p[i].style.fontFamily = this.value;
    }
    console.log(select)
})


btn_text_color.addEventListener('click',function(){

    square.style.display = 'flex';
    square_bg.style.display = 'none'

})


btn_bg_color.addEventListener('click',function(){

    square_bg.style.display = 'flex';
    square.style.display = 'none';

})


ch_bold.addEventListener('click',function(){

    console.log(this.value)
    if(ch_bold.checked){
        for(let i = 0; i< p.length;i++){
            p[i].style.fontWeight = this.value;
        }
    }else {
        for(let i = 0; i< p.length;i++){
            p[i].style.fontWeight = '';
    }
    }
})

ch_italic.addEventListener('click',function(){

    console.log(this.value)
    if(ch_italic.checked){
        for(let i = 0; i< p.length;i++){
            p[i].style.fontStyle = this.value;
        }
    }else {
        for(let i = 0; i< p.length;i++){
            p[i].style.fontStyle = '';
    }
    }
})



btn_add.addEventListener('click',function(){

    choose.style.display = 'block';
    btn_group_first.style.display = 'none'
    area_div.style.display = 'none'
    box.style.display = 'none'
})


f2.addEventListener('change', function(){

    for(let i=0; i<radio_table.length;i++){
        if(radio_table[0].checked){
            cr_element.style.display = 'block';
            cr_list.style.display = 'none';           
        }
        else if(radio_table[1].checked){
            cr_list.style.display = 'block';
            cr_element.style.display = 'none';
            
        }
    }

})

btn_creat.addEventListener('click', function(){

    
    btn_group_first.style.display = 'flex'
    area_div.style.display = 'flex'
    box.style.display = 'block'
    choose.style.display = 'none';
    console.log(area.value);
    area.value += `<table style="margin:20px;">`
        for(i=1;i<=input_TR.value;i++) {
            area.value += `<tr>`
        for (let j = 1; j <= input_TD.value; j++) {
            area.value += `<td style="border:${input_brd.value}px ${select_type_brd.value} ${select_color_table.value}; width:${input_wd_TD.value}px; height:${input_hg_TD.value}px;">T</td>`
        }
        area.value +=`</tr>`
        }
        area.value += `</table>`
        input_brd.value = '';
        input_TR.value = '';
        input_TD.value = '';
        input_wd_TD.value = '';
        input_hg_TD.value = '';
    
})

btn_cr_list.addEventListener('click',function(){

    btn_group_first.style.display = 'flex'
    area_div.style.display = 'flex'
    box.style.display = 'block'
    choose.style.display = 'none';
    area.value += ` <ul>`
        for(i=1;i<=input_cn_li.value;i++) {
            area.value +=`<li style="list-style: ${select_type_list.value}">list ${[i]}</li>`
        }
        area.value +=` </ul>`;
        input_cn_li.value = ''
})


 













// Square_color_text


red.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'red';
        }
        square.style.display = 'none'
})

yellow.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'yellow';
        }
        square.style.display = 'none'
})

orange.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'orange';
        }
        square.style.display = 'none'
})

green.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'green';
        }
        square.style.display = 'none'
})

aqua.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'aqua';
        }
        square.style.display = 'none'
})

blue.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'blue';
        }
        square.style.display = 'none'
})

pink.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'darkorchid';
        }
        square.style.display = 'none'
})

fiolet.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'purple';
        }
        square.style.display = 'none'
})

grey.addEventListener('click',function(){
    for(let i = 0; i < p.length; i++){
        p[i].style.color = 'grey';
        }
        square.style.display = 'none'
})



// Square_colors_bg

red_bg.addEventListener('click',function(){
        box.style.backgroundColor = 'red';
        square_bg.style.display = 'none'
})

orange_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'orange';
    square_bg.style.display = 'none'
})

yellow_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'yellow';
    square_bg.style.display = 'none'
})

green_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'green';
    square_bg.style.display = 'none'
})

aqua_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'aqua';
    square_bg.style.display = 'none'
})

blue_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'blue';
    square_bg.style.display = 'none'
})

pink_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'darkorchid';
    square_bg.style.display = 'none'
})

fiolet_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'purple';
    square_bg.style.display = 'none'
})

grey_bg.addEventListener('click',function(){
    box.style.backgroundColor = 'grey';
    square_bg.style.display = 'none'
})
