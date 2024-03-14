const Header: React.FC = () => {
  return (
    <header className='bg-black py-5'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-right'>
          <h1 className='text-xl font-semibold text-white'>
            NN/g Senior Frontend Developer - Technical Exercise
          </h1>
          <p className='text-md text-white inline-flex items-center justify-end'>

            <a
              href='https://www.linkedin.com/in/adriana-fruchter/'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2'>
              Adriana Fruchter
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
