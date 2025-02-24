const Child = ({ handleChangeCount }) => {
  const CHANGE_AMT = 1;

  const handleMinusClick = () => {
    handleChangeCount(-CHANGE_AMT);
  };

  const handlePlusClick = () => {
    handleChangeCount(CHANGE_AMT);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;
