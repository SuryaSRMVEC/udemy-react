import React from 'react';
import '../styles/index.css';  // if index.css is in the src/styles folder
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';
import c8 from '../assets/images/c8.jpg';



const Popular = () => {
  const courses = [
    {
      id: 1,
      image: c1,
      title: '2023 Python Data Visualization Master Class',
      instructor: 'Col Steele',
      rating: '4.9⭐⭐⭐⭐⭐',
      price: '₹449',
      originalPrice: '₹1999',
    },
    {
      id: 2,
      image: c2,
      title: 'The complete 2024 Web Development BootCamp',
      instructor: 'Dr. Angela Yu',
      rating: '3.7⭐⭐⭐',
      price: '₹999',
      originalPrice: '₹2499',
    },
    {
      id: 3,
      image: c3,
      title: '100 Days of Code: The Complete Java Pro BootCamp',
      instructor: 'Dr. William Shawn',
      rating: '4.5⭐⭐⭐⭐',
      price: '₹1499',
      originalPrice: '₹3499',
    },
    {
      id: 4,
      image: c4,
      title: 'The Complete AI Powered CopyWriting Course',
      instructor: 'Tomas Maverick',
      rating: '4.6⭐⭐⭐⭐',
      price: '₹3099',
      originalPrice: '',
    },
    {
      id: 5,
      image: c5,
      title: 'The MERN stack Full Course',
      instructor: 'Dr. Lorence',
      rating: '4.9⭐⭐⭐⭐',
      price: '₹199',
      originalPrice: '₹1999',
    },
    {
      id: 6,
      image: c6,
      title: 'GitHub Tutorial and Fundamental Usecase Tutorial',
      instructor: 'Garyoak',
      rating: '3.6⭐⭐⭐',
      price: '₹599',
      originalPrice: '₹2599',
    },
    {
      id: 7,
      image: c7,
      title: 'The Complete Fullstack Course from EMC',
      instructor: 'Satish Sekar',
      rating: '4.6⭐⭐⭐⭐',
      price: '₹5999',
      originalPrice: '',
    },
    {
      id: 8,
      image: c8,
      title: 'Python for Data Science BootCamp',
      instructor: 'Dhinesh Raj',
      rating: '4.5⭐⭐⭐⭐',
      price: 'FREE',
      originalPrice: '',
    },
  ];

  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular Courses</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <p>{course.title}</p>
            <p>{course.instructor}</p>
            <p>{course.rating}</p>
            <p>
              {course.price} <del>{course.originalPrice}</del>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
