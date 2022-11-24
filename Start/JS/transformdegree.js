// Transformação de Celsius para Fahrenheit


// transform degree ('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
        
}
    //ideal Fahrenheit -> Celsius
    let updatedDegree = Number(degree.toUpperCase.replace("F", ""));
    let formula = (fahrenheit) => (F - 32) * 5/9
    let degreeSign = 'C'

    return formula(updatedDegree) + 'C'
}

try {
    
    console.log(transformDegree('50F'))

}   catch (error) {
    console.log(error.message || error)
    
}


//     const celsiusExists = C = (F-32) * 5/9
//     const FahrenheitExists = C = 9/5 + 32