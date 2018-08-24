import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  headerRight: {
    marginRight: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.screenHeight / 3,
  },
});

export default styles;
