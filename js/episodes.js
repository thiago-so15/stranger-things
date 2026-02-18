/* ==========================================
   VISUAL NOVEL ENGINE
   Characters appear on screen, talk with
   typewriter text, scene transitions
   ========================================== */

const CHARS = {
  ELEVEN: { img: 'assets/eleven.png', name: 'Eleven' },
  MIKE: { img: 'assets/mike.png', name: 'Mike' },
  WILL: { img: 'assets/will.png', name: 'Will' },
  MAX: { img: 'assets/max.png', name: 'Max' },
  DUSTIN: { img: 'assets/dustin.png', name: 'Dustin' },
  LUCAS: { img: 'assets/lucas.png', name: 'Lucas' },
  HOPPER: { img: 'assets/hopper.png', name: 'Hopper' },
  HOLLOW: { img: 'assets/hollow.png', name: 'The Hollow' },
};

const EP = {
1: { title:'Glitch', dur:'58:00', scenes:[
  // COLD OPEN — BOSQUE
  { bg:'horror', heading:'EXT. BOSQUE DE HAWKINS — NOCHE', fx:'static' },
  { bg:'horror', chars:[], narr:'El viento sopla fuerte. No hay insectos. No hay sonido natural.' },
  { bg:'horror', chars:[], narr:'Una adolescente corre entre los árboles. Respira agitada. Habla por teléfono.' },
  { bg:'horror', chars:[], narr:'<em>"Mamá, te juro que hay alguien acá—"</em> La llamada se corta.', fx:'static' },
  { bg:'horror', chars:[], narr:'Las luces del pueblo, a lo lejos, parpadean al unísono. El bosque <em>vibra</em>.', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'Durante un segundo... los árboles se <strong>duplican</strong>. La chica se detiene. Frente a ella está... <em>ella misma</em>.', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'La otra versión sonríe.' },
  { bg:'dark', heading:'CORTE A NEGRO. TÍTULO.', fx:'glitch' },

  // CASA DE HOPPER — MAÑANA
  { bg:'emotional', heading:'INT. CASA DE HOPPER — MAÑANA' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right'}], narr:'Silencio incómodo. Eleven desayuna sin hablar. Hopper la observa.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'Dormiste algo.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'No mucho.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'¿Pesadillas?' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'No eran sueños.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right'}], narr:'Hopper se tensa.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'Papá... ¿y si lo cerramos mal?' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'Cerramos lo que había que cerrar.' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'No. Lo <em>empujamos</em>.' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right'}], narr:'Silencio pesado.' },

  // HABITACIÓN DE WILL — TARDE
  { bg:'cold', heading:'INT. HABITACIÓN DE WILL — TARDE' },
  { bg:'cold', chars:[{c:'WILL',pos:'center'}], narr:'Will dibuja un mapa enorme pegado en la pared. Mike entra.' },
  { bg:'cold', chars:[{c:'WILL',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'Dustin dice que anoche hubo interferencia en toda la zona este.' },
  { bg:'cold', chars:[{c:'WILL',pos:'left'},{c:'MIKE',pos:'right'}], narr:'Will no responde.' },
  { bg:'cold', chars:[{c:'WILL',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'Will.' },
  { bg:'cold', chars:[{c:'WILL',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'WILL', text:'¿Ves eso?' },
  { bg:'cold', chars:[{c:'WILL',pos:'left'},{c:'MIKE',pos:'right'}], narr:'Es Hawkins... pero con calles adicionales que <em>no existen</em>.' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'WILL', text:'No son nuevas calles. Son <em>las otras</em>.' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'¿Otras qué?' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'WILL', text:'Las que están <em>encima</em>.' },

  // GARAJE DE MIKE — NOCHE
  { bg:'cold', heading:'INT. GARAJE DE MIKE — NOCHE' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right'}], narr:'Dustin conecta cables. La máquina emite un pulso.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'DUSTIN', text:'Ok... si esto explota, decile a mi mamá que fue ciencia heroica.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'No va a explotar.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right'}], narr:'La pantalla muestra una onda repetitiva.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'DUSTIN', text:'Eso no es ruido.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'Es <em>sincronización</em>.' },
  { bg:'horror', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right'}], narr:'Las luces bajan. La máquina se activa sola.', fx:'glitch' },
  { bg:'horror', chars:[], narr:'En el altavoz, una voz distorsionada: <strong>"Corrección iniciada."</strong>', fx:'static' },
  { bg:'dark', chars:[{c:'DUSTIN',pos:'left'},{c:'MIKE',pos:'right'}], narr:'La máquina se apaga. Silencio absoluto.' },

  // CALLE PRINCIPAL — MAX
  { bg:'hawkins', heading:'EXT. CALLE PRINCIPAL — NOCHE' },
  { bg:'hawkins', chars:[{c:'MAX',pos:'center'}], narr:'Max camina sola. Se detiene.' },
  { bg:'horror', chars:[{c:'MAX',pos:'center'}], narr:'Ve a dos hombres <em>idénticos</em> discutiendo frente a una tienda. Uno parece confundido. El otro, tranquilo.', fx:'glitch' },
  { bg:'horror', chars:[{c:'MAX',pos:'center'}], speak:'MAX', text:'No otra vez...' },
  { bg:'horror', chars:[{c:'MAX',pos:'center'}], narr:'Uno de los hombres mira directo a Max. Sus ojos <strong>no parpadean</strong>.', fx:'static' },

  // CASA DE HOPPER — NOCHE (LA FIGURA)
  { bg:'dark', heading:'INT. CASA DE HOPPER — NOCHE' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven sola en el living. Se concentra. La televisión apagada refleja algo detrás de ella. Una figura borrosa.' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'Te veo.' },
  { bg:'horror', chars:[{c:'ELEVEN',pos:'left'},{c:'HOLLOW',pos:'right'}], narr:'La figura en el reflejo se acerca. No tiene rostro definido.', fx:'static' },
  { bg:'horror', chars:[{c:'ELEVEN',pos:'left'},{c:'HOLLOW',pos:'right',speak:true}], speak:'HOLLOW', text:'No perteneces a esta versión.' },
  { bg:'horror', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven gira. No hay nadie. La televisión <strong>explota</strong>.', fx:'glitch' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'¡JANE!' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], narr:'Eleven sangra por la nariz.' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'No quiere destruirnos.' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'¿Entonces qué quiere?' },
  { bg:'eclipse', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'Quiere <em>arreglarnos</em>.' },

  // HABITACIÓN DE WILL — MISMA NOCHE
  { bg:'dark', heading:'INT. HABITACIÓN DE WILL — MISMA NOCHE' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], narr:'Will se despierta jadeando. Joyce entra.' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'Ahí.' },
  { bg:'horror', chars:[{c:'WILL',pos:'center'}], narr:'La sombra en la esquina... se <em>mueve contra la luz</em>.', fx:'static' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], narr:'<em>"No hay nada"</em>, dice Joyce.' },
  { bg:'horror', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'No todavía.' },

  // ESCENA FINAL
  { bg:'eclipse', heading:'ESCENA FINAL — EXT. CENTRO DE HAWKINS', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'Las luces parpadean. Por un segundo completo... <strong>dos Hawkins superpuestas</strong>.', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'Autos atraviesan autos. Personas atraviesan personas.', fx:'static' },
  { bg:'hawkins', chars:[], narr:'Todo vuelve. Excepto que ahora hay <strong>dos policías idénticos</strong> frente a la comisaría. Se miran.' },
  { bg:'horror', chars:[], narr:'Uno sonríe. El otro parece <em>aterrorizado</em>.' },
  { bg:'dark', heading:'CORTE A NEGRO.', fx:'glitch' },
]},
2: { title:'Frecuencia', dur:'54:00', scenes:[
  { bg:'eclipse', heading:'CHICAGO — WILL' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'center'}], narr:'Will pinta Hawkins desde arriba. El centro del pueblo está <em>ausente</em>. Un agujero blanco en mitad de la pintura.' },
  { bg:'hawkins', heading:'HAWKINS — DINER' },
  { bg:'hawkins', chars:[{c:'MIKE',pos:'left'},{c:'LUCAS',pos:'right'}], narr:'Mike llega. Lucas le muestra siete reportes de "ausencias". La sensación de que <em>algo falta pero no sé qué</em>.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'center'}], speak:'DUSTIN', text:'No hay picos de energía. Hay valles. La ciudad no emite energía... la está <em>absorbiendo</em>. Es respiración inversa.' },
  { bg:'emotional', heading:'INDIANÁPOLIS — ELEVEN' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'MIKE',pos:'right'}], narr:'Eleven está bien. <em>Demasiado bien</em>. Cuando Mike habla de Hawkins, la temperatura baja. Las luces parpadean.', fx:'glitch' },
  { bg:'dark', heading:'EL PRIMER ECLIPSE DE MAX', fx:'static' },
  { bg:'horror', chars:[{c:'MAX',pos:'center'}], narr:'La música se detiene. El color desaparece. Todo es gris. En el reflejo de la ventana... <strong>Max no está</strong>.', fx:'static' },
  { bg:'dark', chars:[{c:'MAX',pos:'center'}], speak:'MAX', text:'No otra vez.' },
  { bg:'horror', chars:[{c:'WILL',pos:'center'}], narr:'En el cuadro de Will aparece una palabra que él jura no haber pintado. Letra infantil:', fx:'glitch' },
  { bg:'horror', chars:[], narr:'<strong style="font-size:1.8rem;letter-spacing:4px;color:#e50914">ÁBREME.</strong>', fx:'glitch' },
]},
3: { title:'Umbral', dur:'61:00', scenes:[
  { bg:'lab', heading:'SUEÑO — LABORATORIO', fx:'static' },
  { bg:'lab', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven a los once años. Pasillos más largos de lo normal. Al final, una puerta sin manija, perfectamente lisa.' },
  { bg:'hawkins', heading:'LA REUNIÓN' },
  { bg:'hawkins', chars:[{c:'MIKE',pos:'left'},{c:'LUCAS',pos:'right'}], narr:'El grupo se reúne por primera vez en dos años. Tensiones no dichas. Miradas que evitan.' },
  { bg:'emotional', chars:[{c:'HOPPER',pos:'center'}], speak:'HOPPER', text:'¿Alguien pensaba decirme algo?' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'left'},{c:'WILL',pos:'right'}], narr:'Las "ausencias" forman un círculo expandiéndose desde el laboratorio. Metros por día.' },
  { bg:'horror', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'Luego, Hawkins deja de existir. No explota. Simplemente... deja de ser.' },
  { bg:'eclipse', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'Yo la he visto. La puerta. Está aquí. Siempre estuvo aquí.', fx:'glitch' },
  { bg:'eclipse', heading:'ECLIPSE COLECTIVO', fx:'glitch' },
  { bg:'void', chars:[], narr:'La realidad parpadea. Todo gris, frío. Las facciones se difuminan. Un latido bajo sus pies.', fx:'static' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'ELEVEN', text:'No necesito que me protejas.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'Eso nunca me detuvo.' },
  { bg:'horror', chars:[{c:'ELEVEN',pos:'center'}], narr:'La sombra de Eleven en la pared no hace lo mismo que ella. <strong>Sus brazos extendidos</strong>, como alcanzando algo.', fx:'glitch' },
]},
4: { title:'Interferencia', dur:'56:00', scenes:[
  { bg:'hawkins', heading:'HAWKINS — DESAJUSTE', fx:'static' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left',speak:true},{c:'ELEVEN',pos:'right'}], speak:'MIKE', text:'¿Por qué no me dijiste que seguías sintiendo el Upside Down?' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left'},{c:'ELEVEN',pos:'right',speak:true}], speak:'ELEVEN', text:'¿Y qué habrías hecho? ¿Otro plan? ¿Otro discurso sobre cómo todo va a estar bien?' },
  { bg:'cold', heading:'EL DETECTOR — DUSTIN' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'center'}], narr:'El detector detecta eclipses <em>antes</em> de que ocurran. 33 segundos de anticipación. Están programados.', fx:'static' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'Si dejo de pintar, ella deja de hablar.' },
  { bg:'horror', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'La que está detrás de la puerta.', fx:'glitch' },
  { bg:'white', heading:'MAX — LA TENTACIÓN DEL VACÍO' },
  { bg:'white', chars:[{c:'HOLLOW',pos:'left'},{c:'MAX',pos:'right'}], speak:'HOLLOW', text:'Podrías quedarte aquí. Aquí no hay dolor.' },
  { bg:'dark', chars:[{c:'MAX',pos:'center'}], narr:'Max llora. No de miedo. De <em>tentación</em>. El vacío se sintió como paz.' },
  { bg:'emotional', chars:[{c:'LUCAS',pos:'left'},{c:'MAX',pos:'right'}], narr:'Lucas se sienta junto a ella. No dice nada. Pone su mano sobre la de ella.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'center'}], speak:'DUSTIN', text:'Ojalá estuvieras aquí, idiota.' },
  { bg:'horror', chars:[{c:'HOPPER',pos:'center'}], narr:'Documento de 1979: <strong>"Cerrar la puerta requiere estar del otro lado."</strong> No hay instrucciones para volver.', fx:'glitch' },
]},
5: { title:'Réplica', dur:'63:00', scenes:[
  { bg:'hawkins', heading:'PLANO SECUENCIA' },
  { bg:'hawkins', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven camina por un día perfecto. <em>Demasiado perfecto</em>. Sonrisas amplias. Colores saturados. El reloj marca las 3:33 siempre.' },
  { bg:'horror', chars:[{c:'ELEVEN',pos:'center'}], narr:'No es Hawkins. Es una <em>réplica</em> del Upside Down diseñada para sentirse como hogar.', fx:'glitch' },
  { bg:'dark', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'Es hermoso.' },
  { bg:'eclipse', chars:[{c:'MIKE',pos:'center'}], narr:'Una sonrisa que aterroriza a Mike porque es <em>genuina</em>.' },
  { bg:'emotional', heading:'MAX Y ELEVEN' },
  { bg:'emotional', chars:[{c:'MAX',pos:'left',speak:true},{c:'ELEVEN',pos:'right'}], speak:'MAX', text:'Sé lo que te está diciendo. Te muestra la ausencia de dolor y la disfraza de paz.' },
  { bg:'emotional', chars:[{c:'MAX',pos:'left'},{c:'ELEVEN',pos:'right',speak:true}], speak:'ELEVEN', text:'¿Y cómo sabes que no es paz?' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'Ella ya eligió. Solo que no lo sabe todavía.' },
  { bg:'horror', heading:'3:33 AM', fx:'glitch' },
  { bg:'dark', chars:[], narr:'Todos los habitantes de Hawkins se despiertan. Todos sienten: <em>alguien acaba de irse</em>.', fx:'static' },
  { bg:'dark', chars:[{c:'MIKE',pos:'center'}], narr:'Eleven no está. Sobre la almohada, sangre en forma de <strong>círculo perfecto</strong>. Como un punto final.' },
]},
6: { title:'Vacío', dur:'59:00', scenes:[
  { bg:'white', heading:'EL OTRO LADO' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'center'}], narr:'Blanco infinito. Sin horizonte. Eleven está ahí. No parece asustada. Parece <em>aliviada</em>.' },
  { bg:'dark', heading:'HAWKINS — CRISIS' },
  { bg:'dark', chars:[{c:'MIKE',pos:'left'},{c:'LUCAS',pos:'right'}], narr:'Mike se apaga. Se sienta y deja de responder. Lucas toma el mando.' },
  { bg:'dark', chars:[{c:'HOPPER',pos:'center'}], narr:'Hopper sale al bosque y grita. Un sonido animal de un hombre que ya perdió una hija.' },
  { bg:'cold', chars:[{c:'DUSTIN',pos:'center'}], speak:'DUSTIN', text:'Ella no fue tomada. Ella fue. Voluntariamente.' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'center'}], narr:'Los recuerdos se borran. El color de los ojos de Mike. Los waffles. Cada recuerdo perdido hace el vacío más cómodo.' },
  { bg:'emotional', chars:[{c:'WILL',pos:'left'},{c:'HOPPER',pos:'right'}], speak:'HOPPER', text:'El vacío puede darte paz. Pero no puede darte dolor. Y el dolor es lo que te dice que estás viva.' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'center'}], speak:'MIKE', text:'Siempre supe que esto pasaría. Y la dejé porque tenía miedo de estar ahí cuando pasara.' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'center'}], narr:'Las mentes de Will y Eleven se tocan. El vacío reacciona.', fx:'glitch' },
  { bg:'horror', chars:[{c:'HOLLOW',pos:'center'}], speak:'HOLLOW', text:'Ella no es tuya. Ella no es de nadie. Ella es mía.', fx:'static' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], speak:'WILL', text:'Nos encontró. Y está hambriento.' },
]},
7: { title:'Penumbra', dur:'67:00', scenes:[
  { bg:'eclipse', heading:'HAWKINS COLAPSA', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'Los eclipses duran minutos. La gente evacúa por instinto. El pueblo se abandona.', fx:'static' },
  { bg:'dark', chars:[{c:'DUSTIN',pos:'center'}], speak:'DUSTIN', text:'El Upside Down empezó con Will. Donde todo comenzó es donde la conexión es más fuerte.' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left',speak:true},{c:'HOPPER',pos:'right'}], speak:'MIKE', text:'Encontramos la forma de traerla de vuelta. Punto.' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left'},{c:'HOPPER',pos:'right',speak:true}], speak:'HOPPER', text:'Eso es lo que habría dicho yo a tu edad.' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'left'},{c:'HOLLOW',pos:'right'}], speak:'HOLLOW', text:'No más dolor. No más sangre. Solo... nada.' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'¿Y está mal querer eso?' },
  { bg:'dark', heading:'LOS RECUERDOS' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left'},{c:'LUCAS',pos:'center'},{c:'DUSTIN',pos:'right'}], narr:'Cada uno elige un recuerdo que duela. Mike: perder a Eleven. Dustin: Eddie. Lucas: las noches vigilando solo.' },
  { bg:'eclipse', chars:[{c:'WILL',pos:'center'}], narr:'Los recuerdos convergen. Will los canaliza. Cruzan al vacío como <em>dolor</em>.', fx:'glitch' },
  { bg:'eclipse', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven recuerda. No Eleven. No Once. <strong>Jane.</strong>' },
  { bg:'horror', chars:[{c:'HOLLOW',pos:'center'}], speak:'HOLLOW', text:'Si te vas, yo desaparezco. Si cierras la puerta, no quedará nada.', fx:'static' },
]},
8: { title:'Eclipse', dur:'72:00', scenes:[
  { bg:'eclipse', heading:'ECLIPSE PERMANENTE', fx:'glitch' },
  { bg:'eclipse', chars:[], narr:'Hawkins existe a medias. Edificios que parpadean. Las personas vaciadas caminan con ojos vacíos.', fx:'static' },
  { bg:'void', heading:'LA DECISIÓN' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'center'}], narr:'Cerrar la puerta destruye todo. No más poderes. Recordará los rostros pero no las guerras.' },
  { bg:'emotional', chars:[{c:'MIKE',pos:'left',speak:true},{c:'ELEVEN',pos:'right'}], speak:'MIKE', text:'Hagas lo que hagas, estoy aquí. Y si olvidas todo, te encontraré otra vez. Aunque tarde toda la vida.' },
  { bg:'void', chars:[{c:'ELEVEN',pos:'center'}], narr:'Eleven llora. Donde las lágrimas tocan el suelo, aparece color. <strong>Rojo.</strong> Dolor, amor, sangre, vida.' },
  { bg:'white', heading:'EL CIERRE', fx:'glitch' },
  { bg:'white', chars:[{c:'ELEVEN',pos:'center'}], narr:'Extiende los brazos y <em>cierra la puerta</em>. No con poder. Con <strong>renuncia</strong>.', fx:'glitch' },
  { bg:'dark', chars:[], narr:'The Hollow grita con ausencia de voz. Un silencio que duele. Y colapsa.', fx:'static' },
  { bg:'hawkins', chars:[], narr:'Los eclipses se detienen. La realidad vuelve. Los colores regresan.' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'center'}], speak:'ELEVEN', text:'¿Quiénes son ustedes?' },
  { bg:'emotional', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'ELEVEN', text:'Sé que los conozco. Sé que los quiero. Pero no recuerdo por qué.' },
  { bg:'hope', heading:'TRES MESES DESPUÉS' },
  { bg:'hope', chars:[{c:'LUCAS',pos:'left'},{c:'MAX',pos:'right'}], narr:'Hawkins reconstruye. Lucas y Max caminan hombro con hombro. Will pinta con color. Hopper tiene un jardín.' },
  { bg:'hope', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'ELEVEN', text:'¿Yo hice todo eso?' },
  { bg:'hope', chars:[{c:'ELEVEN',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'Hiciste mucho más.' },
  { bg:'hope', chars:[{c:'ELEVEN',pos:'left',speak:true},{c:'MIKE',pos:'right'}], speak:'ELEVEN', text:'¿Puedes contarme otra vez? Desde el principio?' },
  { bg:'hope', chars:[{c:'ELEVEN',pos:'left'},{c:'MIKE',pos:'right',speak:true}], speak:'MIKE', text:'En noviembre de 1983, en una pequeña ciudad llamada Hawkins...' },
  { bg:'dark', heading:'CORTE A NEGRO' },
  { bg:'eclipse', heading:'POST-CRÉDITOS' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], narr:'Will duerme. En su cuaderno, una línea se dibuja sola. Una puerta sin manija.' },
  { bg:'horror', chars:[{c:'HOLLOW',pos:'center'}], speak:'???', text:'TODAVÍA ESTOY AQUÍ.', fx:'glitch' },
  { bg:'dark', chars:[{c:'WILL',pos:'center'}], narr:'Will se toca la nuca. Está fría. <em>Estática. Fin.</em>', fx:'static' },
]},
};

(function(){
  const overlay = document.getElementById('vnOverlay');
  const stage = document.getElementById('vnStage');
  const bg = document.getElementById('vnBg');
  const glitch = document.getElementById('vnGlitch');
  const staticEl = document.getElementById('vnStatic');
  const charL = document.getElementById('charLeft');
  const charC = document.getElementById('charCenter');
  const charR = document.getElementById('charRight');
  const sceneTitle = document.getElementById('vnSceneTitle');
  const sceneTitleText = document.getElementById('vnSceneTitleText');
  const dialogue = document.getElementById('vnDialogue');
  const speakerEl = document.getElementById('vnSpeaker');
  const textEl = document.getElementById('vnText');
  const indicator = document.getElementById('vnIndicator');
  const transition = document.getElementById('vnTransition');
  const intro = document.getElementById('vnIntro');
  const introEp = document.getElementById('vnIntroEp');
  const introName = document.getElementById('vnIntroName');
  const end = document.getElementById('vnEnd');
  const endText = document.getElementById('vnEndText');
  const nextBtn = document.getElementById('vnNextBtn');
  const epTitle = document.getElementById('vnEpTitle');
  const progress = document.getElementById('vnProgress');
  const progressWrap = document.getElementById('vnProgressWrap');
  const timeEl = document.getElementById('vnTime');
  const playPause = document.getElementById('vnPlayPause');
  const iconPlay = document.getElementById('vnIconPlay');
  const iconPause = document.getElementById('vnIconPause');
  const speedBtn = document.getElementById('vnSpeed');

  let ep=null, epNum=0, idx=0, auto=false, speed=1, typeTimer=null, autoTimer=null, typing=false;

  function open(n){
    ep=EP[n]; if(!ep)return; epNum=n; idx=0; auto=false; typing=false;
    iconPlay.style.display='block'; iconPause.style.display='none';
    epTitle.textContent=`E${n} — "${ep.title}"`;
    introEp.textContent=`EPISODIO ${n}`;
    introName.textContent=`"${ep.title}"`;
    intro.classList.remove('hidden');
    end.classList.remove('active');
    dialogue.classList.remove('visible');
    sceneTitle.classList.remove('visible');
    hideChars();
    bg.className='vn-bg bg-dark';
    staticEl.classList.remove('on');
    overlay.classList.add('active');
    stage.classList.add('show-ui');
    requestAnimationFrame(()=>overlay.classList.add('visible'));
    updateProgress();
    setTimeout(()=>stage.classList.remove('show-ui'),3000);
  }

  function close(){
    stopAuto(); clearType();
    overlay.classList.remove('visible');
    setTimeout(()=>overlay.classList.remove('active'),600);
  }

  function advance(){
    if(typing){ finishType(); return; }
    if(intro&&!intro.classList.contains('hidden')){ intro.classList.add('hidden'); showScene(); return; }
    if(end.classList.contains('active')) return;
    if(idx>=ep.scenes.length){ showEnd(); return; }
    showScene();
  }

  function showScene(){
    if(idx>=ep.scenes.length){ showEnd(); return; }
    const s=ep.scenes[idx]; idx++;
    updateProgress();

    transition.classList.add('active');
    setTimeout(()=>{
      bg.className='vn-bg bg-'+(s.bg||'dark');
      staticEl.classList.remove('on');
      glitch.classList.remove('flash');

      if(s.fx==='static') staticEl.classList.add('on');
      if(s.fx==='glitch'){ glitch.classList.add('flash'); setTimeout(()=>glitch.classList.remove('flash'),400); }

      if(s.heading){
        hideChars(); dialogue.classList.remove('visible');
        sceneTitleText.textContent=s.heading;
        sceneTitle.classList.add('visible');
        setTimeout(()=>transition.classList.remove('active'),200);
        if(auto) autoTimer=setTimeout(()=>{ sceneTitle.classList.remove('visible'); setTimeout(advance,300); }, 2500/speed);
      } else {
        sceneTitle.classList.remove('visible');
        setChars(s.chars||[],s.speak);

        if(s.speak && s.text){
          speakerEl.textContent = CHARS[s.speak]?CHARS[s.speak].name : s.speak;
          speakerEl.style.display='block';
          dialogue.classList.remove('narration');
          typeText(s.text);
        } else if(s.narr){
          speakerEl.style.display='none';
          dialogue.classList.add('narration');
          typeText(s.narr);
        }
        dialogue.classList.add('visible');
        setTimeout(()=>transition.classList.remove('active'),200);
      }
    },400);
  }

  function setChars(list, speakId){
    [charL,charC,charR].forEach(el=>{
      el.classList.remove('active','speaking','dim');
      el.removeAttribute('style');
    });

    if(!list||list.length===0) return;

    list.forEach(ch=>{
      const data=CHARS[ch.c];
      if(!data) return;
      let el;
      if(ch.pos==='left') el=charL;
      else if(ch.pos==='right') el=charR;
      else el=charC;

      el.src=data.img;
      el.alt=data.name;
      requestAnimationFrame(()=>{
        el.classList.add('active');
        if(speakId && ch.c===speakId) el.classList.add('speaking');
        else if(speakId && ch.c!==speakId) el.classList.add('dim');
      });
    });
  }

  function hideChars(){
    [charL,charC,charR].forEach(el=>{
      el.classList.remove('active','speaking','dim');
      el.removeAttribute('style');
    });
  }

  function typeText(html){
    clearType(); typing=true; indicator.classList.remove('visible');
    textEl.innerHTML='';
    const temp=document.createElement('div'); temp.innerHTML=html;
    const fullText=temp.textContent;
    const tags=html; let displayed=''; let i=0;
    const spd = 30/speed;

    textEl.innerHTML=html;
    textEl.style.clipPath=`inset(0 100% 0 0)`;

    let charCount=fullText.length, progress=0;
    typeTimer=setInterval(()=>{
      progress++;
      const pct=Math.min((progress/charCount)*100,100);
      textEl.style.clipPath=`inset(0 ${100-pct}% 0 0)`;
      if(progress>=charCount){
        clearInterval(typeTimer); typeTimer=null;
        textEl.style.clipPath='none';
        typing=false;
        indicator.classList.add('visible');
        if(auto){
          const delay=Math.max(1500, fullText.length*40)/speed;
          autoTimer=setTimeout(advance, delay);
        }
      }
    }, spd);
  }

  function finishType(){
    clearType();
    textEl.style.clipPath='none';
    typing=false;
    indicator.classList.add('visible');
    if(auto){
      autoTimer=setTimeout(advance, 1500/speed);
    }
  }

  function clearType(){ if(typeTimer){clearInterval(typeTimer);typeTimer=null;} if(autoTimer){clearTimeout(autoTimer);autoTimer=null;} }

  function showEnd(){
    endText.textContent=`Fin del Episodio ${epNum}`;
    nextBtn.style.display=epNum<8?'inline-block':'none';
    end.classList.add('active');
    stopAuto();
  }

  function toggleAuto(){
    auto=!auto;
    iconPlay.style.display=auto?'none':'block';
    iconPause.style.display=auto?'block':'none';
    if(auto&&!typing) advance();
  }

  function stopAuto(){ auto=false; iconPlay.style.display='block'; iconPause.style.display='none'; clearType(); }

  function updateProgress(){
    if(!ep)return;
    const pct=(idx/ep.scenes.length)*100;
    progress.style.width=pct+'%';
    timeEl.textContent=`${idx} / ${ep.scenes.length}`;
  }

  function prevScene(){
    if(idx>1){idx=Math.max(0,idx-2); clearType(); typing=false; showScene();}
  }

  function nextScene(){
    clearType(); typing=false; if(idx<ep.scenes.length) showScene(); else showEnd();
  }

  function cycleSpeed(){
    const speeds=[0.5,1,1.5,2,3];
    speed=speeds[(speeds.indexOf(speed)+1)%speeds.length];
    speedBtn.textContent=speed+'x';
  }

  function toggleFs(){
    if(!document.fullscreenElement) overlay.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
  }

  // Events
  document.querySelectorAll('.ep-card').forEach(c=>{
    c.addEventListener('click',()=>open(parseInt(c.dataset.episode)));
  });

  stage.addEventListener('click',(e)=>{
    if(e.target.closest('.vn-topbar')||e.target.closest('.vn-controls')||e.target.closest('.vn-end')) return;
    advance();
  });

  document.getElementById('vnBack').addEventListener('click',(e)=>{e.stopPropagation();close();});
  playPause.addEventListener('click',(e)=>{e.stopPropagation();toggleAuto();});
  document.getElementById('vnPrev').addEventListener('click',(e)=>{e.stopPropagation();prevScene();});
  document.getElementById('vnNext').addEventListener('click',(e)=>{e.stopPropagation();nextScene();});
  speedBtn.addEventListener('click',(e)=>{e.stopPropagation();cycleSpeed();});
  document.getElementById('vnFs').addEventListener('click',(e)=>{e.stopPropagation();toggleFs();});
  nextBtn.addEventListener('click',(e)=>{e.stopPropagation();close();setTimeout(()=>open(epNum+1),700);});

  progressWrap.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(!ep)return;
    const pct=(e.clientX-progressWrap.getBoundingClientRect().left)/progressWrap.offsetWidth;
    idx=Math.floor(pct*ep.scenes.length);
    clearType(); typing=false; showScene();
  });

  document.addEventListener('keydown',(e)=>{
    if(!overlay.classList.contains('active'))return;
    switch(e.key){
      case ' ': case 'Enter': e.preventDefault(); advance(); break;
      case 'Escape': close(); break;
      case 'ArrowRight': nextScene(); break;
      case 'ArrowLeft': prevScene(); break;
      case 'a': toggleAuto(); break;
      case 'f': toggleFs(); break;
    }
  });

  let uiTimer;
  stage.addEventListener('mousemove',()=>{
    stage.classList.add('show-ui');
    clearTimeout(uiTimer);
    uiTimer=setTimeout(()=>stage.classList.remove('show-ui'),3000);
  });
})();
