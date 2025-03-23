import { pages } from '../content/Content';
import { useFormStore } from '../store/formStore';
import { useWindowSize } from '../store/WindowContext';
import Paginate from '../components/Paginate';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

export default function Form() {
  const { windowSizeChecker, windowSize } = useWindowSize();
  const { currentStep } = useFormStore();

  const formSize = windowSizeChecker ? windowSize : 500;

  return (
    <>
      <div className="container">
        <Paginate />

        <div className="form-container">
          <div className="form-content">
            {pages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ x: 0 }}
                animate={{
                  x: -currentStep * formSize,
                }}
                transition={{
                  type: 'tween',
                }}
              >
                {page.component}
              </motion.div>
            ))}
          </div>

          <Buttons />
        </div>
      </div>
    </>
  );
}
