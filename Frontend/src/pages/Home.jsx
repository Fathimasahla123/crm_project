const HomePage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCorCchd68isr1svOUwJJWjGj5P--K7GgXGg&s')] bg-cover bg-center h-screen">
        <div className="bg-green-50 p-30 rounded-lg shadow-lg text-center">
          <h1 className="text-6xl font-bold mb-4 text-green-500">Welcome to Home Page</h1>
          <p className="text-gray-700">This is a public page. Anyone can access it.</p>
        </div>
      </div>
    );
  };
  export default HomePage;