import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

// Predefined food list with calorie per 100g values
const foodCalorieData = [
  { name: 'Apple', caloriesPer100g: 52 },
  { name: 'Banana', caloriesPer100g: 89 },
  { name: 'Chicken', caloriesPer100g: 165 },
  { name: 'Rice', caloriesPer100g: 130 },
  { name: 'Bread', caloriesPer100g: 250 },
];

// Formulas for calculators
const formulas = [
  {
    id: '1',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI)...',
    inputs: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter your weight in kilograms' },
      { name: 'height', label: 'Height (m)', type: 'number', placeholder: 'Enter your height in meters' }
    ],
    calculate: (weight, height) => (weight / (height * height)).toFixed(2),
  },
  {
    id: '2',
    title: 'Body Fat Percentage Calculator',
    description: 'Calculate your Body Fat Percentage...',
    inputs: [
      { name: 'waist', label: 'Waist Circumference (cm)', type: 'number', placeholder: 'Enter your waist circumference in cm' },
      { name: 'neck', label: 'Neck Circumference (cm)', type: 'number', placeholder: 'Enter your neck circumference in cm' },
      { name: 'height', label: 'Height (cm)', type: 'number', placeholder: 'Enter your height in centimeters' },
      { name: 'hip', label: 'Hip Circumference (cm)', type: 'number', placeholder: 'Enter your hip circumference in cm' },
    ],
    calculate: (waist, neck, height, hip) => {
      // Formula for Body Fat Percentage (for example purposes)
      return (waist + hip - neck - height).toFixed(2);
    },
  },
  {
    id: '3',
    title: 'Caloric Needs Calculator',
    description: 'Calculate your daily caloric needs...',
    inputs: [
      { name: 'weight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter your weight in kilograms' },
      { name: 'height', label: 'Height (cm)', type: 'number', placeholder: 'Enter your height in centimeters' },
      { name: 'age', label: 'Age (years)', type: 'number', placeholder: 'Enter your age in years' },
      { name: 'activityLevel', label: 'Activity Level (1.2 - 1.9)', type: 'number', placeholder: 'Enter your activity level (e.g., 1.5)' },
    ],
    calculate: (weight, height, age, activityLevel) => {
      // Simple Mifflin-St Jeor Equation for BMR
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Assuming male
      const dailyCalories = bmr * activityLevel;
      return dailyCalories.toFixed(2);
    },
  },
];

const CalculatorHome = () => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [modalVisible, setModalVisible] = useState(false);
  const [foodModalVisible, setFoodModalVisible] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState(''); // New state for description

  // Food tracking states
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodQuantity, setFoodQuantity] = useState('');
  const [trackedFoods, setTrackedFoods] = useState([]);
  const [calculatedCalories, setCalculatedCalories] = useState(null);

  const openModal = (formula) => {
    setSelectedFormula(formula);
    setInputs({});
    setResult(null);
    setDescription(''); // Reset description when opening modal
    setModalVisible(true);
  };

  const handleCalculate = () => {
    if (selectedFormula) {
      const calculatedResult = selectedFormula.calculate(...Object.values(inputs));
      setResult(calculatedResult);
    }
  };

  // Function to calculate calories for the selected food based on quantity
  const calculateCalories = () => {
    if (selectedFood && foodQuantity) {
      const caloriesPer100g = selectedFood.caloriesPer100g;
      const totalCalories = ((caloriesPer100g / 100) * parseFloat(foodQuantity)).toFixed(2);
      setCalculatedCalories(totalCalories);
    }
  };

  // Function to add the food entry to the tracked foods list
  const addTrackedFood = () => {
    if (selectedFood && foodQuantity && calculatedCalories) {
      const newFoodEntry = {
        name: selectedFood.name,
        quantity: foodQuantity,
        calories: calculatedCalories,
        time: new Date().toLocaleTimeString(),
      };
      setTrackedFoods([...trackedFoods, newFoodEntry]);
      setSelectedFood(null);
      setFoodQuantity('');
      setCalculatedCalories(null);
    }
  };

  const renderContent = () => {
    if (activeTab === 'calculator') {
      return (
        <FlatList
          data={formulas}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      );
    } else if (activeTab === 'trackFoods') {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView style={styles.trackFoodsContainer}>
            <Text style={styles.header}>Track Your Foods</Text>

            {/* Display the selected food */}
            {selectedFood ? (
              <Text style={styles.selectedFoodText}>
                Selected Food: {selectedFood.name}
              </Text>
            ) : (
              <Text style={styles.selectedFoodText}>No food selected</Text>
            )}

            {/* Button to open food selection modal */}
            <Button title="Select Food" onPress={() => setFoodModalVisible(true)} />

            {selectedFood && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter quantity (in grams)"
                  keyboardType="numeric"
                  value={foodQuantity}
                  onChangeText={setFoodQuantity}
                />
                <Button title="Calculate Calories" onPress={calculateCalories} />

                {calculatedCalories && (
                  <Text style={styles.result}>Calories: {calculatedCalories}</Text>
                )}

                <Button title="Add Food to List" onPress={addTrackedFood} />
              </>
            )}

            <FlatList
              data={trackedFoods}
              renderItem={({ item }) => (
                <View style={styles.foodEntry}>
                  <Text style={styles.foodText}>{item.name} - {item.quantity}g</Text>
                  <Text style={styles.foodText}>Calories: {item.calories} kcal</Text>
                  <Text style={styles.timeText}>Time: {item.time}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>

          {/* Food selection modal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={foodModalVisible}
            onRequestClose={() => setFoodModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Food</Text>
              <FlatList
                data={foodCalorieData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.foodItem}
                    onPress={() => {
                      setSelectedFood(item);
                      setFoodModalVisible(false);
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
              />
              <Button title="Close" onPress={() => setFoodModalVisible(false)} />
            </View>
          </Modal>
        </KeyboardAvoidingView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'calculator' && styles.activeTab]}
          onPress={() => setActiveTab('calculator')}
        >
          <Text style={styles.tabText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'trackFoods' && styles.activeTab]}
          onPress={() => setActiveTab('trackFoods')}
        >
          <Text style={styles.tabText}>Track Foods</Text>
        </TouchableOpacity>
      </View>

      {/* Description input outside the main inputs */}
      {selectedFormula && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description:</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Add a description (optional)"
            value={description}
            onChangeText={setDescription}
          />
        </View>
      )}

      {/* Modal for calculator input */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedFormula?.title}</Text>
          <Text>{selectedFormula?.description}</Text>

          {/* Render input fields */}
          {selectedFormula?.inputs.map((input, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={input.placeholder}
              keyboardType={input.type === 'number' ? 'numeric' : 'default'}
              onChangeText={(value) => setInputs({ ...inputs, [input.name]: value })}
            />
          ))}

          <Button title="Calculate" onPress={handleCalculate} />

          {result && <Text style={styles.result}>Result: {result}</Text>}

          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* Main content rendering */}
      {renderContent()}
    </View>
  );
};
// Enhanced Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    tab: {
      padding: 10,
    },
    activeTab: {
      borderBottomWidth: 3,
      borderBottomColor: '#007bff',
      paddingBottom: 5,
    },
    tabText: {
      fontSize: 16,
      color: '#007bff',
      fontWeight: '600',
    },
    card: {
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: 15,
      color: '#666',
    },
    keyboardView: {
      flex: 1,
    },
    trackFoodsContainer: {
      flex: 1,
      marginBottom: 20,
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#333',
    },
    selectedFoodText: {
      fontSize: 18,
      marginBottom: 10,
      color: '#555',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
      backgroundColor: '#f9f9f9',
    },
    result: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 12,
      color: '#007bff',
    },
    foodEntry: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    foodText: {
      fontSize: 16,
      color: '#444',
    },
    timeText: {
      fontSize: 14,
      color: '#888',
    },
    modalContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 10,
    },
    modalTitle: {
      fontSize: 26,
      marginBottom: 20,
      fontWeight: 'bold',
      color: '#007bff',
    },
    foodItem: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: '#f8f8f8',
    },
    descriptionContainer: {
      marginVertical: 15,
    },
    descriptionLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    descriptionInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
      backgroundColor: '#f9f9f9',
    },
  });
  

export default CalculatorHome;
