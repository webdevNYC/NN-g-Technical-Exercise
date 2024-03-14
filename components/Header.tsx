// Importing necessary FontAwesome components and the LinkedIn icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <header className='bg-black py-5'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-right'>
          <h1 className='text-xl font-semibold text-white'>
            NN/g Senior Frontend Developer - Technical Exercise
          </h1>
          <p className='text-md text-white inline-flex items-center justify-end'>
            Adriana Fruchter
            <a
              href='https://www.linkedin.com/in/your-linkedin-id'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='text-blue-600 h-5 w-5'
              />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
