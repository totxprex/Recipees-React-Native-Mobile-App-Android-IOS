import { StyleSheet, Platform, StatusBar } from "react-native"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bgImage: {
    flex: 1,
  },
  img: {
    width: 20,
    height: 20,
    opacity: 0.3,
  },
  searchImg: {
    width: 15,
    height: 15,
    opacity: 0.5,
  },
  love: {
    position: "absolute",
    zIndex: 50,
    elevation: 50,
    marginLeft: 20,
    flex: 0.1
  },
  close: {
    position: "absolute",
    zIndex: 50,
    elevation: 50,
    marginLeft: 320,
    flex: 0.1
  },
  mainCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  navCont: {
    flex: 0.1,
    backgroundColor: "rgb(241, 252, 251)",
    minHeight: 55,
    maxHeight: 55,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  engineCont: {
    flex: 0.9,
  },
  searchCont: {
    flex: 0.1,
    minHeight: 50,
    maxHeight: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "white",
    borderWidth: 1,
    height: 40,
    borderRadius: 2,
    borderColor: "white",
    padding: 5,
    paddingLeft: 40,
    elevation: 15,
    shadowOffset: 10,
    shadowOpacity: 10,
    flex: 1,
    zIndex: 5,
    position: "relative",
    zIndex: 2,
    position: "relative"
  },
  recipeListCont: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10
  },
  loggedInCont: {
    flexDirection: "column",
    padding: 10,
    flex: 1
  },
  recipeListCont2: {
    flexDirection: "column",
    padding: 10
  },
  cardCont: {
    height: 270,
    width: "95%",
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    elevation: 1,
    borderRadius: 5,
    overflow: "hidden"
  },
  cardCont2: {
    height: "auto",
    width: "99%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    elevation: 1,
    borderRadius: 2,
    overflow: "hidden",
    padding: 10,
    shadowOffset: 10,
    shadowOpacity: 10,
    marginBottom: 60
  },

  cardImg: {
    width: 345,
    height: 160,
    transform: [{ "skewY": "-4deg" }],
    marginTop: -15,
    marginLeft: -15,
    marginRight: -5,
    borderWidth: 0.5,
    borderColor: "white",
    elevation: 3,
  },
  cardImg2: {
    width: 300,
    height: 160,
    elevation: 10,
  },
  detailsCont: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 10,
  },
  status: {
    flex: 1,
    alignItems: "flex-start",
    padding: 0,
    flexDirection: "column",
  },
  starImg: {
    width: 70,
    height: 20,
    marginBottom: 5
  },
  heading: {
    color: "#444444",
    fontSize: 20,
    opacity: 0.8,
    marginBottom: 5
  },
  normalText: {
    color: "#444444",
    opacity: 0.8,
    marginBottom: 5
  },
  liked: {
    elevation: 20,
    position: "absolute",
    marginLeft: "90%",
    marginTop: "5%",
    zIndex: 100,
  },
  settingsCont: {
    flex: 1,
    alignItems: "center"
  },
  settingsheader: {
    flex: 0.5,
    width: "100%",
    alignItems: "center"
  },
  settingsList: {
    flex: 0.5,
    width: "100%",
    padding: 10
  },
  settingsImage: {
    width: "100%",
    height: 220,
    opacity: 0.7,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  userImage: {
    width: "35%",
    height: "60%",
    borderRadius: 80,
    elevation: 3
  },
  imgCont: {
    width: "100%",
    marginTop: -60,
    elevation: 0.1,
    alignItems: "center"
  },
  settingsCard: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10
  },
  settingsCardIn1: {
    flex: 0.7,
    flexDirection: "row",
    alignItems: "center"
  },
  settingsCardIn2: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});


export default styles


