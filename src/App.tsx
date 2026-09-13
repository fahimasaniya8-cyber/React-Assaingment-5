import { useEffect, useState } from 'react';

import './App.css';

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TechnologyCard from './Components/TechnologyCard';
import Stack from './Components/Stack';
import Footer from './Components/Footer';

import { technologies, type Technology } from './data/technology';

const App = () => {
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter(item => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  if (loading) {
    return (
      <div className="page-loader">
        <p>Loading.....</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <section className="technology-section" id="technologies">
          <div className="section-heading">
            <h2>
              Explore the <span>Technologies</span>
            </h2>

            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="content-wrapper">
            <div className="technology-grid">
              {technologies.map(technology => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isAdded={stack.some(item => item.id === technology.id)}
                />
              ))}
            </div>

            <Stack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
