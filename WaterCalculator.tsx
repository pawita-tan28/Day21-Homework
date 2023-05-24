import React, { useState } from 'react';

const WaterCalculator = () => {
  const [weight, setWeight] = useState<number>(0);
  const [theme, setTheme] = useState('day');
  const [waterIntake, setWaterIntake] = useState<number>(0);

  const calculateWaterAmount = (weight: number) => {
    const waterPerDay = weight * 2.2 * 30 / 2;
    return waterPerDay;
  };

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const weightValue = +event.target.value;
    setWeight(weightValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const waterIntake = calculateWaterAmount(weight);
    setWaterIntake(waterIntake);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === 'day' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <h2>สูตร : นํ้าหนัก x 2.2 x 30/2 = ปริมาณนํ้า(มล.)</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="weight">น้ำหนักของคุณ (กิโลกรัม):</label>
          <input type="number" id="weight" name="weight" onChange={onChangeWeight} />
          <button type="submit">คำนวณ</button>
        </form>
      </div>
      <div>
        <label>ปริมาณน้ำที่ควรดื่ม:</label>
        <span>{waterIntake} มล.</span>
      </div>
      <br />
      <button onClick={handleThemeSwitch}>{theme === 'day' ? 'Light' : 'Dark'} Mode</button>
    </div>
  );
};

export default WaterCalculator;