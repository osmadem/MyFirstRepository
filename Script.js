

body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: darkgray;
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 20px;
    font-size: 24px;
}

.container {
    margin: 20px auto;
    width: 260px;
    background: #222; 
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    border: 1px solid black; 
}

input#num1 {
    width: 100%;
    height: 60px;
    font-size: 24px;
    text-align: right;
    padding: 10px;
    margin-bottom: 15px;
    border: none; 
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); 
}


div button {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    color: black;
    cursor: pointer;
}

    div button:hover {
        background-color: red;
    }

    div button:active {
        background-color: peru;
    }

button[onclick="borrar()"] {
    background-color: green;
}

button[onclick="resultadoFinal()"] {
    background-color: yellow;
    color: white;
}

button.boton-delete {
    background-color: red;
}


@media (max-width: 480px) {
   
    div button {
        width: 45px; 
        height: 45px;
        font-size: 14px;
    }

    input#num1 {
        font-size: 20px;
        height: 50px;
    }


    .container {
        width: 90%; 
    }

    h1 {
        font-size: 20px;
    }
}

