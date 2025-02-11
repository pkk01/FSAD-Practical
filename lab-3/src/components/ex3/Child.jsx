export default function Child(props){ 
    function changeFun(){ 
        var name = document.getElementById("idnamme").value; 
        var salary = document.getElementById("t").value; 
        var location = document.getElementById("b").value; 
        props.changeUser(name, salary, location); 
    } 
    return( 
        <div> 
            Name:<input type="text" id="idnamme" /> 
            <br/> 
            Salary:<input type="text" id="t" /> 
            <br/> 
            Location:<input type="text" id="b" /> 
            <br/> 
            <button onClick={changeFun}>Update User</button> 
            <br/> 
            {props.a} - {props.b} 
        </div> 
    ) 
}