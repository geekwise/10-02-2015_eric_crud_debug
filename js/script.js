var current_element;

var create_button;
var update_button;
var read_button;
var delete_button;

var buttons;
var inputs;


var ordered_list;
var list_items;
var current_list_item;

var old_color;
var new_color;
var input_text_colors = new Array;



var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];


function update_list_elements(){
    list_items = document.getElementsByTagName('li');
}



function random_color(){
        return list_of_colors[
            Math.floor(
                Math.random()*list_of_colors.length)];

}

function attach_element(element_name,element_parent_id){
    current_element = document.createElement(element_name);
    document.getElementById(element_parent_id).appendChild(current_element);
}


function add_listener(element_name,event_type,listener_function){
    element_name.addEventListener(event_type,listener_function);
}

function log(message_to_log){
    console.log(message_to_log);
}





document.addEventListener('DOMContentLoaded', function(){

create_button = document.getElementById('create');
read_button = document.getElementById('read');
update_button = document.getElementById('update');
delete_button = document.getElementById('delete');
    
buttons = document.getElementsByTagName('button');    
inputs = document.getElementsByTagName('input');
    
attach_element('ol','content_container');
current_element.setAttribute('id','ordered_list');

update_list_elements();
    
    
add_listener(document.getElementById('create'),'click',function(){

        var button_name = new String;
        var input_name = '_box';
        var current_input;
        
        button_name = this.textContent;
        button_name = button_name.toLowerCase(button_name);
        
        input_name = button_name+input_name;
        current_input = document.getElementById(input_name);
                
        if(current_input.value.length < 1){
            attach_element('li','ordered_list');
            update_list_elements();
            
            current_element.textContent = random_color();
            
            
            current_element.style.backgroundColor = current_element.textContent;
            current_element.addEventListener('dblclick',function(){
                this.remove();
            });
                
                
        }else if(current_input.value.length > 1){
            
            attach_element('li','ordered_list');
            update_list_elements();
            
            current_element.textContent = document.getElementById(input_name).value;
            current_element.style.backgroundColor = current_element.textContent;
            current_element.addEventListener('dblclick',function(){
                this.remove();
            });
            
            document.getElementById(input_name).value = null;
        };


});

    
    
add_listener(document.getElementById('read'),'click',function(){

        var button_name = new String;
        var input_name = '_box';
        var current_input;
        var input_text;
    
        button_name = this.textContent;
        button_name = button_name.toLowerCase(button_name);
        
        input_name = button_name+input_name;
        current_input = document.getElementById(input_name);
        input_text = String(current_input.value).toLowerCase();    
    
        if(input_text.match(/\,/) && input_text.length > 1){
            input_text_colors = input_text.split(',');
           
            for(var i=0;i<input_text_colors.length;i++){
                attach_element('li','ordered_list')
                current_element.textContent = input_text_colors[i];
                current_element.style.backgroundColor = input_text_colors[i];
                current_input.value = null;
            
            }
            
            
        };

});    
    
    
add_listener(document.getElementById('update'),'click',function(){

        var button_name = new String;
        var input_name = '_box';
        var current_input;
        var input_text;
    
        button_name = this.textContent;
        button_name = button_name.toLowerCase(button_name);
        
        input_name = button_name+input_name;
        current_input = document.getElementById(input_name);
        input_text = String(current_input.value).toLowerCase();    
    
        if(input_text.match(/\,/) && input_text.length > 1 && list_items.length > 0){
            input_text_colors = input_text.split(',');
            old_color = input_text_colors[0];
            new_color = input_text_colors[1];
           
            current_input.value = null;

            for(var i=0;i<list_items.length;i++){
                if(list_items[i].textContent === String(old_color)){
                    list_items[i].textContent = new_color;
                    list_items[i].style.backgroundColor = new_color;
                    update_list_elements();
                    
                }
            }
            
        };

});
       
        
    
    
    

add_listener(document.getElementById('delete'),'click',function(){

        var button_name = new String;
        var input_name = '_box';
        var current_input;
        var input_text;
    
        button_name = this.textContent;
        button_name = button_name.toLowerCase(button_name);
        
        input_name = button_name+input_name;
        current_input = document.getElementById(input_name);
        input_text = current_input.value;    
    
        if(input_text.match(/^[0-9]+$/) && list_items.length > 0){
           list_items[input_text - 1].remove();
           current_input.value = null;
        };


});
       
    
    


    
    
});