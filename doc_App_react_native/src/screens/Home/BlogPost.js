// src/screens/BlogPostHome.js
/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

const BlogPostHome = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://192.168.0.11:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to create or update a post
  const handleSubmit = async () => {
    const method = editingPostId ? 'PUT' : 'POST';
    const url = editingPostId 
      ? `http://192.168.0.11:5000/api/posts/${editingPostId}` 
      : 'http://192.168.0.11:5000/api/posts';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setEditingPostId(null);
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to save the post.');
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  // Function to start editing a post
  const startEditing = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setEditingPostId(post._id);
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.100:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{editingPostId ? 'Edit Post' : 'Create Post'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title={editingPostId ? 'Update Post' : 'Create Post'} onPress={handleSubmit} />

      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => startEditing(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  postContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    color: 'blue',
  },
  deleteButton: {
    color: 'red',
  },
});

export default BlogPostHome;
*/
// src/screens/BlogPostHome.js
/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

const BlogPostHome = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://192.168.0.11:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to create or update a post
  const handleSubmit = async () => {
    const method = editingPostId ? 'PUT' : 'POST';
    const url = editingPostId 
      ? `http://192.168.0.11:5000/api/posts/${editingPostId}` 
      : 'http://192.168.0.11:5000/api/posts';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setEditingPostId(null);
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to save the post.');
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  // Function to start editing a post
  const startEditing = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setEditingPostId(post._id);
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.100:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{editingPostId ? 'Edit Post' : 'Create Post'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title={editingPostId ? 'Update Post' : 'Create Post'} onPress={handleSubmit} color="#2196F3" />

      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => startEditing(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF', // Light background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3', // Vibrant blue
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90A4AE', // Muted gray for input borders
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    backgroundColor: '#fff', // White background for inputs
  },
  postContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#90A4AE', // Muted gray for post borders
    borderRadius: 4,
    backgroundColor: '#E3F2FD', // Light blue background for posts
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5', // A slightly darker blue for titles
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333', // Darker text color for readability
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    color: '#2196F3', // Primary blue for edit button
  },
  deleteButton: {
    color: '#FF5722', // Lively coral for delete button
  },
});

export default BlogPostHome;
*/
/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

const BlogPostHome = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://192.168.0.11:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to create or update a post
  const handleSubmit = async () => {
    const method = editingPostId ? 'PUT' : 'POST';
    const url = editingPostId 
      ? `http://192.168.0.11:5000/api/posts/${editingPostId}` 
      : 'http://192.168.0.11:5000/api/posts';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setEditingPostId(null);
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to save the post.');
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  // Function to start editing a post
  const startEditing = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setEditingPostId(post._id);
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.0.11:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Blog Posts</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text}>{editingPostId ? 'Edit Post' : 'Create Post'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title={editingPostId ? 'Update Post' : 'Create Post'} onPress={handleSubmit} color="#2196F3" />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => startEditing(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 60, // Fixed height for header
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3', // Header background color
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#90A4AE',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90A4AE',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#90A4AE',
    borderRadius: 4,
    backgroundColor: '#E3F2FD',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    color: '#2196F3',
  },
  deleteButton: {
    color: '#FF5722',
  },
});

export default BlogPostHome;
*/
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

const BlogPostHome = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://172.23.2.91:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to create or update a post
  const handleSubmit = async () => {
    const method = editingPostId ? 'PUT' : 'POST';
    const url = editingPostId 
      ? `http://172.23.2.91:5000/api/posts/${editingPostId}` 
      : 'http://172.23.2.91:5000/api/posts';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setEditingPostId(null);
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to save the post.');
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  // Function to start editing a post
  const startEditing = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setEditingPostId(post._id);
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://172.23.2.91:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts(); // Refresh the post list
      } else {
        Alert.alert('Error', 'Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Blog Posts</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text}>{editingPostId ? 'Edit Post' : 'Create Post'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title={editingPostId ? 'Update Post' : 'Create Post'} onPress={handleSubmit} color="#007bff" />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => startEditing(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderBottomWidth: 2,
    borderBottomColor: '#90A4AE',
    marginBottom: 20,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  postContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: '#FF5722',
    fontWeight: 'bold',
  },
});

export default BlogPostHome;
