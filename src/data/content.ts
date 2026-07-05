import {
  IconGear,
  IconFlame,
  IconTools,
  IconFactory,
  IconTruck,
  IconSilo,
  IconChassis,
  IconShield,
  IconPlant,
  IconBuilding,
  IconCubes,
  IconMountain,
  IconWheat,
  IconHandshake,
  IconWrench,
  IconTrendUp,
  IconCalendar,
  IconChart,
  IconBattery,
  IconClock,
} from "../components/Icons";

/* ------------------------------------------------------------------ */
/*  CONTACTO — edita estos datos con la información real de VULKRON    */
/* ------------------------------------------------------------------ */
export const CONTACT = {
  /** Correo donde llegarán los mensajes del formulario. */
  email: "contacto@vulkron.com",
  /** Teléfono visible (formato libre). */
  phone: "+591 700 00000",
  /** Número de WhatsApp en formato internacional SIN "+" ni espacios. */
  whatsapp: "59170000000",
  /** Ciudad / dirección. */
  location: "Santa Cruz, Bolivia",
};

export const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#reparacion", label: "Reparación" },
  { href: "#sectores", label: "Sectores" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export const ABOUT_POINTS = [
  { icon: IconGear, text: "Ingeniería metalmecánica de precisión." },
  { icon: IconFlame, text: "Soldadura industrial de alta resistencia." },
  {
    icon: IconWrench,
    text: "Reparación y mantenimiento preventivo/correctivo de maquinaria pesada y equipos industriales.",
  },
];

export const SERVICES = [
  {
    icon: IconTools,
    title: "Servicios Industriales",
    text: "Mantenimiento correctivo y preventivo integral para plantas e infraestructura industrial de alta exigencia.",
  },
  {
    icon: IconFlame,
    title: "Soldadura Industrial",
    text: "Soldadura de alta calidad, reparaciones estructurales y aplicaciones especiales en aleaciones diversas.",
  },
  {
    icon: IconFactory,
    title: "Fabricación Metalmecánica",
    text: "Construcción de estructuras metálicas livianas y pesadas, pasarelas, galpones y montajes mecánicos.",
  },
];

export const REPAIR_ITEMS = [
  { icon: IconTruck, label: "Mixers" },
  { icon: IconPlant, label: "Plantas de Hormigón" },
  { icon: IconGear, label: "Equipos Hidráulicos" },
  { icon: IconSilo, label: "Silos y Tolvas" },
  { icon: IconChassis, label: "Chasis y Bastidores" },
  { icon: IconShield, label: "Comp. Estructurales" },
];

export const SECTORS = [
  { icon: IconBuilding, label: "Constructoras" },
  { icon: IconCubes, label: "Hormigoneras" },
  { icon: IconFactory, label: "Industria" },
  { icon: IconMountain, label: "Minería" },
  { icon: IconWheat, label: "Agroindustria" },
  { icon: IconTruck, label: "Transp. Pesado" },
  { icon: IconHandshake, label: "Empresas de Servicios" },
];

export const BENEFITS = [
  { icon: IconTrendUp, text: "Mayor disponibilidad operativa de equipos." },
  { icon: IconClock, text: "Reducción drástica de tiempos de parada." },
  { icon: IconChart, text: "Disminución notable de costos correctivos." },
  { icon: IconBattery, text: "Incremento real de la vida útil de los activos." },
  { icon: IconCalendar, text: "Mejor planificación y control del mantenimiento diario." },
  { icon: IconTrendUp, text: "Mayor productividad global en la planta." },
];

export const COMMITMENTS = [
  {
    num: "01",
    title: "Seguridad",
    text: "Cero incidentes como prioridad fundamental en cada maniobra y soldadura.",
  },
  {
    num: "02",
    title: "Calidad",
    text: "Precisión técnica certificada bajo estrictas normas internacionales.",
  },
  {
    num: "03",
    title: "Productividad",
    text: "Optimización del tiempo para devolver sus equipos al trabajo activo rápido.",
  },
  {
    num: "04",
    title: "Confiabilidad",
    text: "Relaciones sólidas a largo plazo basadas en la honestidad y durabilidad.",
  },
];

export const SERVICE_OPTIONS = [
  "Servicios Industriales",
  "Soldadura Industrial",
  "Fabricación Metalmecánica",
  "Reparación de Maquinaria Pesada",
  "Mantenimiento Preventivo/Correctivo",
  "Otro",
];
