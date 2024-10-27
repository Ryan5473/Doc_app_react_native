// src/screens/UserHome.js
/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserHome = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (!token) {
          Alert.alert('Error', 'No token found, please log in again.');
          return;
        }

        const response = await fetch('http://192.168.0.11:5000/api/auth/getuserdetails', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          Alert.alert('Error', 'Failed to fetch user details. Please log in again.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        Alert.alert('Error', 'An error occurred while fetching user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.text}>User Information</Text>
          <Text style={styles.detail}>Name: {userInfo.name}</Text>
          <Text style={styles.detail}>Prename: {userInfo.prename}</Text>
          <Text style={styles.detail}>Email: {userInfo.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>No user information available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    color: '#555',
    marginVertical: 4,
  },
});

export default UserHome;
*/
// src/screens/UserHome.js
/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserHome = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Fetch the user ID token from AsyncStorage
        const userId = await AsyncStorage.getItem('userId'); // Assuming userId was saved during sign-in
        const token = await AsyncStorage.getItem(`${userId}:token`); // Fetch token using userId

        // Check if token exists
        if (!token) {
          Alert.alert('Error', 'No token found, please log in again.');
          return;
        }

        // Fetch user details from the backend
        const response = await fetch('http://192.168.0.11:5000/api/auth/getuserdetails', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include the JWT token in the header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data); // Set user info in state
        } else {
          Alert.alert('Error', 'Failed to fetch user details. Please log in again.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        Alert.alert('Error', 'An error occurred while fetching user details.');
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []);

  // Show loading indicator while fetching
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render user information
  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.text}>User Information</Text>
          <Text style={styles.detail}>Name: {userInfo.name}</Text>
          <Text style={styles.detail}>Prename: {userInfo.prename}</Text>
          <Text style={styles.detail}>Email: {userInfo.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>No user information available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    color: '#555',
    marginVertical: 4,
  },
});

export default UserHome;

*/
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserHome = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId'); 
        const token = await AsyncStorage.getItem(`${userId}:token`); 

        if (!token) {
          Alert.alert('Error', 'No token found, please log in again.');
          return;
        }

        const response = await fetch('http://172.23.2.91:5000/api/auth/getuserdetails', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data); 
        } else {
          Alert.alert('Error', 'Failed to fetch user details. Please log in again.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        Alert.alert('Error', 'An error occurred while fetching user details.');
      } finally {
        setLoading(false); 
      }
    };

    fetchUserDetails(); 
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5722" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.header}>User Information</Text>
          <Text style={styles.detail}>Name: {userInfo.name}</Text>
          <Text style={styles.detail}>Prename: {userInfo.prename}</Text>
          <Text style={styles.detail}>Email: {userInfo.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>No user information available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8', // Light background color
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F4F8',
  },
  header: {
    fontSize: 28, // Increased font size for header
    fontWeight: 'bold',
    color: '#FF5722', // Changed color for header
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#555',
  },
  detail: {
    fontSize: 18,
    color: '#333',
    marginVertical: 8, // Increased vertical margin for better spacing
  },
});

export default UserHome;
