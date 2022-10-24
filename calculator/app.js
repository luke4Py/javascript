let disp_value="";

function display(variable){
    disp_value+=String(variable.value);
    document.getElementById('input_view').innerHTML = disp_value;
    };
    
function view(elem){
    display(elem);
};

function evaluator(){
    if (disp_value != ""){
    const finalResult = eval(disp_value)
    document.getElementById('input_view').innerHTML = finalResult;
    disp_value=""}
};

function backspace(){
    disp_value = disp_value.slice(0,-1);
    console.log(disp_value);
    document.getElementById('input_view').innerHTML = disp_value;
}

function aclear(){
    disp_value = ""
    document.getElementById('input_view').innerHTML = disp_value;
}

