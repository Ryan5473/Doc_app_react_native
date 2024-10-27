import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Home from "./Home/Home";
import { Foundation } from "@expo/vector-icons";
import color from "../constant/color";
import BlogPostHome from "./Home/BlogPost";
import CalculatorHome from "./Home/calculatorHome";
import NotificationHome from "./Home/NotificationHome";
import UserHome from "./Home/UserHome";

const TabView = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={color.white} />
      
      {/* Affichage du composant correspondant à l'onglet actif */}
      {activeTab === "Home" && <Home />}
      {activeTab === "BlogPost" && <BlogPostHome />}
      {activeTab === "Calculator" && <CalculatorHome />}
      {activeTab === "Notification" && <NotificationHome />}
      {activeTab === "User" && <UserHome />}

      <View style={styles.tabContainer}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <View style={styles.button}>
              <Foundation name="home" size={24} color={color.primaryColor} />
              <Text style={{ fontSize: 12, color: color.primaryColor }}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabChange("Calculator")}>
            <Image
              source={require("../asset/icon/calc.jpg")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabChange("BlogPost")}>
            <Image
              source={require("../asset/icon/blog.png")}
              style={{ width: 25, height: 25 }}
            />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabChange("Notification")}>
            <Image
              source={require("../asset/icon/notification.png")}
              style={{ width: 25, height: 25 }}
            />
            <View style={styles.notificationRing} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabChange("User")}>
            <Image
              source={require("../asset/icon/user.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 4,
    height: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#fff",
    paddingBottom: Platform.OS === "ios" ? 17 : 5,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 1,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: color.primaryLight,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 30,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 15,
    height: 15,
    borderRadius: 10,
    alignContent: "center",
    backgroundColor: color.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 10,
    color: color.white,
    textAlign: "center",
  },
  notificationRing: {
    position: "absolute",
    top: 1,
    right: 5,
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: color.primaryColor,
  },
});

export default TabView;