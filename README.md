# Adaptive Learning Platform

An adaptive educational platform designed to provide personalized learning experiences through dynamic quiz generation, difficulty adjustment, student progress tracking, and parent insights.

## Overview

This project transforms a traditional quiz application into a modular adaptive learning system. The platform tracks student performance, identifies learning gaps, adjusts question difficulty, and provides personalized recommendations based on mastery and historical performance.

The system was designed with a focus on accessibility and individualized learning, supporting students who benefit from structured, responsive educational experiences.

## Features

### Adaptive Quiz Engine
- Dynamically selects questions based on student performance
- Adjusts difficulty levels based on correct and incorrect answer streaks
- Prioritizes weaker topics to improve mastery
- Tracks question history and student progress

### Student Management
- Create, rename, switch between, and delete student profiles
- Store individual learning progress
- Resume student sessions independently

### Parent Dashboard
- View student performance analytics
- Track:
  - Overall accuracy
  - Questions completed
  - Current streaks
  - Topic mastery
  - Areas requiring improvement
- Receive personalized practice recommendations

### Progress Tracking
- Records every question attempt
- Tracks performance by topic
- Calculates mastery levels
- Identifies weak learning areas

### Modular Architecture
The application was refactored from a legacy educational platform into a cleaner architecture by separating:

- Quiz logic
- Adaptive learning algorithms
- Speech and accessibility systems
- UI components
- Data management
- Analytics services

This separation improves maintainability, scalability, and future feature development.

---

# Technology Stack

## Frontend
- React
- JavaScript
- Component-based UI architecture
- CSS styling

## Backend
- Python
- Flask
- SQLite
- REST API architecture

## Data Processing
- Adaptive question selection
- Student performance analytics
- Mastery calculations

---

# Project 
https://adaptive-learning-platform-rfehhobn0-supriya13.vercel.app/
