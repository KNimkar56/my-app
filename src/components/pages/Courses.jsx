import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    {
      id: 'math',
      title: 'Mastering Math',
      description: 'Learn Algebra, Arithmetic, Geometry, and more with our step-by-step modules.',
      image: 'https://darlaston-graceacademy.org.uk/wp-content/uploads/Mathematics-Banner-for-Website.png',
    },
    {
      id: 'science',
      title: 'Science Simplified',
      description: 'Explore Physics, Chemistry & Biology with real-world examples and visual learning.',
      image: 'https://wallpapers.com/images/hd/google-slides-background-0g67hae23kptdbax.jpg',
    },
    {
      id: 'english',
      title: 'English Grammar Essentials',
      description: 'Improve your grammar, writing, and communication skills with easy-to-follow lessons.',
      image: 'https://cdn1.vectorstock.com/i/1000x1000/98/10/design-concept-of-word-english-website-banner-vector-20429810.jpg',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold" style={{ color: '#002B5B' }}>
        📘 Our Courses
      </h1>
      <div className="row g-4">
        {courses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div
              className="card h-100 border-0 shadow-sm"
              style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold" style={{ color: '#002B5B' }}>{course.title}</h5>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <Link
                  to={`/courses/${course.id}`}
                  className="btn w-100 fw-bold"
                  style={{
                    backgroundColor: '#FFC107',
                    color: '#002B5B',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#002B5B';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#FFC107';
                    e.currentTarget.style.color = '#002B5B';
                  }}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
