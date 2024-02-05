const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');


const certified_steps = addKeyword(['1']).addAnswer(
    [
        '*Primer paso*. Cancelar al banco Davivienda ahorros 126670071672 -> $12000',
        '*Segundo Paso*. Envia tu soporte de Pago al whatsapp 3176641476, apellidos, grado del estudiante y nombre del estudiante',
        '*Tercer paso*. En 5 días hábiles se envía por este mismo medio\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
    
);

const admision = addKeyword(['2']).addAnswer(
    [
        '*Primer paso*. Consignación al banco por $80.000 (Formulario de inscripción)',
        '*Segundo Paso*. Reclamar o solicitar el formulario de Inscripción en la secretaría, documentos anexos',
        '*Tercer paso*. En 5 días hábiles se envía por este mismo medio\n',
        '*Nota*: Es importante tener en cuenta que adquirir el formulario no asegura el cupo al aspirante; todo depende del resultado de las pruebas académicas.',
        'Las entrevistas se agendarán luego del resultado de la prueba académica\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const commissary_costs = addKeyword(['3']).addAnswer(
    [

        '- Costos de pensión, matrícula y otros soportes de pago. Comunícate con el área de economato al 3184395020 o al 3387819 extensión 114 o 115\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const vacant = addKeyword(['4']).addAnswer(
    [

        'Si quieres pertenecer a nuestro equipo de trabajo comunicate al 3387829 extensión 104 o 115\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const information_academic = addKeyword(['5']).addAnswer(
    [

        '*Coordinadora academica* -  Cel: 3172737832 - 3387829 extensión 102\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const Wellbeing_coexistence = addKeyword(['6']).addAnswer(
    [

        '*Bienestar y Convivencia* -  Cel: 31524424827 - 3387829 extensión 103\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const transport = addKeyword(['7']).addAnswer(
    [

        '*John Faber* -  Cel:  3127765068\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const restaurant = addKeyword(['8']).addAnswer(
    [

        '*Alexander* -  Cel:  3219930474\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const users_password = addKeyword(['9']).addAnswer(
    [

        '*Educacity* -  comunicate al 3176641476 - 3387829\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const emails_institute = addKeyword(['a']).addAnswer(
    [

        '*Educacity* -  escribe tu solicitud como Claudia\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const class_extracorriculares = addKeyword(['b']).addAnswer(
    [

        '*Bibiena*: 3387829 extesnión 114',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const info_comunion = addKeyword(['c']).addAnswer(
    [

        'Te envia la confirmación de solicitud a tu correo',
        '*Correo: biblioteca@bethlemitaspereira.edu.co - c.pastoral@bethlemitaspereira.edu.co*',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const exit_bot = addKeyword(['d', 'muchas gracias']).addAnswer([
    'Te agradecemos por utilizar nuestros servicios. Si en el futuro tienes más preguntas o necesitas asistencia, no dudes en contactarnos. ¡Que tengas un día excepcional!\n',
    'Si necesitas información, escribe *inicio*'
]);

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'inicio']).addAnswer([
    'Bienvenido al Colegio Bethlemitas. A continuación, te proporcionaremos información sobre nuestros servicios:',
]).addAnswer(
    [
        '*Digite el número o letra asociado a la acción que necesita realizar*',
        '1. Para solicitar los pasos de los certificados de los estudiantes.',
        '2. Para conocer los pasos de la admisión preinscrita.',
        '3. Para visualizar costos e información del economato.',
        '4. Para obtener un número y comunicarte con nuestro equipo de trabajo',
        '5. Para obtener el número de la coordinación académica',
        '6. Para obtener el número de bienestar y convivencia',
        '7. Para obtener el número del transporte',
        '8. Para obtener el número del restaurante',
        '9. Para obtener la información de los usuarios y sus contraseñas',
        'a. Para obtener información sobre correos institucionales',
        'b. Para obtener información sobre clases extracurriculares',
        'c. Para obtener información de cursos de la primera comunión',
        'd. Salir'
    ],
    null,
    null,
    [certified_steps, admision, commissary_costs, vacant, information_academic, Wellbeing_coexistence, transport, restaurant,
        users_password, emails_institute, class_extracorriculares, info_comunion, exit_bot]
);

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main();