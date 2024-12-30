import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaHome, FaBook, FaPaw } from 'react-icons/fa';

    const categories = [
      { name: 'Housekeeping', icon: FaHome, path: '/services?category=housekeeping' },
      { name: 'Tutoring', icon: FaBook, path: '/services?category=tutoring' },
      { name: 'Pet Sitting', icon: FaPaw, path: '/services?category=petsitting' },
    ];

    function HomePage() {
      return (
        <div>
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Local Professionals for Any Need</h1>
            <p className="text-gray-600 text-lg">Browse our trusted service providers and book with ease.</p>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.name} to={category.path} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                  <category.icon className="text-indigo-600 text-2xl" />
                  <span className="font-semibold">{category.name}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      );
    }

    export default HomePage;
