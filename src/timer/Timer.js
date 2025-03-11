import React from 'react';



const Timer = () => {
    const [dia, setDia] = React.useState(0)
    const [hora, setHora] = React.useState(0)


    React.useEffect(()=>{
        let fecha_actual = new Date()
        let fecha_boda = new Date(2025,3, 5,19);

        let fechatest = fecha_boda - fecha_actual

        let dias_faltantes = parseInt(fechatest / 86400000)
        let horas_faltantes = ((fechatest / 86400000) % 1) * 24

        /*console.log('------------>', dias_faltantes)
        console.log('------------>', horas_faltantes)*/

        setDia(dias_faltantes)
        setHora(parseInt(horas_faltantes))


    }, [])
    return (
        <>
            Faltan {dia} dias
            <br/>
            Faltan {hora} horas
            {/*{console.log(fecha_actual.toString())}*/}
        </>
    );
};

export default Timer;