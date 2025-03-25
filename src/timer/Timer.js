import React from 'react';
import './Timer.css'


const Timer = () => {
    const [dia, setDia] = React.useState(0)
    const [hora, setHora] = React.useState(0)
    const [min, setMin] = React.useState(0)


    React.useEffect(()=>{
        let fecha_actual = new Date()
        let fecha_boda = new Date(2025,3, 5,18, 30);

        let fechatest = fecha_boda - fecha_actual

        let dias_faltantes = parseInt(fechatest / 86400000)
        let horas_faltantes = ((fechatest / 86400000) % 1) * 24

        let min_faltantes = (horas_faltantes % 1) * 60

        /*let seg_faltantes = (min_faltantes % 1) * 60*/

        setDia(dias_faltantes)
        setHora(parseInt(horas_faltantes))
        setMin(parseInt(min_faltantes))


    }, [])
    return (
        <>
            <div className={'centrar-content-vertical'}>
                <div className={'timer-container'}>
                    <p className={'timer-cuenta'}>Cuenta Regresiva</p>
                    <div className={'div-timer'}>
                        <p className={'timer-numeros'}>{dia}</p>
                        <p className={'timer-numeros'}>{hora}</p>
                        <p className={'timer-numeros'}>{min}</p>
                        <p className={'timer-medidas'}>Días</p>
                        <p className={'timer-medidas'}>Horas</p>
                        <p className={'timer-medidas'}>Min</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Timer;