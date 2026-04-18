import { useState } from 'react';
import {
  ChevronDown,
  HardDrive,
  Zap,
  Shield,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Server,
  Cpu,
  Wifi,
  Globe,
  FolderOpen,
  Settings,
  Clock,
  XCircle,
  HelpCircle
} from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import InfoBox from './components/InfoBox';
import CodeBlock from './components/CodeBlock';
import Checklist from './components/Checklist';
import Footer from './components/Footer';

function App() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-portfolio-deep text-portfolio-text-light">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-8 pb-24 relative z-10">
        <div className="panel mb-8 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <HardDrive className="w-7 h-7 text-portfolio-orange flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-portfolio-text-light mb-2">
                Limpiá, acelerá y mantené tu PC
              </h2>
              <p className="text-portfolio-text">
                Una guía pensada para que cualquier persona pueda seguirla, paso a paso.
              </p>
            </div>
          </div>

          <div className="panel-inner mt-6 p-4 font-mono text-xs md:text-sm">
            <pre className="gradient-text overflow-x-auto">
{`╔══════════════════════════════════════════════════════════╗
║  GUÍA PRÁCTICA: OPTIMIZAR WINDOWS (10/11)               ║
║  Limpieza · Rendimiento · Reparación · Mantenimiento    ║
╚══════════════════════════════════════════════════════════╝`}
            </pre>
          </div>
        </div>

        <InfoBox type="warning" icon={<AlertTriangle />} title="Antes de empezar (2 minutos)">
          <ul className="list-disc list-inside space-y-1">
            <li>Guardá tu trabajo y cerrá programas.</li>
            <li>Si podés, hacé <strong>backup</strong> de lo importante.</li>
            <li>Si es una PC del trabajo, revisá políticas de IT antes de tocar seguridad o servicios.</li>
          </ul>
        </InfoBox>

        <div className="panel mb-8 p-6">
          <button
            onClick={() => toggleSection('quick')}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-portfolio-orange" />
              <h3 className="text-xl font-bold text-portfolio-text-light">Ruta rápida (si tenés poco tiempo)</h3>
            </div>
            <ChevronDown className={`w-6 h-6 text-portfolio-text transition-transform ${expandedSections.has('quick') ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.has('quick') && (
            <ul className="mt-4 space-y-2 ml-9 text-portfolio-text-light">
              <li><strong>Paso 1:</strong> Limpieza segura (Sección 2)</li>
              <li><strong>Paso 2:</strong> Inicio más rápido (Sección 3)</li>
              <li><strong>Paso 3:</strong> Reparación si hay síntomas (Sección 10)</li>
              <li><strong>Paso 4:</strong> Mantenimiento (Sección 17)</li>
            </ul>
          )}
        </div>

        <InfoBox type="success" icon={<CheckCircle2 />} title="Regla de oro">
          <p>Si un paso dice "opcional" y no estás seguro, saltealo. La idea es que puedas hacer las indicaciones sin miedo a romper nada.</p>
        </InfoBox>

        <Section
          id="1"
          title="Preparación (5 minutos)"
          icon={<Settings className="w-8 h-8" />}
        >
          <InfoBox type="info" icon={<AlertTriangle />} title="Por qué existe esta sección">
            <p>Te deja una "red de seguridad" antes de tocar cosas.</p>
          </InfoBox>


          <h4 className="text-lg font-bold text-portfolio-orange mb-3">1.1 Crear un punto de restauración (recomendado)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Inicio → buscá <strong>Crear un punto de restauración</strong>.</li>
            <li>En <strong>Protección del sistema</strong>, elegí el disco (normalmente C:).</li>
            <li>Si está desactivado: <strong>Configurar</strong> → <strong>Activar protección del sistema</strong>.</li>
            <li>Tocá <strong>Crear</strong> → nombre: <strong>Antes de optimizar</strong>.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">1.2 Actualizar Windows</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Windows Update.</li>
            <li>Buscar actualizaciones → instalá todo.</li>
            <li>Reiniciá.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">1.3 Drivers (sin complicarte)</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Lo más seguro: Windows Update.</li>
            <li>GPU (si jugás o editás): NVIDIA/AMD/Intel solo si sabés lo que estás haciendo.</li>
          </ul>
        </Section>

        <Section
          id="2"
          title="Limpieza segura (sin romper nada)"
          icon={<HardDrive className="w-8 h-8" />}
        >

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">2.1 Desinstalar programas que no usás</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Aplicaciones.</li>
            <li>Ordená por Tamaño o Fecha de instalación.</li>
            <li>Desinstalá lo que no uses.</li>
          </ol>

          <InfoBox type="info" icon={<AlertTriangle />} title="Tip">
            <p>Evitá "optimizadores mágicos", "driver updaters" y antivirus extra. Suelen empeorar.</p>
          </InfoBox>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">2.2 Limpieza desde Windows (método recomendado)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Sistema → Almacenamiento.</li>
            <li>Archivos temporales.</li>
            <li>Marcá temporales, papelera (si ya revisaste) y cachés.</li>
            <li>Quitar archivos.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">2.3 Limpieza rápida con teclado (Win + R) — "modo power user"</h4>
          <p className="mb-4">Es normal que Windows no te deje borrar todo: algunos archivos están en uso.</p>

          <div className="space-y-4">
            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Opción A: TEMP del usuario</h5>
              <CodeBlock code="temp" />
              <p className="mt-2">Ctrl + A → Supr → si aparece "no se puede eliminar", elegí <strong>Omitir</strong></p>
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Opción B: %TEMP% (la más típica)</h5>
              <CodeBlock code="%temp%" />
              <p className="mt-2">Ctrl + A → Supr → <strong>Omitir</strong> lo que no se pueda</p>
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Opción C: Prefetch (opcional)</h5>
              <CodeBlock code="prefetch" />
              <p className="mt-2">Borrá lo que te deje</p>
            </div>
          </div>

          <InfoBox type="warning" icon={<Shield />} title="Importante">
            <p>No borres carpetas "raras" fuera de TEMP si no sabés qué son.</p>
          </InfoBox>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3 mt-6">2.4 Liberador de espacio (método clásico)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Abrí Liberador de espacio en disco.</li>
            <li>Elegí C:.</li>
            <li>Limpiar archivos del sistema.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">2.5 Sensor de almacenamiento (automático)</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Configuración → Sistema → Almacenamiento.</li>
            <li>Activá Sensor de almacenamiento.</li>
            <li>Programalo semanal o mensual.</li>
          </ol>
        </Section>

        <Section
          id="3"
          title="Inicio más rápido (lo que más se nota)"
          icon={<Zap className="w-8 h-8" />}
        >

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">3.1 Desactivar programas que se abren solos</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Ctrl + Shift + Esc (Administrador de tareas).</li>
            <li>Pestaña Inicio.</li>
            <li>Deshabilitá launchers, updaters y apps que no usás todos los días.</li>
          </ol>

          <InfoBox type="info" icon={<Zap />} title="Regla simple">
            <p>Si no lo usás todos los días, casi seguro no necesita iniciar con Windows.</p>
          </InfoBox>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">3.2 Servicios (solo si sos usuario técnico)</h4>
          <InfoBox type="warning" icon={<Wrench />} title="">
            <p>No deshabilites servicios "a ciegas". Podés perder audio, Wi‑Fi, impresión, etc.</p>
          </InfoBox>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
            <li>Abrí <code className="px-2 py-0.5 bg-portfolio-deep border border-portfolio-accent rounded text-portfolio-text-light">services.msc</code>.</li>
            <li>Enfocate en servicios de software de terceros (actualizadores que no necesitás siempre).</li>
          </ul>
        </Section>

        <Section
          id="4"
          title="Rendimiento y 'sensación de velocidad'"
          icon={<Cpu className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">4.1 Plan de energía</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Sistema → Energía y batería.</li>
            <li>Elegí Mejor rendimiento cuando estés enchufado.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">4.2 Efectos visuales (ideal para PCs modestas)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Inicio → buscá Ajustar la apariencia y rendimiento de Windows.</li>
            <li>Elegí:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Ajustar para obtener el mejor rendimiento</li>
                <li>o Personalizado y dejá Suavizar bordes de las fuentes</li>
              </ul>
            </li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">4.3 Apps en segundo plano</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Configuración → Aplicaciones → Aplicaciones instaladas.</li>
            <li>App pesada → Permisos en segundo plano.</li>
            <li>Poné Nunca donde tenga sentido.</li>
          </ol>
        </Section>

        <Section
          id="5"
          title="Almacenamiento: SSD vs HDD (clave)"
          icon={<Server className="w-8 h-8" />}
        >

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">5.1 Saber qué disco tenés</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Administrador de tareas → Rendimiento → Disco.</li>
            <li>Mirá si dice SSD o HDD.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">5.2 Optimizar unidades</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Buscá Desfragmentar y optimizar unidades.</li>
            <li>SSD: Optimizar (TRIM).</li>
            <li>HDD: Desfragmentar cuando no uses la PC.</li>
          </ol>
        </Section>

        <Section
          id="6"
          title="Seguridad sin bajar el rendimiento"
          icon={<Shield className="w-8 h-8" />}
        >

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">6.1 Antivirus</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>Windows Defender suele ser suficiente.</li>
            <li>Evitá instalar varios antivirus.</li>
          </ul>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">6.2 Apps potencialmente no deseadas</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Seguridad de Windows → Control de aplicaciones y navegador.</li>
            <li>Activá protección contra aplicaciones potencialmente no deseadas (si aparece).</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">6.3 Privacidad (recomendaciones seguras desde Configuración)</h4>
          <p className="mb-4 italic text-portfolio-text">Objetivo: reducir la recolección de datos "extra" sin romper el sistema ni usar scripts raros.</p>

          <div className="space-y-6">
            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Diagnósticos y comentarios</h5>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Windows 11:</strong> Configuración → Privacidad y seguridad → <strong>Diagnósticos y comentarios</strong>.</li>
                <li><strong>Windows 10:</strong> Configuración → Privacidad → <strong>Diagnósticos y comentarios</strong>.</li>
                <li>Desactivá (si aparecen):
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Enviar <strong>datos de diagnóstico opcionales</strong>.</li>
                    <li><strong>Experiencias personalizadas</strong> (Tailored experiences).</li>
                    <li><strong>Mejorar entintado y escritura</strong> (si no lo usás).</li>
                  </ul>
                </li>
                <li>En <strong>Eliminar datos de diagnóstico</strong>, tocá <strong>Eliminar</strong>.</li>
              </ol>
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Historial de actividad y permisos</h5>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Configuración → Privacidad y seguridad.</li>
                <li>Revisá y desactivá lo que no uses, por ejemplo:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li><strong>Ubicación</strong> (dejala solo para apps que lo necesiten).</li>
                    <li><strong>Micrófono</strong> y <strong>Cámara</strong> (por app).</li>
                    <li><strong>Historial de actividad</strong> (si aparece).</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Publicidad y sugerencias</h5>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Configuración → Privacidad y seguridad → <strong>General</strong>.</li>
                <li>Desactivá:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li><strong>Id. de publicidad</strong>.</li>
                    <li>Sugerencias y contenido "personalizado" si no te interesan.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Apps "de relleno" (ej: Contactos / People)</h5>
              <p className="mb-2">Si no la usás, lo más limpio es <strong>desinstalarla</strong>:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                <li>Configuración → Aplicaciones → Aplicaciones instaladas.</li>
                <li>Buscá <strong>Contactos</strong> o <strong>People</strong>.</li>
                <li>Desinstalar.</li>
              </ol>
              <p>Si no te deja desinstalarla, al menos evitá que "moleste":</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Configuración → Aplicaciones → (app) → Permisos en segundo plano → <strong>Nunca</strong> (si aparece).</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="7"
          title="Red: estabilidad (sin 'tweaks raros')"
          icon={<Wifi className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">7.1 Restablecer red (si hay problemas)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Red e Internet → Configuración avanzada de red.</li>
            <li>Restablecimiento de red.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">7.2 DNS (opcional)</h4>
          <p className="mb-2">Si tarda en abrir páginas, probá:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Cloudflare: 1.1.1.1 y 1.0.0.1</li>
            <li>Google: 8.8.8.8 y 8.8.4.4</li>
          </ul>
        </Section>

        <Section
          id="8"
          title="Navegador: muchas veces el lento es el browser"
          icon={<Globe className="w-8 h-8" />}
        >

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">8.1 Extensiones</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>Desinstalá las que no uses.</li>
            <li>Ojo con "coupon", "download", "PDF converter" de origen dudoso.</li>
          </ul>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">8.2 Pestañas y memoria</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Muchas pestañas = más RAM.</li>
            <li>Activá Ahorro de memoria (Edge/Chrome) si te sirve.</li>
          </ul>
        </Section>

        <Section
          id="9"
          title="Orden que ayuda a largo plazo"
          icon={<FolderOpen className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">9.1 Escritorio y Descargas</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>Menos archivos en Escritorio.</li>
            <li>Organizá Descargas y borrá instaladores viejos.</li>
          </ul>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">9.2 Espacio libre</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Dejá 15% a 20% libre en C:.</li>
          </ul>
        </Section>

        <Section
          id="10"
          title="Mantenimiento y reparación (cuando algo 'anda raro')"
          icon={<Wrench className="w-8 h-8" />}
        >
          <InfoBox type="warning" icon={<Wrench />} title="Cuándo usar esta sección">
            <p>Cuelgues, errores raros, archivos corruptos, pantallas azules, o después de apagados bruscos.</p>
          </InfoBox>


          <h4 className="text-lg font-bold text-portfolio-orange mb-3">10.1 SFC (reparar archivos del sistema)</h4>
          <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
            <li>Abrí Terminal o CMD como administrador.</li>
            <li>Ejecutá:</li>
          </ol>
          <CodeBlock code="sfc /scannow" language="bash" />
          <ol className="list-decimal list-inside space-y-2 ml-4 mt-2" start={3}>
            <li>Reiniciá.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3 mt-6">10.2 DISM (si SFC no alcanza)</h4>
          <p className="mb-4">Ejecutá Terminal o CMD como admin.</p>

          <div className="space-y-4">
            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Paso 1: Chequeos rápidos (no cambian nada)</h5>
              <CodeBlock code="DISM /Online /Cleanup-Image /CheckHealth" language="bash" />
              <CodeBlock code="DISM /Online /Cleanup-Image /ScanHealth" language="bash" />
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Paso 2: Reparar la imagen (el más usado)</h5>
              <CodeBlock code="DISM /Online /Cleanup-Image /RestoreHealth" language="bash" />
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Paso 3 (opcional): Limpieza de componentes</h5>
              <p className="mb-2 italic text-portfolio-text">Útil si Windows Update se pone pesado o si querés "ordenar" el almacén de componentes.</p>
              <CodeBlock code="DISM /Online /Cleanup-Image /StartComponentCleanup" language="bash" />
            </div>

            <div>
              <h5 className="font-bold mb-2 text-portfolio-text-light">Después de DISM</h5>
              <CodeBlock code="sfc /scannow" language="bash" />
            </div>
          </div>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3 mt-6">10.3 CHKDSK (revisar y reparar el disco)</h4>
          <div className="space-y-4">
            <div>
              <p className="mb-2">Chequeo:</p>
              <CodeBlock code="chkdsk C:" language="bash" />
            </div>

            <div>
              <p className="mb-2">Reparar sistema de archivos:</p>
              <CodeBlock code="chkdsk C: /f" language="bash" />
            </div>

            <div>
              <p className="mb-2">Búsqueda más profunda (puede tardar):</p>
              <CodeBlock code="chkdsk C: /f /r" language="bash" />
            </div>
          </div>

          <InfoBox type="info" icon={<Clock />} title="">
            <p><code className="px-2 py-0.5 bg-portfolio-deep border border-portfolio-accent rounded text-portfolio-text-light">chkdsk /r</code> puede tardar bastante. Hacelo cuando no necesites la PC por un rato.</p>
          </InfoBox>
        </Section>

        <Section
          id="11"
          title="Diagnóstico (si sigue lento)"
          icon={<Settings className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">11.1 Medir qué está consumiendo</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Administrador de tareas → Procesos.</li>
            <li>Ordená por CPU, Memoria y Disco.</li>
            <li>Identificá el proceso que más consume.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">11.2 Temperatura (usuarios técnicos)</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Síntoma: se pone lenta bajo carga.</li>
            <li>Causa: thermal throttling.</li>
            <li>Solución típica: limpieza de polvo, mejor ventilación o técnico.</li>
          </ul>
        </Section>

        <Section
          id="12"
          title="Checklist rápido"
          icon={<CheckCircle2 className="w-8 h-8" />}
        >
          <Checklist items={[
            'Windows actualizado',
            'Programas innecesarios desinstalados',
            'Temporales limpiados (Configuración o Win + R)',
            'Inicio optimizado',
            'Plan de energía correcto',
            'SSD optimizado / HDD desfragmentado',
            'Navegador liviano',
            'Defender activo',
            'Reparación (SFC/DISM/CHKDSK) si había síntomas'
          ]} />
        </Section>

        <Section
          id="13"
          title="Qué NO recomiendo"
          icon={<XCircle className="w-8 h-8" />}
        >
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Registry cleaners.</li>
            <li>Game boosters genéricos.</li>
            <li>Scripts de internet que deshabilitan servicios sin explicar impacto.</li>
            <li>Desactivar Defender sin un motivo real.</li>
          </ul>
        </Section>

        <Section
          id="14"
          title="FAQ"
          icon={<HelpCircle className="w-8 h-8" />}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2 text-portfolio-text-light">¿Cuánta RAM necesito?</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Básico: 8 GB.</li>
                <li>Muchas pestañas: 16 GB.</li>
                <li>Video, VMs, desarrollo: 16–32 GB.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-portfolio-text-light">¿Qué mejora más una PC vieja?</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HDD → SSD suele ser el mayor salto.</li>
                <li>Agregar RAM ayuda si el sistema está paginando.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-portfolio-text-light">¿Formatear es la solución?</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A veces sí.</li>
                <li>Primero probá limpieza + inicio + reparación.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="15"
          title="Particionar el disco (separar sistema y archivos personales)"
          icon={<HardDrive className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">Para qué sirve (en simple)</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>C: → Windows + programas.</li>
            <li>D: → tus archivos personales.</li>
          </ul>
          <p className="mb-4"><strong>Ventajas:</strong> reinstalar Windows más fácil, menos desorden, backups más claros.</p>

          <InfoBox type="info" icon={<HardDrive />} title="">
            <p>Particionar no hace magia con el rendimiento. Es una mejora de organización y recuperación.</p>
          </InfoBox>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">Cómo hacerlo con Administrador de discos</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
            <li>Clic derecho en Inicio → Administración de discos.</li>
            <li>Clic derecho en C: → Reducir volumen.</li>
            <li>Elegí cuánto querés quitarle a C:.</li>
            <li>En Espacio no asignado → Nuevo volumen simple.</li>
            <li>Letra (D:), nombre (Datos) y formato NTFS.</li>
          </ol>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">Tip: mover Documentos/Descargas a D:</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Explorador de archivos.</li>
            <li>Clic derecho en Documentos → Propiedades.</li>
            <li>Ubicación → Mover… → elegí <code className="px-2 py-0.5 bg-portfolio-deep border border-portfolio-accent rounded text-portfolio-text-light">D:\Documentos</code>.</li>
          </ol>
        </Section>

        <Section
          id="16"
          title="Tips y trucos extra (seguros)"
          icon={<Zap className="w-8 h-8" />}
        >
          <h4 className="text-lg font-bold text-portfolio-orange mb-3">16.1 Reinicio "limpio"</h4>
          <p className="mb-4">A veces se siente lenta por días sin reiniciar.</p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>Reiniciá (no solo "apagar").</li>
          </ul>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">16.2 Apps residentes</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>Configuración → Aplicaciones → app → Permisos en segundo plano → Nunca (si aplica).</li>
          </ul>

          <h4 className="text-lg font-bold text-portfolio-orange mb-3">16.3 Cuando borrar temporales "no deja"</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Elegí Omitir.</li>
            <li>No pasa nada: son archivos en uso.</li>
          </ul>
        </Section>

        <Section
          id="17"
          title="Mantenimiento sugerido"
          icon={<Clock className="w-8 h-8" />}
        >
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Semanal:</strong> Descargas y temporales.</li>
            <li><strong>Mensual:</strong> Inicio y desinstalar lo que no uses.</li>
            <li><strong>Trimestral:</strong> almacenamiento y SFC/DISM/CHKDSK si hay síntomas.</li>
          </ul>
        </Section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
