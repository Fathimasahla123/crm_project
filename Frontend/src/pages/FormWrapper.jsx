const FormWrapper = ({ title, children }) => (
    <div className="flex items-center justify-center min-h-100 bg-gray-100">
      <div className="bg-green-50 p-30 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-green-500">{title}</h1>
        {children}
      </div>
    </div>
  );
  
  export default FormWrapper;
  