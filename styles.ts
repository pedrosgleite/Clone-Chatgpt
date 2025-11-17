import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    alignItems: "center",
  },

  
  header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 60,
      top: 10,
    },
    
    card: {
        width: 50,
        height: 50,
        backgroundColor: "#525151ff",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    
    cardMeio: {
        width: 50,
        height: 50,
        backgroundColor: "#7161ff7e",
        borderRadius: 30,
        paddingHorizontal: 60,
        justifyContent: "center",
        alignItems: "center",
        
    },

    image:{
        width: 30,
        height: 30
    },
    
    textoUp: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffffff",
    },
    
    texto: {
        fontSize: 16,
        fontFamily: "Andale Mono, monospace",
        color: "#ffffffff",
        marginTop: 150,
    },
    
    centro: {
      flex: 1,
      justifyContent: "flex-end",
    },
    
    ajuda: {
      fontSize: 24,
      fontFamily: "Andale Mono, monospace",
      color: "#ffffffff",
    },
    footer: {
      flex: 1,
      justifyContent: "flex-end",
    },
   
    

  barraPesquisa: {
    height: 45,
    paddingHorizontal: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#555555ff",
    backgroundColor: "#525151ff",
    color: "#ffffffff",
  },
});
