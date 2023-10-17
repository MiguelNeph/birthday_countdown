const dataDoEvento = new Date("Nov 18, 2023");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento /diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs)/horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs)/ 1000);


    document.getElementById('countdown').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('countdown').innerHTML = 'Expired Event';
    }

},1000);