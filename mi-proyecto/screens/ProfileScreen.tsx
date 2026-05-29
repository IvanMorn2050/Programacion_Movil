import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const HERO_BG =
  'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200&auto=format&fit=crop';

const AMARILLO = '#FFE81F';
const FONDO = '#0a0a0a';
const TARJETA_BG = '#111827';

type Habilidad = { nombre: string; nivel: number; color: string };

const habilidades: Habilidad[] = [
  { nombre: 'React Native', nivel: 75, color: '#61DAFB' },
  { nombre: 'TypeScript',   nivel: 70, color: '#3178C6' },
  { nombre: 'Expo',         nivel: 80, color: '#FFFFFF' },
  { nombre: 'Java',         nivel: 65, color: '#F89820' },
  { nombre: 'Git',          nivel: 72, color: '#F05032' },
];

type Stat = { valor: string; etiqueta: string };

const stats: Stat[] = [
  { valor: '9',  etiqueta: 'Semestre' },
  { valor: '12', etiqueta: 'Proyectos' },
  { valor: '4',  etiqueta: 'Años exp.' },
];

type Props = { onAbrirMenu: () => void };

export default function ProfileScreen({ onAbrirMenu }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: FONDO }}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* ── HERO BANNER ── */}
        <ImageBackground source={{ uri: HERO_BG }} style={styles.hero}>
          <View style={styles.heroOverlay}>
            <Pressable onPress={onAbrirMenu} style={styles.hamburger}>
              <View style={styles.linea} />
              <View style={styles.linea} />
              <View style={styles.linea} />
            </Pressable>
            <Text style={styles.heroCrawl}>FICHA DEL PADAWAN</Text>
            <Text style={styles.heroTitulo}>MI PERFIL</Text>
            <View style={styles.heroDivider} />
          </View>
        </ImageBackground>

        {/* ── TARJETA PRINCIPAL ── */}
        <View style={styles.tarjetaPrincipal}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarLetra}>I</Text>
            </View>
            <View style={styles.avatarBadge}>
              <Text style={styles.avatarBadgeTexto}>Jedi Dev</Text>
            </View>
          </View>

          <Text style={styles.nombre}>Ivan Morno</Text>
          <Text style={styles.cargo}>Desarrollador Móvil</Text>
          <Text style={styles.universidad}>Ingeniería en Sistemas</Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            {stats.map((s) => (
              <View key={s.etiqueta} style={styles.statItem}>
                <Text style={styles.statValor}>{s.valor}</Text>
                <Text style={styles.statLabel}>{s.etiqueta}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── SOBRE MÍ ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>SOBRE MÍ</Text>
          <Text style={styles.seccionTexto}>
            Estudiante de último semestre apasionado por el desarrollo de aplicaciones móviles.
            Busco crear experiencias de usuario intuitivas y visualmente impactantes.
            Fan de la tecnología, el código limpio y, por supuesto, Star Wars.
          </Text>
        </View>

        {/* ── HABILIDADES ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>HABILIDADES</Text>
          {habilidades.map((h) => (
            <View key={h.nombre} style={styles.habilidadRow}>
              <View style={styles.habilidadHeader}>
                <Text style={styles.habilidadNombre}>{h.nombre}</Text>
                <Text style={[styles.habilidadPct, { color: h.color }]}>{h.nivel}%</Text>
              </View>
              <View style={styles.barraFondo}>
                <View style={[styles.barraRelleno, { width: `${h.nivel}%`, backgroundColor: h.color }]} />
              </View>
            </View>
          ))}
        </View>

        {/* ── INTERESES ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>INTERESES</Text>
          <View style={styles.tagsRow}>
            {['React Native', 'UI/UX Design', 'Star Wars', 'Inteligencia Artificial', 'Open Source', 'Gaming'].map(
              (tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagTexto}>{tag}</Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* ── CONTACTO ── */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>CONTACTO</Text>
          <View style={styles.contactoItem}>
            <View style={styles.contactoIcono}>
              <Text style={styles.contactoIconoTexto}>@</Text>
            </View>
            <Text style={styles.contactoTexto}>ivan.morno25@gmail.com</Text>
          </View>
          <View style={styles.contactoItem}>
            <View style={styles.contactoIcono}>
              <Text style={styles.contactoIconoTexto}>G</Text>
            </View>
            <Text style={styles.contactoTexto}>github.com/IvanMorn2050</Text>
          </View>
        </View>

        {/* ── FOOTER ── */}
        <View style={styles.footer}>
          <Text style={styles.footerTexto}>QUE LA FUERZA TE ACOMPAÑE</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 0 },

  hero: { width, height: 220 },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.70)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: { position: 'absolute', top: 48, left: 20, padding: 8 },
  linea: { width: 24, height: 2, backgroundColor: AMARILLO, marginVertical: 2 },
  heroCrawl: { color: AMARILLO, fontSize: 11, letterSpacing: 4, fontStyle: 'italic', marginBottom: 8 },
  heroTitulo: { color: '#fff', fontSize: 32, fontWeight: '900', letterSpacing: 8 },
  heroDivider: { width: 60, height: 2, backgroundColor: AMARILLO, marginTop: 14 },

  tarjetaPrincipal: {
    backgroundColor: TARJETA_BG,
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1f2937',
    zIndex: 1,
  },
  avatarWrapper: { alignItems: 'center', marginBottom: 12 },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#1e3a5f',
    borderWidth: 3,
    borderColor: AMARILLO,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetra: { color: AMARILLO, fontSize: 40, fontWeight: '900' },
  avatarBadge: {
    marginTop: 6,
    backgroundColor: '#1e3a5f',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: AMARILLO,
  },
  avatarBadgeTexto: { color: AMARILLO, fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  nombre: { color: '#fff', fontSize: 24, fontWeight: '800', marginBottom: 4 },
  cargo: { color: AMARILLO, fontSize: 14, letterSpacing: 2, marginBottom: 2 },
  universidad: { color: '#6b7280', fontSize: 13, marginBottom: 20 },

  statsRow: { flexDirection: 'row', gap: 24 },
  statItem: { alignItems: 'center' },
  statValor: { color: AMARILLO, fontSize: 26, fontWeight: '900' },
  statLabel: { color: '#6b7280', fontSize: 11, letterSpacing: 1 },

  seccion: { paddingHorizontal: 20, paddingVertical: 24 },
  seccionTitulo: {
    color: AMARILLO,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: AMARILLO,
    paddingLeft: 10,
  },
  seccionTexto: { color: '#aaa', fontSize: 15, lineHeight: 24 },

  habilidadRow: { marginBottom: 14 },
  habilidadHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  habilidadNombre: { color: '#d1d5db', fontSize: 14 },
  habilidadPct: { fontSize: 13, fontWeight: '700' },
  barraFondo: { height: 6, backgroundColor: '#1f2937', borderRadius: 3, overflow: 'hidden' },
  barraRelleno: { height: 6, borderRadius: 3 },

  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1e3a5f',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagTexto: { color: '#9ca3af', fontSize: 13 },

  contactoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 12 },
  contactoIcono: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1e3a5f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactoIconoTexto: { color: AMARILLO, fontSize: 16, fontWeight: '900' },
  contactoTexto: { color: '#9ca3af', fontSize: 14 },

  footer: {
    backgroundColor: '#050505',
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    marginTop: 8,
  },
  footerTexto: { color: '#374151', fontSize: 11, letterSpacing: 4 },
});
