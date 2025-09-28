// API service functions for courses and events
const API_BASE_URL = 'https://iqca-backend.onrender.com';

export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  _id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  pdf: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Fetch all courses
export async function fetchAllCourses(): Promise<Course[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

// Fetch a single course by ID
export async function fetchCourseById(id: string): Promise<Course | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch course: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}

// Fetch all events
export async function fetchAllEvents(): Promise<Event[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/events/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

// Fetch a single event by ID
export async function fetchEventById(id: string): Promise<Event | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
}
