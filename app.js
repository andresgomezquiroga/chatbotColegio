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

const information_academic = addKeyword(['5']).addAnswer([
    '*Coordinadora Académica*',
    'Celular: 3172737832',
    'Extensión: 102',
    '',
    '*Bienestar y Convivencia*',
    'Celular: 31524424827',
    'Extensión: 103',
    '',
    'Escribe *inicio* para regresar al menú principal.'
], null, null);


const transport = addKeyword(['6']).addAnswer([
    '*Transporte - Contacto de John Faber:*',
    'Celular: 3127765068',
    '',
    '*Restaurante - Contacto de Alexander:*',
    'Celular: 3219930474',
    '',
    'Escribe *inicio* para regresar al menú principal.'
], null, null);


const users_password = addKeyword(['7']).addAnswer(
    [

        '*Educacity* -  comunicate al 3176641476 - 3387829\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const emails_institute = addKeyword(['8']).addAnswer([
    '*Correos en la plataforma de Educacity*:',
    '- Para solicitar información, escribe tu solicitud como "Claudia a este numero".',
    '',
    '*Clases extracurriculares - Contacta a Bibiena*:',
    'Teléfono: 3387829',
    'Extensión: 114',
    '',
    'Escribe *inicio* para regresar al menú principal.'
], null, null);

const info_comunion = addKeyword(['9']).addAnswer(
    [

        'Te envia la confirmación de solicitud a tu correo',
        '*Correo: biblioteca@bethlemitaspereira.edu.co - c.pastoral@bethlemitaspereira.edu.co*',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const exit_bot = addKeyword(['salir', 'muchas gracias', 'gracias']).addAnswer([
    'Te agradecemos por utilizar nuestros servicios. Si en el futuro tienes más preguntas o necesitas asistencia, no dudes en contactarnos. ¡Que tengas un día excepcional!\n',
    'Si necesitas información, escribe *inicio*'
], null, null);

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'inicio', 'como esta', 'hola como esta']).addAnswer([
    '🏫Bienvenido al Colegio Bethlemitas. A continuación, te proporcionaremos información sobre nuestros servicios:',
]).addAnswer(
    [
        '*Digite el número asociado a la acción que necesita realizar*',
        '1. Para solicitar los pasos de los certificados de los estudiantes.',
        '2. Para conocer los pasos de la admisión preinscrita.',
        '3. Para visualizar costos e información del economato.',
        '4. Para obtener el número y comunicarte con nuestro equipo de trabajo',
        '5. Para obtener el número de la coordinación académica y bienestar de convivencia',
        '6. Para obtener el número del transporte y el restaurante',
        '7. Para obtener la información de los usuarios y sus contraseñas',
        '8. Para obtener información sobre correos institucionales y clases extracurriculares',
        '9. Para obtener información de cursos de la primera comunión',
        'Escribe *salir* para cerrar el menu\n',
        '*📝Nota*: En caso de no obtener las respuestas deseada, puede volver a escribir "inicio" y luego especificar la acción que prefiera conocer.'
    ],
    null,
    null,
    [certified_steps, admision, commissary_costs, vacant, information_academic, transport,
        users_password, emails_institute, info_comunion, exit_bot]
)

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