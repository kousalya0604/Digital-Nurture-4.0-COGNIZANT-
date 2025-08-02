function SayWelcome() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={() => handleClick('Welcome!')}>Say Welcome</button>
    </div>
  );
}

export default SayWelcome;
