import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const HERO_BG =
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop';

const AMARILLO = '#FFE81F';
const FONDO = '#0a0a0a';
const TARJETA_BG = '#111827';

type Planeta = {
  id: number;
  nombre: string;
  tipo: string;
  clima: string;
  colorClima: string;
  descripcion: string;
  dato: string;
  imagen: string;
};

const planetas: Planeta[] = [
  {
    id: 1,
    nombre: 'Tatooine',
    tipo: 'Planeta desértico',
    clima: 'Árido',
    colorClima: '#F59E0B',
    descripcion:
      'Mundo de doble sol en el Borde Exterior. Hogar de Anakin y Luke Skywalker. Dominado por los Hutts y conocido por las carreras de vainas en Mos Espa.',
    dato: '2 soles • 3 lunas',
    imagen:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    nombre: 'Coruscant',
    tipo: 'Ecumenópolis',
    clima: 'Templado artificial',
    colorClima: '#3B82F6',
    descripcion:
      'Capital galáctica completamente cubierta por una ciudad. Sede del Senado Galáctico y del Templo Jedi. El centro del poder político de la galaxia.',
    dato: 'Población: 1 trillón',
    imagen:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    nombre: 'Hoth',
    tipo: 'Planeta de hielo',
    clima: 'Ártico extremo',
    colorClima: '#93C5FD',
    descripcion:
      'Planeta helado en el sistema Hoth. Sede de la Base Eco de la Alianza Rebelde. Hogar de los peligrosos Wampas y los Tauntauns.',
    dato: '-60°C de media',
    imagen:
      'https://images.unsplash.com/photo-1551415923-a2297c7fda79?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    nombre: 'Endor',
    tipo: 'Luna forestal',
    clima: 'Templado',
    colorClima: '#4CAF50',
    descripcion:
      'Luna boscosa habitada por los Ewoks. Escenario de la batalla final que derrocó al Imperio. Aquí fue destruida la segunda Estrella de la Muerte.',
    dato: 'Luna de gas gigante',
    imagen:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    nombre: 'Naboo',
    tipo: 'Planeta verde',
    clima: 'Templado',
    colorClima: '#10B981',
    descripcion:
      'Hermoso planeta de praderas y cascadas. Hogar de la Reina Amidala y el joven Palpatine. Bajo su superficie viven los Gungan en ciudades submarinas.',
    dato: 'Cuna del Senador Palpatine',
    imagen:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    nombre: 'Mustafar',
    tipo: 'Planeta volcánico',
    clima: 'Extremadamente caliente',
    colorClima: '#EF4444',
    descripcion:
      'Mundo de lava y fuego donde Obi-Wan Kenobi y Anakin Skywalker libraron su duelo definitivo. Aquí nació Darth Vader tal como lo conocemos.',
    dato: 'Superficie de lava activa',
    imagen:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  },
];

type Props = { onAbrirMenu: () => void };

export default function PlanetasScreen({ onAbrirMenu }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: FONDO }}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* ── HERO ── */}
        <ImageBackground source={{ uri: HERO_BG }} style={styles.hero}>
          <View style={styles.heroOverlay}>
            <Pressable onPress={onAbrirMenu} style={styles.hamburger}>
              <View style={styles.linea} />
              <View style={styles.linea} />
              <View style={styles.linea} />
            </Pressable>
            <Text style={styles.heroCrawl}>ATLAS GALÁCTICO</Text>
            <Text style={styles.heroTitulo}>PLANETAS</Text>
            <View style={styles.heroDivider} />
            <Text style={styles.heroSubtitulo}>Los mundos más icónicos de la galaxia</Text>
          </View>
        </ImageBackground>

        {/* ── INTRO ── */}
        <View style={styles.intro}>
          <Text style={styles.introTexto}>
            La galaxia alberga millones de mundos habitados. Estos son los planetas que
            forjaron el destino de la saga y cambiaron el curso de la historia galáctica para siempre.
          </Text>
        </View>

        {/* ── LISTA DE PLANETAS ── */}
        <View style={styles.lista}>
          {planetas.map((p) => (
            <View key={p.id} style={styles.tarjeta}>
              {/* Imagen del planeta */}
              <Image source={{ uri: p.imagen }} style={styles.tarjetaImg} />

              {/* Overlay con número */}
              <View style={styles.numeroBadge}>
                <Text style={styles.numeroTexto}>{String(p.id).padStart(2, '0')}</Text>
              </View>

              {/* Contenido */}
              <View style={styles.tarjetaBody}>
                <View style={styles.tarjetaHeader}>
                  <View style={styles.headerTextos}>
                    <Text style={styles.planetaNombre}>{p.nombre}</Text>
                    <Text style={styles.planetaTipo}>{p.tipo}</Text>
                  </View>
                  <View style={[styles.climaBadge, { borderColor: p.colorClima }]}>
                    <Text style={[styles.climaTexto, { color: p.colorClima }]}>{p.clima}</Text>
                  </View>
                </View>

                <Text style={styles.planetaDesc}>{p.descripcion}</Text>

                <View style={styles.datoRow}>
                  <View style={styles.datoIndicador} />
                  <Text style={styles.datoTexto}>{p.dato}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* ── CITA ── */}
        <View style={styles.cita}>
          <Text style={styles.citaTexto}>"Hay un mundo más allá de lo que conoces."</Text>
          <Text style={styles.citaAutor}>— El Mandaloriano</Text>
        </View>

        {/* ── FOOTER ── */}
        <View style={styles.footer}>
          <Text style={styles.footerTexto}>© STAR WARS • LUCASFILM LTD.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 0 },

  hero: { width, height: 280 },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.70)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  hamburger: { position: 'absolute', top: 48, left: 20, padding: 8 },
  linea: { width: 24, height: 2, backgroundColor: AMARILLO, marginVertical: 2 },
  heroCrawl: { color: AMARILLO, fontSize: 11, letterSpacing: 4, fontStyle: 'italic', marginBottom: 8 },
  heroTitulo: { color: '#fff', fontSize: 48, fontWeight: '900', letterSpacing: 10, textAlign: 'center' },
  heroDivider: { width: 60, height: 2, backgroundColor: AMARILLO, marginVertical: 14 },
  heroSubtitulo: { color: '#ccc', fontSize: 13, letterSpacing: 2, textAlign: 'center' },

  intro: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  introTexto: { color: '#9ca3af', fontSize: 15, lineHeight: 24, textAlign: 'center' },

  lista: { paddingHorizontal: 20, paddingTop: 20 },

  tarjeta: {
    backgroundColor: TARJETA_BG,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  tarjetaImg: { width: '100%', height: 160 },

  numeroBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: AMARILLO,
  },
  numeroTexto: { color: AMARILLO, fontSize: 13, fontWeight: '800', letterSpacing: 1 },

  tarjetaBody: { padding: 16 },

  tarjetaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  headerTextos: { flex: 1, marginRight: 8 },
  planetaNombre: { color: '#fff', fontSize: 20, fontWeight: '800' },
  planetaTipo: { color: '#6b7280', fontSize: 12, letterSpacing: 1, marginTop: 2 },

  climaBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  climaTexto: { fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },

  planetaDesc: { color: '#9ca3af', fontSize: 13, lineHeight: 20, marginBottom: 12 },

  datoRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  datoIndicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AMARILLO,
  },
  datoTexto: { color: AMARILLO, fontSize: 12, fontWeight: '600', letterSpacing: 1 },

  cita: {
    backgroundColor: '#0f172a',
    marginHorizontal: 20,
    marginBottom: 28,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e3a5f',
  },
  citaTexto: {
    color: AMARILLO,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 10,
  },
  citaAutor: { color: '#6b7280', fontSize: 13, letterSpacing: 1 },

  footer: {
    backgroundColor: '#050505',
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
  },
  footerTexto: { color: '#374151', fontSize: 11, letterSpacing: 3 },
});
