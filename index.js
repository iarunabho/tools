let expression = `Executive (EV)
JA
Asst Editor/Spl Corr (JA)
CJ
CEO Group (A1)
Cp Editor/Corr (JJ)
Dy General Manager (CS)
CM
Sr Assistant Editor (CJ)
Retainers (TA)
Director (AG)
ED
Sr Cp Editor/Sr Corr (JG)
TA
AA
General Manager (CP)
Chief Manager (CY)
Vice President (CM)
Manager (EG)
Assistant General Manager (CV)
Associate General Manager (CQ)
Ch Cp Editor/Pr Corr (JD)
CY
Senior Manager (ED)
CO
Deputy Director (AJ)
Associate Editor (CD)
Asst Mgr/ Sr Engnr (EM)
Assistant Vice President (CO)
Deputy Manager (EJ)
EG
CA
ES
Senior Editor (CG)
Officer (ES)
Associate Vice President (CN)
Deputy Chief Manager (EA)
Sr Officer/ Engineer (EP)
Executive Editor (AA)`;


// console.log(expression.length);
let finalResult = '';
for (let i = 0; i < expression.length; i++){
     // Ad
     if (expression[i] != '(' && expression[i] != ')' && expression[i] != '/'){
         finalResult += expression[i];
     }
     else{
        finalResult += '\\';
        finalResult += expression[i];
     }
        
}

function regex_start( string ) {
    return string.replace(/^/gm,"(")
}
function regex_end( string ) {
    return string.replace(/$/gm,")")
}
function addBracket(){
    let string = finalResult;
    const firstIteration = regex_start(string);
    const secondIteration = regex_end(firstIteration);
    console.log(secondIteration);
}

addBracket();
// process.stdout.write(finalResult);

function remove_linebreaks( str ) { 
    return str.replace( /[\r\n]+/gm, "" ); 
} 
  
function removeNewLines() { 
    var sample_str = finalResult;
      
    console.time();  
    
    var final = remove_linebreaks(sample_str);
    console.log(final);

} 
removeNewLines();