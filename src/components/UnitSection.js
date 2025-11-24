import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Edit, Image } from 'lucide-react';

const UnitSection = ({ unitId, isActive }) => {
  const unitContents = {
    1: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold text-gray-900">1.1 Modelos de arquitectura</h3>
        <p>Clásicas (Von Neumann): Se basan en un solo procesador que ejecuta las instrucciones de forma secuencial (una a la vez). Son simples, pero lentas.</p>
        <p>Segmentadas (Pipeline): Las instrucciones se dividen en etapas y se ejecutan de forma superpuesta (como una cadena de montaje), aumentando la velocidad.</p>
        <p>Multiprocesamiento: Utilizan varios procesadores o núcleos para el trabajo paralelo (Ej. SMP y MPP).</p>

        <h3 className="text-xl font-semibold text-gray-900">1.2 Unidad Central de Procesamiento (CPU)</h3>
        <p>El "cerebro" del sistema, encargado de ejecutar instrucciones. Sus partes principales son:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Unidad Aritmética Lógica (ALU): Realiza operaciones matemáticas y lógicas (suma, AND, OR).</li>
          <li>Registros: Pequeñas memorias de altísima velocidad dentro del CPU para datos temporales.</li>
          <li>Unidad de Control (UC): Dirige la secuencia de operaciones, buscando, decodificando y ejecutando instrucciones.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">1.2.3 Sistema de Entrada/Salida (E/S)</h3>
        <p>Métodos para que el CPU se comunique con periféricos. Incluye:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>E/S Programada: El CPU espera activamente a que el dispositivo esté listo (ineficiente).</li>
          <li>E/S por Interrupciones: El dispositivo avisa al CPU solo cuando necesita atención.</li>
          <li>Acceso Directo a Memoria (DMA): Permite a los dispositivos transferir datos directamente a la RAM sin intervención del CPU, liberándolo para otras tareas.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">1.2.4 Buses</h3>
        <p>Los canales de comunicación (cables/pistas) que conectan los componentes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Bus de Datos: Bidireccional, lleva la información real.</li>
          <li>Bus de Direcciones: Unidireccional, especifica la ubicación (memoria o dispositivo) de origen/destino.</li>
          <li>Bus de Control: Transporta señales para sincronizar y gestionar el uso de los otros buses (Ej. señales de "Lectura" o "Escritura").</li>
          <li>Jerarquía de Buses: Organización de varios buses de distintas velocidades para optimizar el rendimiento (ej. buses de alta velocidad para la CPU y buses de expansión para periféricos).</li>
        </ul>

        {/* Imágenes para Unidad 1 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-500" />
            Imágenes Relacionadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img src="https://imgs.search.brave.com/qnSAg23MUuGrXm047yeA93G7bu8XDfmA32MevPcuo24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ1L2E5/L2Y1LzQ1YTlmNThl/MjZmMzdiZGM1Y2Fm/MTU5MzM0NWIxMzI5/LmpwZw"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Arquitectura Von Neumann</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://imgs.search.brave.com/FmE2tLMv3ZIUE6gC3OA4QemBAVvEKDXm_8xw42XvewY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y2FuLXBpcGVsaW5l/ZC1wcm9jZXNzb3It/Zml0LWluLXZvbi1u/ZXVtYW5uLWFyY2hp/dGVjdHVyZS12MC02/ZnR0bDhlZTVvMWUx/LnBuZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz05NzA2YWQ0MzQz/ZmUzMzA0ZWZiZDgz/MDRkMjIyYTYzN2Qx/YTVmM2Uw" 
                alt="Pipeline de instrucciones" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Pipeline Segmentado</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://tse3.mm.bing.net/th/id/OIP.cp3fynktw8rUDNFaWvUf_wHaE-?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Sistema multiprocesador" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Multiprocesamiento</p>
            </div>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold text-gray-900">2.1 Organización del procesador</h3>
        <p>Descripción de los componentes principales interconectados: ALU, Unidad de Control, Registros y su interconexión interna (bus interno). El CPU es un componente fundamental que interpreta datos y ejecuta secuencias de instrucciones.</p>

        <h3 className="text-xl font-semibold text-gray-900">2.2 Estructura de registros</h3>
        <p>Registros Visibles al Usuario: Usados por el programador (registros de datos, direcciones, puntero de pila).</p>
        <p>Registros de Control: Usados por la Unidad de Control para la operación del procesador.</p>
        <p>Registros de Estado (Flags): Bits que indican el resultado de la última operación (ej. si el resultado fue cero, si hubo desbordamiento, etc.).</p>

        <h3 className="text-xl font-semibold text-gray-900">2.3 Ciclo de la instrucción</h3>
        <p>El proceso repetitivo que realiza el CPU: FDE (Fetch - Decode - Execute):</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>1. Búsqueda (Fetch): Obtener la instrucción de la memoria.</li>
          <li>2. Decodificación (Decode): Interpretar la instrucción.</li>
          <li>3. Ejecución (Execute): Realizar la operación.</li>
        </ol>
        <p>Segmentación (Pipeline): Técnica donde este ciclo se superpone para ejecutar varias instrucciones simultáneamente.</p>

        <h3 className="text-xl font-semibold text-gray-900">2.4 Modos de direccionamiento</h3>
        <p>La forma en que la CPU encuentra los datos (operandos) necesarios para la instrucción:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Inmediato: El valor está en la propia instrucción.</li>
          <li>Directo: La dirección del dato está en la instrucción.</li>
          <li>Indirecto: La instrucción contiene la dirección de la dirección del dato.</li>
          <li>Indexado: Se calcula la dirección sumando una base y el contenido de un registro índice.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">2.5 Estudio CPU</h3>
        <p>Revisión de CPUs históricos (como el Intel 8086 y 80386) para ilustrar cómo evolucionaron las características como el bus de datos, la frecuencia, la memoria virtual y los modos de operación (Real vs. Protegido).</p>

        {/* Imágenes para Unidad 2 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-500" />
            Imágenes Relacionadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://1.bp.blogspot.com/-492R4ho8Lkc/VwMFSQWQwNI/AAAAAAAAAAo/yXtRESGTNjsrb2AwACw4wRJOtZ-t-vCRg/w1200-h630-p-k-no-nu/unidad-central-de-proceso.jpg" 
                alt="Organización interna del CPU" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Organización del Procesador</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://th.bing.com/th/id/R.31bb1d1a002274169f4401eeedf83984?rik=YdRCNYTQI2vLiw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jSfNRyGQbPE%2fVU2gQlpgYOI%2fAAAAAAAAACo%2fjIAqIIecNd4%2fs1600%2f10.jpg&ehk=KUQI%2bPIpJAAEip3Z7dyUOGLuKGaWbyo8ixKbCSqD00Q%3d&risl=&pid=ImgRaw&r=0" 
                alt="Estructura de registros" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Registros del CPU</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.vGhHddZr8J1A177uraPbCwHaET?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Ciclo de instrucción" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Ciclo FDE</p>
            </div>
          </div>
        </div>
      </div>
    ),
    3: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold text-gray-900">3.1 Chipset</h3>
        <p>El Chipset es el conjunto de circuitos de la placa base que gestiona el flujo de datos. Históricamente se dividía en:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Puente Norte (Northbridge): Conectaba componentes de alta velocidad (CPU, RAM, GPU).</li>
          <li>Puente Sur (Southbridge): Conectaba periféricos de baja velocidad (USB, discos duros).</li>
        </ul>
        <p>También se cubren el Controlador del Bus (sincroniza las transferencias), el Controlador de Interrupciones y los Controladores de Video.</p>

        <h3 className="text-xl font-semibold text-gray-900">3.2 Almacenamiento</h3>
        <p>Diferenciación entre:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dispositivos Primarios (RAM): Memoria volátil de trabajo rápido.</li>
          <li>Dispositivos Secundarios/Permanentes: Guardan datos de forma permanente (SSD y HDD).</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">3.3 Fuentes de Alimentación</h3>
        <p>Componente que convierte la corriente AC en DC de bajo voltaje. Se enfatiza la Eficiencia (certificaciones 80 Plus) y las características como Potencia (Watts), Formato (ATX, SFX) y Modularidad (que permite conectar solo los cables necesarios).</p>

        <h3 className="text-xl font-semibold text-gray-900">3.4 Ambientes de Servicio</h3>
        <p>Clasificación de las arquitecturas según su uso:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Negocios: Priorizan seguridad, estabilidad y copias de seguridad.</li>
          <li>Industria: Priorizan Tiempo Real (las instrucciones deben ejecutarse en un plazo estricto) y Robustez para operar en ambientes hostiles.</li>
          <li>Comercio Electrónico: Priorizan Escalabilidad Masiva (manejar picos de tráfico) y Alta Disponibilidad (24/7).</li>
        </ul>

        {/* Imágenes para Unidad 3 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-500" />
            Imágenes Relacionadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://gettyimages.com.mx/fotos/placa-base" 
                alt="Chipset de placa base" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Chipset y Puentes</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://imgs.search.brave.com/ZDhPnGhCmAubKhlfXXKWtRvgX6WtLnEiOY5GZ4woLdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b25vbW91cy5h/aS9zdGF0aWMvdXBs/b2FkL2ltYWdlcy9j/b21tb24vdXBsb2Fk/LzIwMjMwNDAzL1Ro/ZS1CYXR0bGUtb2Yt/U1NELWFuZC1SQU0t/QS1Db21wcmVoZW5z/aXZlLUd1aWRlMDAw/MDU3Mjc1MGIyNWY0/LndlYnA" 
                alt="Dispositivos de almacenamiento" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">RAM y SSD/HDD</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://www.amazon.com.mx/fuente-de-poder/s?k=fuente+de+poder"  
                alt="Fuente de alimentación" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Fuente de Poder</p>
            </div>
          </div>
        </div>
      </div>
    ),
    4: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold text-gray-900">4.1 Aspectos básicos de la computación paralela</h3>
        <p>Definición: Técnica de dividir un gran problema en subproblemas para ser resueltos simultáneamente por múltiples procesadores, con el objetivo de reducir el tiempo de ejecución.</p>
        <p>Conceptos: Procesador/Núcleo, Hilo (Thread). Ley de Amdahl: Limita la aceleración del paralelismo por la parte del código que es inherentemente secuencial.</p>

        <h3 className="text-xl font-semibold text-gray-900">4.2 Tipos de computación paralela</h3>
        <p>Clasificación por el nivel de aplicación:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nivel de Bit: Aumentar el tamaño de palabra (ej. de 32 a 64 bits).</li>
          <li>Nivel de Instrucción (ILP): Múltiples instrucciones ejecutándose superpuestas en un solo procesador (pipeline).</li>
          <li>Nivel de Hilo (TLP): Múltiples hilos (secuencias de un programa) se ejecutan en diferentes núcleos.</li>
          <li>Nivel de Tarea/Proceso: Ejecución de programas completamente independientes en diferentes procesadores.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">4.3 Sistema de memoria compartida</h3>
        <p>Múltiples procesadores comparten un único espacio de direcciones de memoria.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>UMA (Uniform Memory Access): Todos los procesadores acceden a la memoria en el mismo tiempo.</li>
          <li>NUMA (Non-Uniform Memory Access): El acceso a la memoria local es rápido, pero a la memoria remota de otro procesador es más lento. Ofrece mayor escalabilidad.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">4.4 Sistemas de memoria distribuida</h3>
        <p>Cada procesador tiene su propia memoria privada. La comunicación se realiza mediante el paso de mensajes (Message Passing Interface - MPI) a través de una red. Son la base de la Supercomputación por su gran escalabilidad, pero son más difíciles de programar.</p>

        <h3 className="text-xl font-semibold text-gray-900">4.5 Casos de estudio</h3>
        <p>Ejemplos prácticos: Cálculo paralelo con OpenMP (Memoria Compartida), implementación de buffers con mecanismos de sincronización (mutex), y proyectos masivos como SETI@home (Memoria Distribuida).</p>

        {/* Imágenes para Unidad 4 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-500" />
            Imágenes Relacionadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://tse3.mm.bing.net/th/id/OIP.Aokjz8oKKpkdamHPKymccgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Computación paralela básica" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Paralelismo Básico</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://itigic.com/wp-content/uploads/2021/03/20210318_6053c5f465f24.jpg" 
                alt="Memoria compartida UMA/NUMA" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Memoria Compartida</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://tse2.mm.bing.net/th/id/OIP.k_m0oDcs-TAwPpXzveLUlAHaFX?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Sistemas distribuidos" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Memoria Distribuida</p>
            </div>
          </div>
        </div>
      </div>
    ),
    5: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold text-gray-900">5.1 Procesadores</h3>
        <p>Gama Baja: Priorizan bajo costo y eficiencia energética. Ideales para tareas básicas (navegación, ofimática ligera). Tienen menos núcleos/hilos y caché reducida.</p>
        <p>Gama Media: Equilibrio entre costo y rendimiento. Buenos para multitarea, gaming y edición ligera.</p>
        <p>Gama Alta: Buscan el máximo rendimiento. Diseñados para gaming de alta resolución, modelado 3D, IA y servidores. Tienen el mayor número de núcleos, hilos y caché.</p>

        <h3 className="text-xl font-semibold text-gray-900">5.2 Tipos de Memorias</h3>
        <p>Memoria RAM: Principal, volátil y de alta velocidad. Almacena los datos de los programas en ejecución.</p>
        <p>Memoria ROM: De solo lectura y no volátil. Contiene firmware esencial como el BIOS/UEFI.</p>
        <p>Memoria Caché: Memoria muy rápida, interna o adyacente al CPU, que guarda los datos más usados para evitar ir a la RAM. Se divide en L1, L2 y L3 (de más rápida y pequeña a más lenta y grande).</p>
        <p>Memoria Virtual: Técnica que usa una parte del disco duro (swap) como extensión de la RAM para evitar errores por falta de memoria física.</p>

        {/* Imágenes para Unidad 5 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-500" />
            Imágenes Relacionadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://source.unsplash.com/400x250/?low-end-processor" 
                alt="Procesador gama baja" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Gama Baja</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://source.unsplash.com/400x250/?mid-range-cpu" 
                alt="Procesador gama media" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Gama Media</p>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://source.unsplash.com/400x250/?high-end-cpu" 
                alt="Procesador gama alta" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-2 text-xs text-gray-600 text-center">Gama Alta</p>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <motion.div 
      className={`bg-white rounded-lg p-6 mb-6 border ${
        isActive ? 'border-blue-200 bg-blue-50' : 'border-transparent'
      }`}
      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
      animate={{ 
        opacity: isActive ? 1 : 0, 
        height: isActive ? 'auto' : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Unidad {unitId}</h2>
        {isActive && (
          <Edit className="w-5 h-5 text-blue-500" />
        )}
      </div>
      {isActive && unitContents[unitId]}
      {isActive && (
        <div className="flex items-center gap-2 text-blue-600 font-medium mt-4 pt-4 border-t border-gray-200">
          <ArrowRight className="w-4 h-4" />
          <span>Contenido detallado listo para estudiar</span>
        </div>
      )}
    </motion.div>
  );
};

export default UnitSection;