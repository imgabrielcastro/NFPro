import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useTheme, Text, Card, Avatar } from "react-native-paper";
import mockData from "../../data/mockData.json";

interface Usuario {
  Id: number;
  Nome: string;
  Sexo: string;
  DataNascimento: string;
  Fone: string;
  Email: string;
  Cpf: string | null;
  Situacao: string;
}

export default function ClientsContainer() {
  const { colors } = useTheme();
  const usuarios = (mockData as any).usuarios || [];

  if (!usuarios.length) {
    return (
      <View style={styles.container}>
        <Text variant="titleMedium">Nenhum usuário encontrado</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <Avatar.Icon size={40} icon="account" />
                <View style={styles.cardInfo}>
                  <Text variant="titleMedium" style={styles.name}>
                    {item.Nome}
                  </Text>
                  <View style={styles.statusContainer}>
                    <Text variant="bodyMedium" style={[styles.status, { color: item.Situacao.toLowerCase() === 'ativo' ? '#4CAF50' : '#9E9E9E' }]}>
                      {item.Situacao}
                    </Text>
                    <Text variant="bodyMedium" style={styles.gender}>
                      {item.Sexo}
                    </Text>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    marginVertical: 8,
    
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  status: {
    color: '#4CAF50',
  },
  gender: {
    color: '#2196F3',
  },
});
