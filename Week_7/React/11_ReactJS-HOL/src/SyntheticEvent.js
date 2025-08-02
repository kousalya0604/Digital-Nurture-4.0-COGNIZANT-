function SyntheticEvent() {
  const handleClick = (e) => {
    alert('I was clicked');
    console.log('Synthetic Event:', e);
  };

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default SyntheticEvent;
