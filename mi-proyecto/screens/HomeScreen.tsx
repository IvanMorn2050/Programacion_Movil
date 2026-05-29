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
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1200&auto=format&fit=crop';
const SEPARADOR =
  'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop';

const AMARILLO = '#FFE81F';
const FONDO = '#0a0a0a';
const TARJETA_BG = '#111827';

type Personaje = {
  id: number;
  nombre: string;
  rol: string;
  faccion: string;
  colorFaccion: string;
  descripcion: string;
  imagen: string;
};

const personajes: Personaje[] = [
  {
    id: 1,
    nombre: 'Darth Vader',
    rol: 'Señor Oscuro Sith',
    faccion: 'Imperio Galáctico',
    colorFaccion: '#FF4444',
    descripcion:
      'Antes conocido como Anakin Skywalker, traicionó a la Orden Jedi y se convirtió en el arma más poderosa del Emperador.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg',
  },
  {
    id: 2,
    nombre: 'Luke Skywalker',
    rol: 'Caballero Jedi',
    faccion: 'Alianza Rebelde',
    colorFaccion: '#4CAF50',
    descripcion:
      'El hijo de Vader y última esperanza de la galaxia. Destruyó la Estrella de la Muerte y redimió a su padre.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png',
  },
  {
    id: 3,
    nombre: 'Yoda',
    rol: 'Gran Maestro Jedi',
    faccion: 'Orden Jedi',
    colorFaccion: '#4CAF50',
    descripcion:
      'El ser más sabio de la galaxia. Entrenó a Jedi por más de 800 años y dejó lecciones eternas sobre la Fuerza.',
    imagen:
      'https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png',
  },
  {
    id: 4,
    nombre: 'Rey Skywalker',
    rol: 'Jedi',
    faccion: 'Resistencia',
    colorFaccion: '#4CAF50',
    descripcion:
      'Encontró su conexión con la Fuerza en Jakku. Venció al Emperador y llevó la paz de regreso a la galaxia.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Rey_Star_Wars.png',
  },
  {
    id: 5,
    nombre: 'Kylo Ren',
    rol: 'Maestro Supremo',
    faccion: 'Primera Orden',
    colorFaccion: '#FF4444',
    descripcion:
      'Nieto de Darth Vader, cayó al Lado Oscuro pero finalmente encontró la redención como Ben Solo.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Kylo_Ren_TLJ.png',
  },
  {
    id: 6,
    nombre: 'Obi-Wan Kenobi',
    rol: 'Maestro Jedi',
    faccion: 'Orden Jedi',
    colorFaccion: '#4CAF50',
    descripcion:
      'Guardián de la República y mentor de Anakin Skywalker. Su sacrificio permitió el triunfo de la Fuerza.',
    imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Ben_Kenobi.jpg',
  },
];

type Props = { onAbrirMenu: () => void };

export default function HomeScreen({ onAbrirMenu }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: FONDO }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* ── HERO ── */}
        <ImageBackground source={{ uri: HERO_BG }} style={styles.hero}>
          <View style={styles.heroOverlay}>
            <Pressable onPress={onAbrirMenu} style={styles.hamburger}>
              <View style={styles.linea} />
              <View style={styles.linea} />
              <View style={styles.linea} />
            </Pressable>
            <Text style={styles.heroCrawl}>EN UNA GALAXIA MUY MUY LEJANA…</Text>
            <Text style={styles.heroTitle}>STAR{'\n'}WARS</Text>
            <View style={styles.heroDivider} />
            <Text style={styles.heroSubtitle}>La saga más épica del universo</Text>
          </View>
        </ImageBackground>

        {/* ── LA SAGA ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>LA SAGA</Text>
          <Text style={styles.seccionTexto}>
            Durante miles de años, la Fuerza ha guiado el destino de una galaxia entera. Jedi y Sith,
            la luz y la oscuridad, han librado una batalla eterna por el equilibrio del universo.
            Esta es la historia de héroes, villanos y la esperanza que nunca muere.
          </Text>
        </View>

        {/* ── SEPARADOR IMAGEN ── */}
        <Image source={{ uri: SEPARADOR }} style={styles.bannerImg} />

        {/* ── PERSONAJES ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>PERSONAJES ICÓNICOS</Text>
          {personajes.map((p) => (
            <View key={p.id} style={styles.tarjeta}>
              <Image source={{ uri: p.imagen }} style={styles.tarjetaImg} />
              <View style={styles.tarjetaInfo}>
                <Text style={styles.tarjetaNombre}>{p.nombre}</Text>
                <Text style={styles.tarjetaRol}>{p.rol}</Text>
                <View style={[styles.badge, { borderColor: p.colorFaccion }]}>
                  <Text style={[styles.badgeTexto, { color: p.colorFaccion }]}>
                    {p.faccion}
                  </Text>
                </View>
                <Text style={styles.tarjetaDesc}>{p.descripcion}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── CITA FINAL ── */}
        <View style={styles.cita}>
          <Text style={styles.citaTexto}>"Que la Fuerza te acompañe."</Text>
          <Text style={styles.citaAutor}>— Maestro Obi-Wan Kenobi</Text>
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
  container: { flex: 1, backgroundColor: FONDO },
  content: { paddingBottom: 0 },

  hero: { width, height: 420 },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  hamburger: {
    position: 'absolute',
    top: 48,
    left: 20,
    padding: 8,
    gap: 5,
  },
  linea: {
    width: 24,
    height: 2,
    backgroundColor: AMARILLO,
    marginVertical: 2,
  },
  heroCrawl: {
    color: AMARILLO,
    fontSize: 11,
    letterSpacing: 4,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  heroTitle: {
    color: AMARILLO,
    fontSize: 64,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 68,
    letterSpacing: 8,
  },
  heroDivider: {
    width: 80,
    height: 2,
    backgroundColor: AMARILLO,
    marginVertical: 16,
  },
  heroSubtitle: { color: '#ccc', fontSize: 15, letterSpacing: 2, textAlign: 'center' },

  seccion: { paddingHorizontal: 20, paddingVertical: 28 },
  seccionTitulo: {
    color: AMARILLO,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: 14,
    borderLeftWidth: 3,
    borderLeftColor: AMARILLO,
    paddingLeft: 10,
  },
  seccionTexto: { color: '#aaa', fontSize: 15, lineHeight: 24 },

  bannerImg: { width, height: 180 },

  tarjeta: {
    backgroundColor: TARJETA_BG,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  tarjetaImg: { width: 110, height: 140 },
  tarjetaInfo: { flex: 1, padding: 12, justifyContent: 'center' },
  tarjetaNombre: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 2 },
  tarjetaRol: { color: '#9ca3af', fontSize: 12, marginBottom: 8, letterSpacing: 1 },
  badge: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 8,
  },
  badgeTexto: { fontSize: 11, fontWeight: '600', letterSpacing: 0.5 },
  tarjetaDesc: { color: '#6b7280', fontSize: 12, lineHeight: 18 },

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
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 28,
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
