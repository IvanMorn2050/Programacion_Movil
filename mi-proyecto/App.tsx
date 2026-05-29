import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlanetasScreen from './screens/PlanetasScreen';

type Pantalla = 'home' | 'perfil' | 'planetas';

const MENU_ANCHO = 260;
const AMARILLO = '#FFE81F';

type OpcionMenu = { label: string; pantalla: Pantalla; simbolo: string };

const opciones: OpcionMenu[] = [
  { label: 'Inicio',    pantalla: 'home',     simbolo: '★' },
  { label: 'Mi Perfil', pantalla: 'perfil',   simbolo: '◉' },
  { label: 'Planetas',  pantalla: 'planetas', simbolo: '◎' },
];

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('home');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_ANCHO)).current;

  const abrirMenu = () => {
    setMenuAbierto(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  };

  const cerrarMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -MENU_ANCHO,
      duration: 220,
      useNativeDriver: true,
    }).start(() => setMenuAbierto(false));
  };

  const navegar = (destino: Pantalla) => {
    cerrarMenu();
    // Espera al cierre del drawer antes de cambiar de pantalla
    setTimeout(() => setPantalla(destino), 230);
  };

  const renderPantalla = () => {
    switch (pantalla) {
      case 'home':     return <HomeScreen    onAbrirMenu={abrirMenu} />;
      case 'perfil':   return <ProfileScreen onAbrirMenu={abrirMenu} />;
      case 'planetas': return <PlanetasScreen onAbrirMenu={abrirMenu} />;
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      {renderPantalla()}

      {/* Overlay oscuro al abrir el menú */}
      {menuAbierto && (
        <Pressable style={styles.overlay} onPress={cerrarMenu} />
      )}

      {/* ── DRAWER DE NAVEGACIÓN ── */}
      <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>

        {/* Cabecera del drawer */}
        <View style={styles.drawerCabecera}>
          <Text style={styles.drawerTitulo}>STAR WARS</Text>
          <View style={styles.drawerDivisor} />
          <Text style={styles.drawerSubtitulo}>NAVEGACIÓN</Text>
        </View>

        {/* Opciones del menú */}
        {opciones.map((op) => {
          const activo = pantalla === op.pantalla;
          return (
            <Pressable
              key={op.pantalla}
              onPress={() => navegar(op.pantalla)}
              style={[styles.opcion, activo && styles.opcionActiva]}
            >
              <Text style={[styles.opcionSimbolo, activo && styles.opcionSimboloActivo]}>
                {op.simbolo}
              </Text>
              <Text style={[styles.opcionLabel, activo && styles.opcionLabelActivo]}>
                {op.label}
              </Text>
              {activo && <View style={styles.opcionIndicador} />}
            </Pressable>
          );
        })}

        {/* Pie del drawer */}
        <View style={styles.drawerFooter}>
          <View style={styles.drawerFooterDivisor} />
          <Text style={styles.drawerFooterTexto}>© LUCASFILM LTD.</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },

  // Fondo oscuro al abrir drawer
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
    zIndex: 10,
  },

  // Drawer lateral
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: MENU_ANCHO,
    backgroundColor: '#080e1a',
    zIndex: 20,
    borderRightWidth: 1,
    borderRightColor: '#FFE81F22',
    paddingTop: 56,
  },

  drawerCabecera: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
    marginBottom: 8,
  },
  drawerTitulo: {
    color: AMARILLO,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 6,
  },
  drawerDivisor: {
    width: 32,
    height: 2,
    backgroundColor: AMARILLO,
    marginVertical: 8,
  },
  drawerSubtitulo: {
    color: '#4b5563',
    fontSize: 10,
    letterSpacing: 4,
  },

  // Cada opción del menú
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  opcionActiva: {
    backgroundColor: '#0f172a',
  },
  opcionSimbolo: {
    color: '#4b5563',
    fontSize: 18,
    width: 28,
  },
  opcionSimboloActivo: {
    color: AMARILLO,
  },
  opcionLabel: {
    color: '#6b7280',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
    flex: 1,
  },
  opcionLabelActivo: {
    color: '#ffffff',
  },
  opcionIndicador: {
    width: 4,
    height: 20,
    backgroundColor: AMARILLO,
    borderRadius: 2,
  },

  // Pie del drawer
  drawerFooter: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  drawerFooterDivisor: {
    height: 1,
    backgroundColor: '#1f2937',
    marginBottom: 16,
  },
  drawerFooterTexto: {
    color: '#374151',
    fontSize: 10,
    letterSpacing: 3,
  },
});
